'use client';

import { useState } from 'react';
import { streamData } from './actions';

export default function StreamMessages() {
  const [messages, setMessages] = useState<string[]>([]);

  return (
    <div>
      <h1>Stream messages</h1>
      <button
        type="button"
        onClick={async () => {
          setMessages([]);
          const stream = await streamData();
          for await (const message of stream) {
            setMessages((existingMessages) => [...existingMessages, message]);
          }
        }}
        className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Stream messages
      </button>
      <div>
        {messages.map((m) => {
          return <div key={m}>{m}</div>;
        })}
      </div>
    </div>
  );
}
