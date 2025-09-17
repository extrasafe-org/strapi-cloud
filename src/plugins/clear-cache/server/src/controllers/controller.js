const controller = ({ strapi }) => ({
  async clearCache(ctx) {
    try {
      const hookUrl = process.env.VERCEL_DEPLOY_HOOK_URL;

      if (!hookUrl) {
        ctx.throw(500, 'Missing VERCEL_DEPLOY_HOOK_URL in env');
      }

      const response = await fetch(hookUrl, {
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error(`Failed to trigger Vercel hook: ${response.statusText}`);
      }

      ctx.body = { message: 'Vercel cache purge triggered ✅' };
    } catch (err) {
      strapi.log.error('Error clearing cache:', err);
      ctx.throw(500, err);
    }
  },
});

export default controller;
