'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::browser-lite-page.browser-lite-page');

// 'use strict';

// /**
//  * browser-lite-page controller
//  */

// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::browser-lite-page.browser-lite-page', ({ strapi }) => ({
//   async find(ctx) {
//     try {
//       // Минимальный запрос к Single Type без параметров
//       const entity = await strapi.entityService.findOne('api::browser-lite-page.browser-lite-page', {
//         populate: '*', // Популяция всех полей первого уровня
//       });

//       // Проверка результата
//       if (!entity) {
//         return ctx.throw(404, 'No content found');
//       }

//       // Убираем системные поля
//       const { createdBy, updatedBy, ...sanitizedEntity } = entity;

//       // Возвращаем отформатированный ответ
//       return this.transformResponse(sanitizedEntity);
//     } catch (error) {
//       // Подробный вывод ошибки для диагностики
//       return ctx.throw(500, 'Internal Server Error', {
//         details: error.message,
//         stack: error.stack,
//       });
//     }
//   },
// }));