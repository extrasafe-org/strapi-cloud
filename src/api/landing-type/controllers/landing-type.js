'use strict';

/**
 * landing-type controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::landing-type.landing-type', ({ strapi }) => ({
  async find(ctx) {
    // Fetch data with population
    const entities = await strapi.entityService.findMany('api::landing-type.landing-type', {
      populate: {
        ab_test_configs: { // Corrected to match schema
          populate: '*', // Use '*' for dynamic components
        },
        Template: true,
      },
    });

    // Remove unnecessary fields
    const sanitizedEntities = entities.map(entity => {
      const { createdBy, updatedBy, ...rest } = entity;
      if (rest.ab_test_configs) {
        rest.ab_test_configs = rest.ab_test_configs.map(config => ({
          ...config,
          createdBy: undefined,
          updatedBy: undefined,
        }));
      }
      return rest;
    });

    return this.transformResponse(sanitizedEntities);
  },

  async findOne(ctx) {
    const { id } = ctx.params;

    // Fetch data with population
    const entity = await strapi.entityService.findOne('api::landing-type.landing-type', id, {
      populate: {
        ab_test_configs: { // Corrected to match schema
          populate: '*', // Use '*' for dynamic components
        },
        Template: true,
      },
    });

    // Remove unnecessary fields
    const { createdBy, updatedBy, ...sanitizedEntity } = entity;
    if (sanitizedEntity.ab_test_configs) {
      sanitizedEntity.ab_test_configs = sanitizedEntity.ab_test_configs.map(config => ({
        ...config,
        createdBy: undefined,
        updatedBy: undefined,
      }));
    }

    return this.transformResponse(sanitizedEntity);
  },
}));
