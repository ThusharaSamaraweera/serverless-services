import type { AWS } from "@serverless/typescript";

const serverlessConfiguration: AWS = {
  service: "serverless-services",
  frameworkVersion: "3",
  useDotenv: true,
  plugins: ["serverless-dotenv-plugin", "serverless-offline"],
  provider: {
    name: "aws",
    runtime: "nodejs18.x",
    region: "us-east-1",
    stage: "dev",
    logs: {
      restApi: true,
    },
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
  },
  functions: {
    notifications: {
      handler: `dist/src/functions/notifications/handler.main`,
      events: [
        {
          http: {
            method: "post",
            path: "/send-email",
            cors: true,
          },
        },
      ],
    },
  },
};

module.exports = serverlessConfiguration;