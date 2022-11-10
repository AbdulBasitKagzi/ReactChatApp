import React from "react";

import {
  useVideo,
  useHMSStore,
  useHMSActions,
  selectIsLocalVideoPluginPresent,
} from "@100mslive/react-sdk";
import { HMSVirtualBackgroundPlugin } from "@100mslive/hms-virtual-background";
import Audio from "./Audio";

function Peer(props) {
  console.log("pperrr", props.peer.id);
  const { videoRef } = useVideo({
    trackId: props.peer.videoTrack,
  });
  console.log("videotrack", props.peer.videoTrack);

  // working on virtual background
  // background : {'blur' | image | 'none'}

  let background;
  let image = "some text";
  // background : {'blur' | image | 'none'}
  const virtualBackground = new HMSVirtualBackgroundPlugin(
    (background = "blur" | image | "none")
  );

  const isVirtualBackgroundEnabled = useHMSStore(
    selectIsLocalVideoPluginPresent(virtualBackground.getName())
  );
  // console.log("i am", virtualBackground);
  // console.log("i am virtual", virtualBackground.getName());
  const hmsActions = useHMSActions();

  const toggleVB = async () => {
    try {
      if (!isVirtualBackgroundEnabled) {
        const pluginFramRate = 15;
        await hmsActions.addPluginToVideoTrack(
          virtualBackground,
          pluginFramRate
        );
      } else {
        await hmsActions.removePluginFromVideoTrack(virtualBackground);
      }
    } catch (error) {
      console.log(
        "virtual background failure - ",
        isVirtualBackgroundEnabled,
        error
      );
    }
  };

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
      <button onClick={toggleVB}>Toggle</button>
      <Audio />
    </div>
  );
}

export default Peer;
