module.exports = (config) => {
    config.set({
        frameworks: ["jasmine","karma-typescript"],
        files: [
            { pattern: "./lesson/functions-write/**/*.ts" }
        ],
        preprocessors: {
            "**/*.ts": ["karma-typescript"]
        },
        reporters: ["progress", "karma-typescript"],
        browsers: ["ChromeHeadless"],
        singleRun: true,
        karmaTypescriptConfig: {
            tsconfig: "./lesson/functions-write/tsconfig.json",
            reports: {
                "html": "coverage",
                "text": ""
            }
        }
    })
}