// module.exports = {
// 	'multi-select': {
// 		enabled: true,
// 		resolve: './src/plugins/multi-select',
// 	},
// // 	  'clear-cache': {
// //     enabled: true,
// //     resolve: './src/plugins/clear-cache'
// 	//   },
//   headlockr: {
//     enabled: true,
//     config: {
//       licenseKey: env('HEADLOCKR_LICENSE_KEY'),
//       apiKey: env('HEADLOCKR_API_KEY'),
//       apiSecret: env('HEADLOCKR_API_SECRET'),
//     },
//   },
// };

module.exports = ({ env }) => {
  //   console.log('🧩 HeadLockr loaded with SECRET (first 8 chars):', env('HEADLOCKR_API_SECRET')?.slice(0, 8));
  // console.log('🧩 HeadLockr loaded with API_KEY:', env('HEADLOCKR_API_KEY'));
 return {
  'multi-select': {
    enabled: true,
    resolve: './src/plugins/multi-select',
  },
  // 'clear-cache': {
  //   enabled: true,
  //   resolve: './src/plugins/clear-cache',
  // },
  headlockr: {
    enabled: true,
    config: {
      licenseKey: env('HEADLOCKR_LICENSE_KEY'),
      apiKey: env('HEADLOCKR_API_KEY'),
      apiSecret: env('HEADLOCKR_API_SECRET'),
    },
  },
}
};
