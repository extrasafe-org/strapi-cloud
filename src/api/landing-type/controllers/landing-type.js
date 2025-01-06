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
        ab_test_config: {
          populate: '*', // Use '*' for dynamic components
        },
      },
    });

    // Remove unnecessary fields
    const sanitizedEntities = entities.map(entity => {
      const { createdBy, updatedBy, ...rest } = entity;
      if (rest.ab_test_config) {
        rest.ab_test_config = {
          ...rest.ab_test_config,
          createdBy: undefined,
          updatedBy: undefined,
        };
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
        ab_test_config: {
          populate: '*', // Use '*' for dynamic components
        },
      },
    });

    // Remove unnecessary fields
    const { createdBy, updatedBy, ...sanitizedEntity } = entity;
    if (sanitizedEntity.ab_test_config) {
      sanitizedEntity.ab_test_config = {
        ...sanitizedEntity.ab_test_config,
        createdBy: undefined,
        updatedBy: undefined,
      };
    }

    return this.transformResponse(sanitizedEntity);
  },
}));
