'use strict';

/**
 * video-conferencing-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::video-conferencing-page.video-conferencing-page', ({ strapi }) => ({
    async find(ctx) {
        try {
            const entity = await strapi.service('api::video-conferencing-page.video-conferencing-page').find({
                populate: {
                    MediaHeroSection: {
                        populate: '*'
                    },
                    StepsSection: {
                        populate: {
                          CarouselList: {
                            populate: '*'
                          },
                        },
                    },
                    CardsListSection: {
                        populate: {
                          CardsList: {
                            populate: '*'
                          }
                        }
                    },
                    FeaturesSection: {
                        populate: {
                            FeaturesList: {
                             populate: '*'
                         }
                     },
                    },
                    SecondFeaturesSection: {
                        populate: {
                            FeaturesList: {
                             populate: '*'
                         }
                     },
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
