import React from "react";

import {
  useHMSStore,
  useHMSActions,
  selectPeerAudioByID,
  selectLocalPeer,
  selectSpeakers,
} from "@100mslive/react-sdk";

function Audio() {
  const localPeer = useHMSStore(selectLocalPeer);
  console.log("localPerr", localPeer);

  const peerAudiolevel = useHMSStore(selectPeerAudioByID(localPeer.id));
  console.log("peerAudio", peerAudiolevel);

  const speakers = useHMSStore(selectSpeakers);
  console.log("all speakers", speakers);
  return <div>Audio Level : {peerAudiolevel}</div>;
}

export default Audio;
