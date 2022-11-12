import React from "react";
import Peer from "./Peer";

import { selectPeers, useHMSActions, selectIsConnectedToRoom,useHMSStore } from "@100mslive/react-sdk";
import Button from "./Button";

function Conference() {

 
  const peers = useHMSStore(selectPeers);
  console.log("Mai peer hu", peers.length);

  const isConnected = useHMSStore(selectIsConnectedToRoom);

  const hmsActions=useHMSActions()

  // React.useEffect(()=>{
  //   console.log("Mai yaha hu")
  //   if( peers.length===1){
  //     hmsActions.leave()
  //   }
  // },[ peers.length])

  return (
    <div className="conference-section">
      <h2>Conference</h2>
      <div className="peers-container">
        {peers.map((peer) => (
          <Peer key={peer.id} peer={peer} />
        ))}
      </div>
      <Button/>
    </div>
  );
}

export default Conference;
