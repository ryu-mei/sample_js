'use client';

import { useState } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);
  return (
    <html>
      <head></head>
      <body>
        <div>layout header</div>
        <div>{count}</div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
        <div>{children}</div>
      </body>
    </html>
  );
}
