'use strict';

/**
 * browser-lite-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::browser-lite-page.browser-lite-page', ({ strapi }) => ({
  async find(ctx) {
    try {
      const entity = await strapi.entityService.findOne('api::browser-lite-page.browser-lite-page', {
        populate: {
          HeroSection: {
            populate: '*',
          },
        },
      });

      if (!entity) {
        ctx.throw(404, 'Not Found');
      }

      const { createdBy, updatedBy, ...sanitizedEntity } = entity;

      return this.transformResponse(sanitizedEntity);
    } catch (error) {
      ctx.throw(500, 'Internal Server Error', { details: error.message });
    }
  },

}));