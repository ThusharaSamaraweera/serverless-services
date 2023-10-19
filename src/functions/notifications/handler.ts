import { APIGatewayProxyEvent, APIGatewayProxyResult, Handler } from "aws-lambda";

export const main: Handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {

  //@ts-ignore
  const { message1 } = event.queryStringParameters;
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully!",
        input: message1,
      },
      null,
      2
    ),
  };
};
