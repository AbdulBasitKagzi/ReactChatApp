import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// hmsroomprovider let us use hooks and action provided by 100ms sdk
import { HMSRoomProvider } from "@100mslive/react-sdk";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HMSRoomProvider>
      <App />
    </HMSRoomProvider>
  </React.StrictMode>
);
