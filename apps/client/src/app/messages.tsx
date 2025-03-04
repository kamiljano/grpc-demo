'use client';

import { useState } from "react";
import { getData } from './actions'

export default function Messages() {
  const [message, setMessage] = useState<string>();

  return <div>
    <h1>Messages</h1>
    <button type="button" onClick={() => {
      getData().then(setMessage);
    }} className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get message</button>
    <p>{message}</p>
  </div>
}