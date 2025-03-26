'use strict';

/**
 * browser-lite-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::browser-lite-page.browser-lite-page', ({ strapi }) => ({
//   async find(ctx) {
//     // Fetch data with population
//     const entities = await strapi.entityService.findMany('api::browser-lite-page.browser-lite-page', {
//       populate: {
//         HeroSection: {
//           populate: '*', 
//         },
//       },
//     });

//     // Remove unnecessary fields
//     const sanitizedEntities = entities.map(entity => {
//       const { createdBy, updatedBy, ...rest } = entity;
//       return rest;
//     });

//     return this.transformResponse(sanitizedEntities);
//   },

//   async findOne(ctx) {
//     const { id } = ctx.params;

//     // Fetch data with population
//     const entity = await strapi.entityService.findOne('api::browser-lite-page.browser-lite-page', id, {
//       populate: {
//         HeroSection: {
//           populate: '*', 
//         },
//       },
//     });

//     // Remove unnecessary fields
//     const { createdBy, updatedBy, ...sanitizedEntity } = entity;

//     return this.transformResponse(sanitizedEntity);
//   },
// }));