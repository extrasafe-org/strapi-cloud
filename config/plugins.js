module.exports = ({ env }) => ({
  'multi-select': {
    enabled: true,
    resolve: './src/plugins/multi-select',
  },

  headlockr: {
    enabled: true,
    config: {
      licenseKey: env("HEADLOCKR_LICENSE_KEY"),
    },
  },
});
