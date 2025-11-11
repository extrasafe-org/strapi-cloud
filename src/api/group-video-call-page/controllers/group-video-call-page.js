'use strict';

/**
 * group-video-call-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::group-video-call-page.group-video-call-page', ({ strapi }) => ({
    async find(ctx) {
        try {
            const entity = await strapi.service('api::group-video-call-page.group-video-call-page').find({
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
                    FeaturesSection: {
                        populate: {
                            FeaturesList: {
                                populate: '*'
                            }
                        },
                    },
                     QuoteCarouselSection: {
                        populate: {
                            TextBlock: {
                                populate: '*'
                            },
                            QuoteCarousel: {
                                populate: '*'
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
                    SoonWithBtnsSection: {
                        populate: {
                            TextBlock: {
                                populate: '*'
                            },
                            SelectionButton: {
                                populate: '*'
                            },
                            media: {
                                populate: '*'
                            }
                        }
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
