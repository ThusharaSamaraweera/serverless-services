import type { AWS } from "@serverless/typescript";
import { notificationFunctions } from "./src/functions/notifications";

const serverlessConfiguration: AWS = {
  service: "serverless-services",
  frameworkVersion: "3",
  useDotenv: true,
  plugins: ["serverless-dotenv-plugin", "serverless-offline", "serverless-plugin-typescript"],
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
    ...notificationFunctions,
  },
};

module.exports = serverlessConfiguration;
