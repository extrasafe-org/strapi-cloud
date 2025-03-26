// 'use strict';

// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::browser-lite-page.browser-lite-page');

'use strict';

/**
 * browser-lite-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::browser-lite-page.browser-lite-page', ({ strapi }) => ({
  async find(ctx) {
    try {
      // Выполняем запрос к Single Type с полной популяцией всех вложенных данных
      const entity = await strapi.entityService.findOne('api::browser-lite-page.browser-lite-page', {
        populate: '*', // Подтягиваем все доступные поля и вложенные данные
      });

      // Если запись не найдена, возвращаем 404
      if (!entity) {
        return ctx.throw(404, 'No content found');
      }

      // Убираем системные поля
      const { createdBy, updatedBy, ...sanitizedEntity } = entity;

      // Форматируем ответ
      return this.transformResponse(sanitizedEntity);
    } catch (error) {
      // Возвращаем подробности ошибки для отладки
      ctx.throw(500, 'Internal Server Error', {
        details: error.message,
        stack: error.stack,
      });
    }
  },
}));