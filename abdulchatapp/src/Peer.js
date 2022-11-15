import React from "react";

import {
  useVideo,
  useHMSStore,
  useHMSActions,
  useHMSNotifications,
  selectIsLocalVideoPluginPresent,
  selectIsConnectedToRoom,
  selectPeers,
  HMSNotificationTypes,
} from "@100mslive/react-sdk";
import { HMSVirtualBackgroundPlugin } from "@100mslive/hms-virtual-background";
import Audio from "./Audio";

function Peer(props) {
  const hmsActions = useHMSActions();
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  console.log("connected", isConnected);

  const peer = useHMSStore(selectPeers);
  console.log("Peeer", peer.length);
  console.log("pperrr", props.peer.id);

  const notification = useHMSNotifications([
    HMSNotificationTypes.PEER_JOINED,
    HMSNotificationTypes.PEER_LEFT,
  ]);
  const peernotification = useHMSNotifications([
    HMSNotificationTypes.PEER_JOINED,
    HMSNotificationTypes.PEER_LEFT,
  ]);
  // notification
  React.useEffect(() => {
    if (!notification) {
      console.log("I am notification 0");
      return;
    }
    console.log("I am notification 1");
    console.log("notification type", notification.type);
    console.log("data", notification.data);
  }, [notification]);

  // peer notification
  // React.useEffect(() => {
  //   console.log("peernotification is here 0");
  //   if (!peernotification) {
  //     console.log("mai yaha hu yaha  hu yaha....");
  //     return;
  //   } else {
  //     console.log("peernotification is here 1");
  //     console.log("peernotification type", peernotification.type);
  //     console.log("peernotification data", peernotification.data);
  //   }
  // }, [peernotification]);

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
      {notification && <div>Notification: {notification?.type}</div>}
      {/* <video
        ref={videoRef}
        className={`peer-video ${props.peer.isLocal ? "local" : ""}`}
        autoPlay
        muted
        playsInline
      /> */}
      <img src={props.peer.imageUrl} alt="peerImage" />
      <div className="peer-name">
        {props.peer.name} {props.peer.isLocal ? "(You)" : ""}
      </div>
      {/* <button onClick={toggleVB}>Toggle</button> */}
      <Audio />
    </div>
  );
}

export default Peer;
