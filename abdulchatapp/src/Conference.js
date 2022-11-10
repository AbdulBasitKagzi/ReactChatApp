import React from "react";
import Peer from "./Peer";

import { selectPeers, useHMSStore } from "@100mslive/react-sdk";

function Conference() {
  const peers = useHMSStore(selectPeers);
  console.log("Mai peer hu", peers);
  return (
    <div className="conference-section">
      <h2>Conference</h2>
      <div className="peers-container">
        {peers.map((peer) => (
          <Peer key={peer.id} peer={peer} />
        ))}
      </div>
    </div>
  );
}

export default Conference;
