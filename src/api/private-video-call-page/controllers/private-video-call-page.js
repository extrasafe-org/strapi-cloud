'use strict';

/**
 * private-video-call-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::private-video-call-page.private-video-call-page', ({ strapi }) => ({
    async find(ctx) {
        try {
            const entity = await strapi.service('api::private-video-call-page.private-video-call-page').find({
                populate: {
                    SecondMediaHeroSection: {
                        populate: {
                                  TextBlock: {
                                populate: '*'
                            },
                            media: {
                                 populate: '*'
                            },
                                 IconsList: {
                                     populate: {
                                         icons_list_item: {
                                        populate: '*'
                                    }
                                }
                            },
                        }
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
                    TechnologySection: {
                        populate: {
                            IconsBlockItem: {
                                populate: '*'
                            },
                            media: {
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
                            SoonSection: {
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
