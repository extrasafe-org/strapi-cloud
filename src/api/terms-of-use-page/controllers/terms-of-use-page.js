'use strict';

/**
 * terms-of-use-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::terms-of-use-page.terms-of-use-page', ({ strapi }) => ({
  async find(ctx) {
    try {
      const entity = await strapi.service('api::privacy-policy-page.privacy-policy-page').find({
    populate: {
          blocks: {
            on: {
              'blocks.block-dot-list-with-title': {
                populate: {
                  list_block: {
                    populate: {
                      block_dot_list: {
                        populate: '*'
                      }
                    }
                  }
                }
              },
              'blocks.block-with-top-border': {
                populate: '*'
              }
            }
          }
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
