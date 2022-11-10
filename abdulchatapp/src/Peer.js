import React from "react";

import { useVideo } from "@100mslive/react-sdk";

function Peer(props) {
  const { videoRef } = useVideo({
    trackId: props.peer.videoTrack,
  });
  //   todo: add video tile
  return (
    <div className="peer-container">
      <video
        ref={videoRef}
        className={`peer-video ${props.peer.isLocal ? "local" : ""}`}
        autoPlay
        muted
        playsInline
      />
      <div className="peer-name">
        {props.peer.name} {props.peer.isLocal ? "(You)" : ""}
      </div>
    </div>
  );
}

export default Peer;
