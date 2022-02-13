'use strict';

/**
 * caesar service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::caesar.caesar');
