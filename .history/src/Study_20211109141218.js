import React from "react";
import { useMirror } from "react-mirror";

export default function Study() {
  const [ref, reflection] = useMirror({ className: "mirror-frame" });

  return (
    <div>
      <div ref={ref} />
      {reflection}
    </div>
  );
}
