import React from "react";
import NextLink from "next/link";

import { useEffect, useState } from "react";
export default function App() {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.name));
  }, []);

  return (
    <div>
      <p>Name from API: <strong>{message}</strong></p>
      <NextLink href="/">Home</NextLink>
    </div>
  );
}
