/** @type {import('next').NextConfig} */
// const  removeImports = require('next-remove-imports')();

const nextConfig = {};

// module.exports = removeImports({
//     ...nextConfig,
// });

module.exports = {
    ...nextConfig,
    webpack: (
        config,
        { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
    ) => {
        // Important: return the modified config
        config.module.rules.push({
            test: /\.md$/,
            use: "raw-loader",
        });
        return config;
    },
};
