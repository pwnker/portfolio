/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
    images: {
        remotePatterns: [ 
            {
                protocol: "https",
                hostname: "scontent.fmbx2-1.fna.fbcdn.net",
            },
        ],
    },
    experimental: {
    },
};

export default config;
