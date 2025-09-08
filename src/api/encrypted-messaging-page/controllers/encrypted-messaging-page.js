'use strict';

/**
 * encrypted-messaging-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::encrypted-messaging-page.encrypted-messaging-page', ({ strapi }) => ({
  async find(ctx) {
    try {
      const entity = await strapi.service('api::encrypted-messaging-page.encrypted-messaging-page').find({
        populate: {
          MediaHeroSection: {
            populate: '*'
          },
          MediaSidedSection: {
            populate: '*'
          },
          StepsWithSelectionButtonSection: {
            populate: {
              TextBlock: {
                populate: '*'
              },
              FirstStep: {
                populate: '*'
              },
              SecondStep: {
                populate: '*'
              },
              ThirdStep: {
                populate: '*'
              },

            }
          },
          CardsListSection: {
            populate: {
              CardsList: {
                populate: '*'
              }
            }
          },
          SecondFeaturesSection: {
            populate: {
              features_list: {
                populate: {
                  features_list_item: {
                    populate: '*'
                  },
                },
              },
            }
          },
          FaqSection: {
            populate: '*'
          },
        }
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
