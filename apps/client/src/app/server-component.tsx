'use server';

import { setTimeout } from 'node:timers/promises';
import { Suspense } from 'react';

export async function ServerComponent() {
  await setTimeout(3000);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <h1>Server Component</h1>
        <p>{process.env.PATH}</p>
      </Suspense>
    </div>
  );
}
