'use strict';

/**
 * secure-video-call-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::secure-video-call-page.secure-video-call-page', ({ strapi }) => ({
  async find(ctx) {
    try {
      const entity = await strapi.service('api::secure-video-call-page.secure-video-call-page').find({
          populate: {
            MediaHeroSection: {
              populate: '*'
              },
            CardsListSection: {
            populate: {
              CardsList: {
                   populate: '*'
               }
             }
              },
              SecureSection: {
              populate: '*'
              },
            MediaListBlockSection: {
              populate: '*'
              },
               StepsSection: {
          populate: {
            CarouselList: {
              populate: '*'
            },
          },
              },
                      SecondCardsListSection: {
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
