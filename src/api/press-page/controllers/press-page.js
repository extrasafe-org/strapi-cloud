'use strict';

/**
 * press-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::press-page.press-page', ({ strapi }) => ({
  async find(ctx) {
    try {
      const entity = await strapi.service('api::press-page.press-page').find({
        populate: {
          MediaSection: {
                populate: {
                  MediaListBlock: {
                        populate: {
                          MediaList: {
                            populate: '*'
                        }
                    },
                }
            },
          },
           FeaturesSection: {
               populate: {
                   FeaturesList: {
                    populate: '*'
                }
            },
          },
          FaqSection: {
            populate:  {
                   FaqList: {
                    populate: '*'
                }
            },
          },
        },
      });

      if (!entity) {
        return ctx.throw(404, 'No content found');
      }

      const sanitizedEntity = {
        id: entity.id,
        ...entity,
        createdBy: undefined,
        updatedBy: undefined,
      };

      return this.transformResponse(sanitizedEntity);
    } catch (error) {
      ctx.throw(500, 'Internal Server Error', {
        details: error.message,
        stack: error.stack,
      });
    }
  },
}));
