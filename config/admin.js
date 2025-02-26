module.exports = ({ env }) => ({
  auth: {
    // secret: env('ADMIN_JWT_SECRET'),
      secret: env('ADMIN_JWT_SECRET', '3d50f023f1e3d96ab2576637e592463cfc5112d8f1f0f72b18a20f34eb40d597'),
  },
  // apiToken: {
  //   salt: env('API_TOKEN_SALT'),
  // },
    apiToken: {
    salt: env('API_TOKEN_SALT', '309aZwb00da8Q4g0U4Y2nA=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
