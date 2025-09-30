'use strict';

/**
 * knowledge-hub-article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::knowledge-hub-article.knowledge-hub-article', ({ strapi }) => ({
  async find(ctx) {
   
    ctx.query = {
      ...ctx.query,
      populate: {
        content: { populate: '*' },
        thumbnail: { populate: '*' },
      },
    };


    const { data, meta } = await super.find(ctx);

    
    const sanitizedData = data.map(entity => {
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

    return { data: sanitizedData, meta };
  },

  async findOne(ctx) {
   
    ctx.query = {
      ...ctx.query,
      populate: {
        content: { populate: '*' },
        thumbnail: { populate: '*' },
      },
    };


    const { data } = await super.findOne(ctx);


    const { createdBy, updatedBy, ...sanitizedEntity } = data;
    if (sanitizedEntity.ab_test_configs) {
      sanitizedEntity.ab_test_configs = sanitizedEntity.ab_test_configs.map(config => ({
        ...config,
        createdBy: undefined,
        updatedBy: undefined,
      }));
    }

    return { data: sanitizedEntity, meta: {} };
  },
}));
