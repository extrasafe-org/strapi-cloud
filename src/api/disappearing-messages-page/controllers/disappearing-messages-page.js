'use strict';

/**
 * disappearing-messages-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::disappearing-messages-page.disappearing-messages-page', ({ strapi }) => ({
    async find(ctx) {
        try {
            const entity = await strapi.service('api::disappearing-messages-page.disappearing-messages-page').find({
                populate: {
                    MediaHeroSection: {
                        populate: '*',
                    },
                    ThirdFeaturesSection: {
                        populate: '*',
                    },
                    IconsListSecondSubsection: {
                        populate: '*',
                    },
                    FaqSection: {
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
