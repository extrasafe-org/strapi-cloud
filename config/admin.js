module.exports = ({ env }) => {

  const getPreviewPathname = (uid, { locale, document }) => {
    const ct = strapi.contentTypes[uid];

    if (ct?.kind === "collectionType") {
      const base = `/${uid.split(".")[1]}`;
      return document?.slug ? `${base}/${document.slug}` : `${base}/${document.id}`;
    }

    if (ct?.kind === "singleType") {
     const base = `/${uid.split(".")[1].replace(/-page$/, '')}`;
      return base;
    }

    return null;
  };


  return {

    auth: {
      // secret: env('ADMIN_JWT_SECRET'),
      secret: env('ADMIN_JWT_SECRET', '3d50f023f1e3d96ab2576637e592463cfc5112d8f1f0f72b18a20f34eb40d597'),
    },
    // apiToken: {
    //   salt: env('API_TOKEN_SALT'),
    // },
    apiToken: {
      salt: env('API_TOKEN_SALT', '309aZwb00da8Q4g0U4Y2nA=='),
    },
    transfer: {
      token: {
        salt: env('TRANSFER_TOKEN_SALT'),
      },
    },
    flags: {
      nps: env.bool('FLAG_NPS', true),
      promoteEE: env.bool('FLAG_PROMOTE_EE', true),
    },
    preview: {
      enabled: true,
      config: {
        allowedOrigins: [env("CLIENT_URL")],
        async handler(uid, { documentId, locale, status }) {

          const ct = strapi.contentTypes[uid]

          let document

          try {
            if (ct?.kind === "collectionType") {
              const hasSlug = Boolean(ct?.attributes?.slug)

              document = await strapi.documents(uid).findOne({
                documentId,
                populate: null,
                fields: hasSlug ? ["id", "slug"] : ["id"],
              });
            } else if (ct?.kind === "singleType") {
              const hasSlug = Boolean(ct?.attributes?.slug)
              const results = await strapi.entityService.findMany(uid, {
                fields: hasSlug ? ["id", "slug"] : ["id"],
                populate: {},
              });
              document = Array.isArray(results) ? results[0] : results;
            }
          }
          catch (err) {
            console.error("❌ ❌ ❌", err)
          }

          if (!document) {
            return null
          }

          const pathname = getPreviewPathname(uid, { locale, document })
          console.log('⚡️⚡️⚡️', pathname)
          if (!pathname) return null

          const urlSearchParams = new URLSearchParams({
            secret: env("PREVIEW_SECRET"),
            uid,
            status,
          })

          if (document.slug) {
            urlSearchParams.set("slug", document.slug);
          } else {
            urlSearchParams.set("id", document.id);
          }

          const previewURL = `${env("CLIENT_URL")}/api/preview?${urlSearchParams}&url=${pathname}`

          console.log('!!!!! ⚡️⚡️⚡️⚡️⚡️⚡️', previewURL)

          return previewURL
        },
      },
    }

  }
};
