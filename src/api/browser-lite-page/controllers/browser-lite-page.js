'use strict';

/**
 * browser-lite-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::browser-lite-page.browser-lite-page', ({ strapi }) => ({
  async find(ctx) {
    try {
 
      const { locale = 'en' } = ctx.query;

    
      const entity = await strapi.entityService.findOne('api::browser-lite-page.browser-lite-page', {
        locale,
        populate: {
          HeroSection: { populate: '*' },
          IconsListSection: { populate: '*' },
          BannerSection: { populate: '*' },
          MediaWithTextSection: { populate: '*' },
          BannerWithButtonSection: { populate: '*' },
        },
      });

      if (!entity) {
        return ctx.throw(404, `No content found for locale "${locale}"`);
      }

      
      const { createdBy, updatedBy, ...sanitizedEntity } = entity;

      return this.transformResponse(sanitizedEntity);
    } catch (error) {
  
      ctx.throw(500, 'Internal Server Error2', {
        details: error.message,
        stack: error.stack,
      });
    }
  },
}));