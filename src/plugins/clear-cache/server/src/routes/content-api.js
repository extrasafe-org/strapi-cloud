export default [
  {
    method: 'POST',
    path: '/',
    // name of the controller file & the method.
    handler: 'controller.clearCache',
    config: {
      policies: [],
    },
  },
  // {
  //   method: 'GET',
  //   path: '/',
  //   // name of the controller file & the method.
  //   handler: 'controller.getContentCounts',
  //   config: {
  //     policies: [],
  //   },
  // },
];
