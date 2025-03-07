'use server';

import { echo, messageService } from '@/app/message-service';
import { EchoRequest } from '@/grpc/service';

export const getData = async (): Promise<string> => {
  const result = await echo(
    new EchoRequest({
      message: 'Hello from the server actions',
      id: 100000,
    }),
  );

  return result?.message || 'No message returned';
};

// Note that this way we can define the type of the message, instead
// of getting an arbitrary data from a web socket.
export async function* streamData(): AsyncGenerator<string> {
  const stream = messageService.EchoStream(
    new EchoRequest({
      message: 'Hello from the server actions streamed request',
    }),
  );

  for await (const response of stream) {
    yield response.message;
  }
}
