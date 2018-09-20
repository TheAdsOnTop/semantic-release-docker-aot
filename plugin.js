const { execSync } = require('child_process');
const { parse } = require('dotenv');
const { readFileSync, existsSync } = require('fs');
const yenv = require('yenv');

let env;

if (existsSync('.env')) {
    env = parse(readFileSync('.env'));
} else if (existsSync('env.yaml')) {
    env = yenv();
}

env = {
    ...(env || {}),
    ...process.env,
};

const dockerRepoName = env.IMAGE_NAME || env.REACT_APP_NAME || env.APP_NAME;

if (dockerRepoName == null) {
    throw new Error("APP_NAME or REACT_APP_NAME not found in env");
}

async function publish(pluginConfig, {nextRelease: {version, notes}, logger}) {
    logger.log("Building Docker Image");
    execSync(
        `docker build --rm=false --build-arg NPM_TOKEN=${
            process.env.NPM_TOKEN
        } -t 918788695031.dkr.ecr.us-west-1.amazonaws.com/${dockerRepoName}:${
            version
        } .`,
        { stdio: [0, 1, 2] },
    );

    logger.log("Pushing docker image");
    execSync(
        `docker push 918788695031.dkr.ecr.us-west-1.amazonaws.com/${
            dockerRepoName
        }:${version}`,
        { stdio: [0, 1, 2] },
    );

    return { name: 'Docker Push' };
}

module.exports = { publish }
