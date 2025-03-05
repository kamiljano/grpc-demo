'use server';

import { echo } from '@/app/message-service';
import { EchoRequest } from '@/grpc/service';

export const getData = async (): Promise<string> => {
  const result = await echo(
    new EchoRequest({
      message: 'Hello from the server actions',
    }),
  );

  return result?.message || 'No message returned';
};
