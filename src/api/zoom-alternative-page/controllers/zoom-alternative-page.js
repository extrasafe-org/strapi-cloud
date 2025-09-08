'use strict';

/**
 * zoom-alternative-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::zoom-alternative-page.zoom-alternative-page', ({ strapi }) => ({
    async find(ctx) {
        try {
            const entity = await strapi.service('api::zoom-alternative-page.zoom-alternative-page').find({
                populate: {
                    MediaHeroSection: {
                        populate: '*'
                    },
                    TableSection: {
                        populate: {
                            IconsListSubsection: {
                                populate: {
                                    CardsList: {
                                        populate: '*'
                                    }
                                }
                            },
                            TableList: {
                                populate: '*'
                            }
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
