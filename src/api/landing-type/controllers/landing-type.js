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
        ab_test_configs: {
          populate: '*',
        },
        Template: true,
        icons_list: {
          populate: {
            icons_list_item: {
              populate: '*'
            },
          },
        },
        hero_section_media: {
          populate: '*'
        },
        features_list: {
          populate: {
            features_list_item: {
              populate: '*'
            },
          },
        },
        faq_list: {
          populate: {
          faq_list_item: {
              populate: '*'
            },
          },
        },

        TechnologySection: {
          populate: {
          IconsBlockItem: {
              populate: '*'
            },
          },
        },
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
        ab_test_configs: {
          populate: '*',
        },
        Template: true,
        icons_list: {
          populate: {
            icons_list_item: {
              populate: '*'
            },
          },
        },
        features_list: {
          populate: {
            features_list_item: {
              populate: '*'
            },
          },
        },
         faq_list: {
          populate: {
            faq_list_item: {
              populate: '*'
            },
          },
        },
             TechnologySection: {
          populate: {
          IconsBlockItem: {
              populate: '*'
            },
          },
        },
        hero_section_media: {
          populate: '*'
        }
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