'use strict';

/**
 * mobile-app-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::mobile-app-page.mobile-app-page', ({ strapi }) => ({
    async find(ctx) {
        try {
            const entity = await strapi.service('api::mobile-app-page.mobile-app-page').find({
                populate: {
                    MediaHeroSectionWithLinks: {
                        populate: '*'
                    },
                    icons_list: {
                        populate: '*'
                    },
                    FeaturesSection: {
                        populate: '*'
                    },
                    SecureSection: {
                        populate: '*'
                    },
                    BannerWithMediaSection: {
                         populate: '*'
                    },
                    SoonSection: {
                        populate: '*'
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
