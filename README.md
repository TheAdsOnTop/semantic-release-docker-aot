# semantic-release-docker-aot

AOT's docker semantic-release plugin.

## How to add to a project

1. `yarn add -D semantic-release@^15 @semantic-release/docker-aot`
1. Update `.env` or `env.yaml` or add an environment variable with:
    * `APP_NAME`: the name for the docker image
    * `NPM_TOKEN`: the npm token for the npm registry
1. Add to `.releaserc.js` [example](https://github.com/TheAdsOnTop/integrations-server/blob/964e9218c449090c6276cc3efa8ec60cdf34836d/.releaserc.js#L4)
1. Make sure `yarn semantic-release` is called in ci
