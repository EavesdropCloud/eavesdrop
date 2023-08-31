const { preProcessFile, ModuleResolutionKind } = require('typescript')

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, context) => {
        if(process.env.NEXT_WEBPACK_USEPOLLING) {
            config.watchOptions = {
            poll: 500,
            aggregateTimeout: 300
            }
        }
        return config
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://eavesdrop-backend-1:5000/api/:path*'
            }
        ]
    },
}

module.exports = nextConfig


