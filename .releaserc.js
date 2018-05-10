module.exports = {
    verifyConditions: ['@semantic-release/github'],
    prepare: [],
    publish: [
        '@semantic-release/github',
        '@semantic-release/npm',
        './plugin.js',
    ],
    analyzeCommits: {
        releaseRules: [{ breaking: true, release: 'minor' }],
    },
    generateNotes: {
        preset: 'aot',
    },
};
