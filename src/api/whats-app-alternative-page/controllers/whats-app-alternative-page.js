'use strict';

/**
 * whats-app-alternative-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::whats-app-alternative-page.whats-app-alternative-page', ({ strapi }) => ({
    async find(ctx) {
        try {
            const entity = await strapi.service('api::whats-app-alternative-page.whats-app-alternative-page').find({
                populate: {
                    StepsSection: {
                        populate: {
                          CarouselList: {
                            populate: '*'
                          },
                        },
                    },
                    WideSliderSection: {
                        populate: {
                            FeaturesList: {
                             populate: '*'
                         }
                     },
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
