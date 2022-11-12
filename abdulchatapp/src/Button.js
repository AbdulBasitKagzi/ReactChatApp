import React from "react";

import { useHMSActions, useHMSStore, selectPeers } from "@100mslive/react-sdk";
function Button() {
  const buttonpeers = useHMSStore(selectPeers);
  console.log("buttonPeer", buttonpeers);
  const hmsActions = useHMSActions();

  // tried something but didnot work
  // const handleLeave = () => {
  //   if(buttonpeers.length!==0 || buttonpeers.length === 1){
  //     hmsActions.leave();
  //   }
    
  // };

  return (
    <div>
      <button id="leave-btn" className="btn-danger" onClick={()=>hmsActions.leave()}>Leave</button>
    </div>
  );
}

export default Button;
