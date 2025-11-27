module.exports = ({ env }) => {
  //   console.log('🧩 HeadLockr loaded with SECRET (first 8 chars):', env('HEADLOCKR_API_SECRET')?.slice(0, 8));
  // console.log('🧩 HeadLockr loaded with API_KEY:', env('HEADLOCKR_API_KEY'));
 return {
  'multi-select': {
    enabled: true,
    resolve: './src/plugins/multi-select',
  },
}
};
