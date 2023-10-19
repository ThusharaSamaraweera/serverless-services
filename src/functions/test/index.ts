import { AWS } from '@serverless/typescript';

export const testFunctions: AWS["functions"] = {
  test: {
    handler: `src/functions/test/handler.main`,
    events: [
      {
        http: {
          method: "post",
          path: "/test",
          cors: true,
        },
      },
    ],
  },
};