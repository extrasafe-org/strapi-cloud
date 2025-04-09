module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    await next();

    if (ctx.request.path.startsWith('/uploads')) {
      const filename = ctx.request.path.split('/').pop();

        
// Download files starting with a specific prefix (custom_download_):
  if (filename.startsWith('custom_download_')) {
  ctx.set('Content-Disposition', `attachment; filename="${filename}"`);
  }
    }
  };
};