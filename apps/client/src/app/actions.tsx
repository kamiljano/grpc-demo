'use server';

import { echo } from '@/app/message-service';
import { EchoRequest } from '@/grpc/service';
import { setTimeout } from 'node:timers/promises';

export const getData = async (): Promise<string> => {
  const result = await echo(
    new EchoRequest({
      message: 'Hello from the server actions',
    }),
  );

  return result?.message || 'No message returned';
};

// Note that this way we can define the type of the message, instead
// of getting an arbitrary data from a web socket.
export async function* streamData(): AsyncGenerator<string> {
  for (let i = 0; i < 5; i++) {
    console.log('Streamed message');
    yield `Message ${i}`;

    await setTimeout(2000);
  }
}
