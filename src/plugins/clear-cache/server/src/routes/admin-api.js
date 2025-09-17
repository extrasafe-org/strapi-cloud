export default [
  {
    method: 'POST',
    path: '/clear-cache',
    // name of the controller file & the method.
    handler: 'controller.clearCache',
    config: {
      auth: false,
      policies: [],
    },
  },
];
