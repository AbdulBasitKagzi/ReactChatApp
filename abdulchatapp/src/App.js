import React from "react";
import "./App.css";
import JoinForm from "./JoinForm";

import { useHMSActions } from "@100mslive/react-sdk";
import Conference from "./Conference";

function App() {
  const hmsActions = useHMSActions();

  React.useEffect(() => {
    window.onunload = () => {
      hmsActions.leave();
    };
  }, [hmsActions]);

  return (
    <div className="App">
      <h1>Abdul Chat App</h1>
      <Conference />
      <JoinForm />
    </div>
  );
}

export default App;
