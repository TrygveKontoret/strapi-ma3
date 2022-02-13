'use strict';

/**
 *  caesar controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::caesar.caesar');
