import React from "react";

import { useAVToggle } from "@100mslive/react-sdk";
function Footer() {
  const { isLocalAudioEnabled, isLocalVideoEnabled, toggleAudio, toggleVideo } =
    useAVToggle();
  return (
    <div>
      Footer
      <button onClick={toggleAudio}>
        {isLocalAudioEnabled ? "mute" : "unmute"}
      </button>
      <button onClick={toggleVideo}>
        {isLocalVideoEnabled ? "hide" : "unhide"}
      </button>
    </div>
  );
}

export default Footer;
