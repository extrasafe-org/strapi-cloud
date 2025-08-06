'use strict';

/**
 * dev-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dev-page.dev-page');
