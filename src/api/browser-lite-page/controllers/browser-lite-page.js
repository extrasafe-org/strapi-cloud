// 'use strict';

// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::browser-lite-page.browser-lite-page');

'use strict';

/**
 * browser-lite-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::browser-lite-page.browser-lite-page', ({ strapi }) => ({
  async find(ctx) {
    try {
      const entity = await strapi.service('api::browser-lite-page.browser-lite-page').find({
        populate: {
          HeroSection: {
            populate: {
              media: {
                populate: '*'
              },
              icons_list: {
                populate: {
                  icons_list_item: {
                    populate: '*'
                  },
                },
              },
            },
          },
          CarouselSection: {
            populate: {
              CarouselList: {
                populate: '*'
              },
            },
          },
          IconsListSection: {
            populate:
            {
              IconsBlock: {
                populate: {
                  IconsBlockItem: {
                    populate: '*'
                  }
                }
              },
              media: {
                populate: '*'
              },
            }
          },
          BannerSection: {
            populate: '*',
          },
          MediaWithTextSection: {
            populate: {
              media: {
                populate: '*'
              },
            },
          },
          BannerWithButtonSection: {
            populate: '*',
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