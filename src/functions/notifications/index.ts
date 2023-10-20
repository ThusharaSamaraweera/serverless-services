import { AWS } from '@serverless/typescript';

export const notificationFunctions: AWS["functions"] = {
  notifications: {
    handler: `src/functions/notifications/handler.main`,
    events: [
      {
        http: {
          method: "post",
          path: "notifications/send-email",
          cors: true,
        },
      },
    ],
  },
};