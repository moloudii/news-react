import React from "react";
import { createRoot } from "react-dom/client";

function SecondWindow() {
  return (
    <div style={{ padding: 32, background: "#f0f0f0", borderRadius: 8 }}>
      <h2>پنجره دوم</h2>
      <p>این یک نمونه از یک پنجره دوم در renderer است.</p>
    </div>
  );
}

const root = createRoot(document.body);
root.render(<SecondWindow />);
