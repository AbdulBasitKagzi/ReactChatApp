import React, { useRef } from "react";

function Timer(props) {
  console.log("t", props);
  let time = 0;
  let count = 1;
  let interval;
  const [Total, setTotal] = React.useState(0);

  //   setInterval(() => {
  //     count = count++;
  //     console.log("time", count);
  //   }, 1000);
  //   React.useEffect(() => {
  //     console.log("connectedfromTimer", props.isConnected);
  //     if (props.isConnected === true) {
  //       setInterval(() => {
  //         time += count;
  //         console.log("time", time);
  //         setTotal(time);
  //       }, 1000);
  //     } else {
  //       console.log("total time", Total);
  //     }
  //   }, [time]);
  React.useEffect(() => {
    if (props.isConnected) {
      interval = setInterval(() => {
        time += 1;
        console.log("time", time);
        setTotal(time);
      }, 1000);
    } else {
      console.log("totaltime", Total);
    }
    return () => clearInterval(interval);
  }, [props.isConnected]);

  return <div>{Total}</div>;
}

export default Timer;
