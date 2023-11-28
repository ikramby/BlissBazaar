module.exports = {
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            return {
                ...webpackConfig,
                resolve: {
                    ...webpackConfig.resolve,
                    fallback: {
                        "buffer": require.resolve('buffer/'),
                        "crypto": require.resolve('crypto-browserify'),
                        "stream": require.resolve('stream-browserify'),
                        "util": require.resolve('util/')
                    }
                }
            };
        }
    }
};
