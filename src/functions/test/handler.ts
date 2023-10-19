import { APIGatewayProxyEvent, APIGatewayProxyResult, Handler } from "aws-lambda";

export const main: Handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {

  
  const message1 = event.queryStringParameters?.message1;

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Called test function1",
        input: message1,
      },
      null,
      2
    ),
  };
};
