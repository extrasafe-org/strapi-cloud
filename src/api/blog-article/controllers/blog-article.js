'use strict';

/**
 * blog-article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blog-article.blog-article', ({ strapi }) => ({
    async find(ctx) {

        ctx.query = {
            ...ctx.query,
            populate: {
                content: {
                    on: {
                        'blocks.quote': {
                            populate: '*',
                        },
                        'blocks.block-heading': {
                            populate: '*',
                        },
                        'blocks.block-big-heading': {
                            populate: '*',
                        },
                        'blocks.block-list': {
                            populate: '*',
                        },
                        'blocks.block-image': {
                            populate: '*',
                        },
                        'blocks.block-youtube': {
                            populate: '*',
                        },
                        'blocks.block-social-post': {
                            populate: '*',
                        },
                        'blocks.selection-button': {
                            populate: '*',
                        },
                        'blocks.block-dot-list': {
                            populate: '*',
                        },
                        'blocks.block-ordered-list': {
                            populate: '*',
                        },


                    },
                },
                thumbnail: { populate: '*' },
                blog_categories: {
                    populate: '*'
                }
            },
        };


        const { data, meta } = await super.find(ctx);


        const sanitizedData = data.map(entity => {
            const { createdBy, updatedBy, ...rest } = entity;
            if (rest.ab_test_configs) {
                rest.ab_test_configs = rest.ab_test_configs.map(config => ({
                    ...config,
                    createdBy: undefined,
                    updatedBy: undefined,
                }));
            }
            return rest;
        });

        return { data: sanitizedData, meta };
    },

    async findOne(ctx) {

        ctx.query = {
            ...ctx.query,
            populate: {
                content: {
                    on: {
                        'blocks.quote': {
                            populate: '*',
                        },
                        'blocks.block-heading': {
                            populate: '*',
                        },
                        'blocks.block-big-heading': {
                            populate: '*',
                        },
                        'blocks.block-list': {
                            populate: '*',
                        },
                        'blocks.block-image': {
                            populate: '*',
                        },
                        'blocks.block-youtube': {
                            populate: '*',
                        },
                        'blocks.block-social-post': {
                            populate: '*',
                        },
                        'blocks.selection-button': {
                            populate: '*',
                        },
                        'blocks.block-dot-list': {
                            populate: '*',
                        },
                        'blocks.block-ordered-list': {
                            populate: '*',
                        },


                    },
                },
                thumbnail: { populate: '*' },
                blog_categories: {
                    populate: '*'
                }
            },
        };


        const { data } = await super.findOne(ctx);


        const { createdBy, updatedBy, ...sanitizedEntity } = data;
        if (sanitizedEntity.ab_test_configs) {
            sanitizedEntity.ab_test_configs = sanitizedEntity.ab_test_configs.map(config => ({
                ...config,
                createdBy: undefined,
                updatedBy: undefined,
            }));
        }

        return { data: sanitizedEntity, meta: {} };
    },
}));
