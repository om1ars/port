import React from "react";

export default function Study() {
    const [ref, reflection] = useMirror({ className: 'mirror-frame' });

  return (
    <div>
      <div ref={ref} />
      {reflection}
    </div>
  );
}
