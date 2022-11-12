import React, { useEffect } from "react";

import {
  useHMSActions,
  useHMSStore,
  selectPeers,
  useHMSNotifications,
  HMSNotificationTypes,
} from "@100mslive/react-sdk";
function Button() {
  const buttonpeers = useHMSStore(selectPeers);
  const hmsActions = useHMSActions();
  const notification = useHMSNotifications();

  useEffect(() => {
    if (!notification) {
      return;
    } else if (
      notification?.type === HMSNotificationTypes.PEER_LEFT &&
      buttonpeers.length === 1
    ) {
      console.log("Everyone left");
      hmsActions.leave();
    }
  }, [notification]);

  // tried something but didnot work
  const handleLeave = () => {
    hmsActions.leave();

    console.log("poppeers", buttonpeers);
  };

  return (
    <div>
      <button id="leave-btn" className="btn-danger" onClick={handleLeave}>
        Leave
      </button>
    </div>
  );
}

export default Button;
