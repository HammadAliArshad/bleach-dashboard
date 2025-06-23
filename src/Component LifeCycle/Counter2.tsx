import React, { useEffect } from "react";

export default function Counter2({ number }) {
  useEffect(() => {
    console.log("Mounting in function");
  });

  useEffect(() => {
    console.log("Updating in Function...");

    return () => {
      console.log("Unmount...");
    };
  }, [number]);

  return (
    <div>
      <h1>{number}</h1>
    </div>
  );
}
