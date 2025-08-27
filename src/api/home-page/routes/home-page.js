'use strict';

/**
 * home-page router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::home-page.home-page', ({ strapi }) => ({
    async find(ctx) {
        try {
            const entity = await strapi.service('api::home-page.home-page').find({
                populate: {
                    TwoSidedHeroSection: {
                        populate: {
                            LeftSide: {
                                populate: '*'
                            },
                            RightSide: {
                                populate: '*'
                            }
                        }
                    },
                    FirstFlipSection: {
                        populate: {
                            FrontSide: {
                                populate: '*'
                            },
                            BackSide: {
                                populate: '*'
                            }
                        }
                    },
                    SecondFlipSection: {
                        populate: {
                            FrontSide: {
                                populate: '*'
                            },
                            BackSide: {
                                populate: '*'
                            }
                        }
                    },
                    ThirdFlipSection: {
                        populate: {
                            FrontSide: {
                                populate: '*'
                            },
                            BackSide: {
                                populate: '*'
                            }
                        }
                    },
                    FourthFlipSection: {
                        populate: {
                            FrontSide: {
                                populate: '*'
                            },
                            BackSide: {
                                populate: '*'
                            }
                        }
                    },
                    FifthFlipSection: {
                        populate: {
                            FrontSide: {
                                populate: '*'
                            },
                            BackSide: {
                                populate: '*'
                            }
                        }
                    },
                    AnimatedCarouselSection: {
                        populate: {
                            ImageCarousel: {
                                populate: '*'
                            }
                        }
                    },
                    FaqSection: {
                         populate: '*'
                    }
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
