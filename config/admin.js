module.exports = ({ env }) => {

    const getPreviewPathname = (uid, { locale, document }) => {
    // Example: handle single types by their UID
    switch (uid) {
      case "api::press-page.press-page":
        return "/press";
      case "api::mobile-app-page.mobile-app-page":
        return "/mobile-app";
      // Add more single types as needed

      // Example for a collection type with slug
      case "api::blog-article.blog-article":
        return document.slug ? `/blog/${document.slug}` : "/blog";
      default:
        return null; // disables preview if not applicable
    }
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
          const document = await strapi.documents(uid).findOne({
            documentId,
            populate: null,
            fields: ["slug"],
          });

          const pathname = getPreviewPathname(uid, { locale, document });
          console.log('🔥🔥🔥🔥', pathname)
          if (!pathname) return null; 

          const urlSearchParams = new URLSearchParams({
            secret: env("PREVIEW_SECRET"),
            uid,
            status,
          });

          // Add slug if available
          if (document.slug) {
            urlSearchParams.set("slug", document.slug);
          }

          const previewURL = `${env("CLIENT_URL")}/api/preview?${urlSearchParams}&url=${pathname}`;
          return previewURL;
        },
      },
    },
    // V1
    // preview: {
    //   enabled: true,
    //   config: {
    //     allowedOrigins: [env("CLIENT_URL")],
    //     async handler(uid, { documentId, locale, status }) {
    //       const document = await strapi.documents(uid).findOne({
    //         documentId,
    //         populate: null,
    //         fields: ["slug"],
    //       });
    //       const { preview_slug } = document;

    //       const urlSearchParams = new URLSearchParams({
    //         secret: env("PREVIEW_SECRET"),
    //         ...(preview_slug && { slug: preview_slug }),
    //         uid,
    //         status,
    //       });

    //       const previewURL = `${env("CLIENT_URL")}/api/preview?${urlSearchParams}`;
    //       return previewURL;
    //     },
    //   },
    // },
    // V2
    //  preview: {
    //     enabled: true,
    //     config: {
    //       allowedOrigins: [env("CLIENT_URL")],
    //       async handler(uid, { documentId, locale, status }) {
    //         const document = await strapi.documents(uid).findOne({
    //           documentId,
    //           fields: ["slug", "preview_slug"],
    //         });

    //         let pathname = null;

    //         if (strapi.contentTypes[uid]?.kind === "singleType") {
    //           pathname = `/${document.preview_slug || uid.split(".")[1]}`;
    //         } else {
    //           pathname = `/${document.slug}`;
    //         }

    //         if (!pathname) return null;

    //         console.log("Preview Pathname for", uid, "→", pathname);

    //         const params = new URLSearchParams({
    //           secret: env("PREVIEW_SECRET"),
    //           uid,
    //           status,
    //           ...(document.slug && { slug: document.slug }),
    //         });

    //         return `${env("CLIENT_URL")}${pathname}?${params}`;
    //       },
    //     },
    //   },
    // V3

  }
};
