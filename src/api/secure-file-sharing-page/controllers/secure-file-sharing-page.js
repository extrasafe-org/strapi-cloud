'use strict';

/**
 * secure-file-sharing-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::secure-file-sharing-page.secure-file-sharing-page', ({ strapi }) => ({
    async find(ctx) {
        try {
            const entity = await strapi.service('api::secure-file-sharing-page.secure-file-sharing-page').find({
                populate: {
                       MediaHeroSection: {
            populate: '*'
          },
                            icons_list: {
                populate: {
                  icons_list_item: {
                    populate: '*'
                  },
                },
              },
                    FeaturesSection: {
                        populate: {
                            FeaturesList: {
                                populate: '*'
                            }
                        },
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
                    SecondTableSection: {
                        populate: {
                            TextBlock: {
                               populate: '*'
                            },
                             Table: {
                        populate: {
                            LeftColumnOfTable: {
                                populate: {
                                    textList: true,
                                },
                            },
                            Option: {
                                populate: {
                                    textList: true,
                                    icon: true
                                },
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
