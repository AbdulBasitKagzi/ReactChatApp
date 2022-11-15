import React from "react";
import "./App.css";
import JoinForm from "./JoinForm";

import {
  useHMSActions,
  selectIsConnectedToRoom,
  useHMSStore,
  selectPeers,
  HMSRoomProvider,
  selectLocalPeer,
} from "@100mslive/react-sdk";
import Conference from "./Conference";
import Footer from "./Footer";
import DeviceSettings from "./DeviceSettings";
import Timer from "./Timer";

function App() {
  const hmsActions = useHMSActions();
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  console.log("isConnected", isConnected);
  const peers = useHMSStore(selectPeers);
  console.log("Prs", peers);

  React.useEffect(() => {
    window.onunload = () => {
      if (isConnected) hmsActions.leave();
    };
  }, [hmsActions, isConnected]);

  return (
    <div className="App">
      <h1>Abdul Chat App</h1>

      <HMSRoomProvider isHMSStatsOn={true}>
        {isConnected ? (
          <>
            <Timer isConnected={isConnected} />
            <Conference />
            <Footer />
            <DeviceSettings />
          </>
        ) : (
          <JoinForm />
        )}
      </HMSRoomProvider>
    </div>
  );
}

export default App;
