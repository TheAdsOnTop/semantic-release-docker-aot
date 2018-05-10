# Run on the 8.9.0-alpine release of node
FROM node:8.9.0-alpine

ENV NPM_CONFIG_LOGLEVEL warn

# Install serve to run the application
RUN npm install -g pushstate-server
CMD pushstate-server build 8080

# Run the app on port 9000
EXPOSE 8080
