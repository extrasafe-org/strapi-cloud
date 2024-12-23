'use strict';

/**
 * ab-test-config service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ab-test-config.ab-test-config');
