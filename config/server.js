module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    // keys: env.array('APP_KEYS'),
        keys: [
      "c3f6a2d8e1b9f4d3a2c1e5b7d9a8f6c3f1e2d4b6a8c9e0f7d3b2a5c7e9f0d1a27f8e9d0c1b2a3f4e5d6c7b8a9f0e1d2c3b4a5d6e7f8c9b0a1d2e3f4c5b6a7d8e",
      "8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c3b2a1f0e9d8c7b6a5d4c3f2e1d0c9b8a7f61a2b3c4d5e6f7081928374655566778899aabbccddeeff001122334455667788"
    ],
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
