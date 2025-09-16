// const { mergeConfig } = require('vite');

// module.exports = (config) => {
//   return mergeConfig(config, {
//     resolve: {
//       alias: {
//         '@': '/src',
//       },
//     },
//   });
// };


const { mergeConfig } = require("vite");
const path = require("path");
const { headlockrPlugin } = require("@headlockr/headlockr/vite");

module.exports = async (config) => {
  const runtimeDir = path.join(process.cwd(), ".strapi", "client");
  const entryFile = path.join(runtimeDir, "headlockr-admin-panel.tsx");

  return mergeConfig(config, {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    build: {
      rollupOptions: {
        input: {
          headlockr: entryFile,
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true,
        },
      },
    },
    plugins: [
      headlockrPlugin({
        runtimeDir,
        logger: console,
      })
    ],
  });
};