import React from "react";

import {
  useVideo,
  useHMSStore,
  useHMSActions,
  selectIsLocalVideoPluginPresent,selectIsConnectedToRoom,selectPeers
} from "@100mslive/react-sdk";
import { HMSVirtualBackgroundPlugin } from "@100mslive/hms-virtual-background";
import Audio from "./Audio";

function Peer(props) {

  const hmsActions = useHMSActions();
  const isConnected=useHMSStore(selectIsConnectedToRoom)
  console.log("connected", isConnected)

  const peer=useHMSStore(selectPeers)
  console.log("Peeer",peer.length)
  console.log("pperrr", props.peer.id);

  // React.useEffect(()=>{
  //   if(!isConnected && peer.length===1){
  //     hmsActions.leave()
  //   }
  // },[hmsActions.leave])

  const { videoRef } = useVideo({
    trackId: props.peer.videoTrack,
  });
  console.log("videotrack", props.peer.videoTrack);

  // working on virtual background
  // background : {'blur' | image | 'none'}

  // let background;
  // let image = "some text";

  // const virtualBackground = new HMSVirtualBackgroundPlugin(
  //   (background = "blur" | image | "none")
  // );

  // const isVirtualBackgroundEnabled = useHMSStore(
  //   selectIsLocalVideoPluginPresent(virtualBackground.getName())
  // );
  // console.log("i am", virtualBackground);
  // console.log("i am virtual", virtualBackground.getName());
 

  // const toggleVB = async () => {
  //   try {
  //     if (!isVirtualBackgroundEnabled) {
  //       const pluginFramRate = 15;
  //       await hmsActions.addPluginToVideoTrack(
  //         virtualBackground,
  //         pluginFramRate
  //       );
  //     } else {
  //       await hmsActions.removePluginFromVideoTrack(virtualBackground);
  //     }
  //   } catch (error) {
  //     console.log(
  //       "virtual background failure - ",
  //       isVirtualBackgroundEnabled,
  //       error
  //     );
  //   }
  // };

  return (
    <div className="peer-container">
      {/* <video
        ref={videoRef}
        className={`peer-video ${props.peer.isLocal ? "local" : ""}`}
        autoPlay
        muted
        playsInline
      /> */}
      <div className="peer-name">
        {props.peer.name} {props.peer.isLocal ? "(You)" : ""}
      </div>
      {/* <button onClick={toggleVB}>Toggle</button> */}
      <Audio />
    </div>
  );
}

export default Peer;
