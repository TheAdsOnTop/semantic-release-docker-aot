const { execSync } = require('child_process');
const { parse } = require('dotenv');
const { readFileSync } = require('fs');

const env = parse(readFileSync('.env'));

const dockerRepoName = `${env.REACT_APP_NAME}`;

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
