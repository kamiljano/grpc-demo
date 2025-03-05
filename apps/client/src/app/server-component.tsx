'use server';
import { Suspense } from 'react';
import { echo } from '@/app/message-service';
import { EchoRequest } from '@/grpc/service';

export async function ServerComponent() {
  const result = await echo(
    new EchoRequest({ message: 'Hello from the server' }),
  );

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <h1>Server Component</h1>
        <p>{result?.message}</p>
      </Suspense>
    </div>
  );
}
