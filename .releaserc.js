module.exports = {
    verifyConditions: ['@semantic-release/github'],
    prepare: [],
    publish: [
        '@semantic-release/github',
        './plugin.js',
    ],
    analyzeCommits: {
        releaseRules: [{ breaking: true, release: 'minor' }],
    },
    generateNotes: {
        preset: 'aot',
    },
};
