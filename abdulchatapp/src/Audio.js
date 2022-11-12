import React from "react";

import {
  useHMSStore,
  useHMSActions,
  selectPeerAudioByID,
  selectLocalPeer,
  selectSpeakers,
  selectTrackAudioByID,
 
  selectAudioTrackVolume,
  selectPeerByID,
} from "@100mslive/react-sdk";

function Audio() {
  const localPeer = useHMSStore(selectLocalPeer);
  console.log("localPerr", localPeer);

  const peerAudiolevel = useHMSStore(selectPeerAudioByID(localPeer.id));
  console.log("peerAudio", peerAudiolevel);

  const speakers = useHMSStore(selectSpeakers);
  console.log("all speakers", speakers);

  const trackAudio=useHMSStore(selectTrackAudioByID(localPeer.id))
  console.log("trackAudio", trackAudio)

//   const track = useHMSStore(selectAudioTrackByPeerID(localPeer.id));

//   console.log("trackID", track?.peerId);
//   console.log("track", track);

//   const track2 = useHMSStore(selectAudioTrackByPeerID(track?.peerId));

//   console.log("track2", track2);

//   const currVolume = useHMSStore(selectAudioTrackVolume(track2?.id));
//   console.log("currentVolume", currVolume);

//   const hmsActions = useHMSActions();

//   const setVolume = (volume) => {
//     if (track) hmsActions.setVolume(volume, track);
//   };

  return <div>Audio Level : {peerAudiolevel}</div>;
}

export default Audio;
