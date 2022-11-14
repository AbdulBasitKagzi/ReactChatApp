import React from "react";

// MUI IMPORTS

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import { useHMSActions } from "@100mslive/react-sdk";

import { io } from "socket.io-client";

function JoinForm() {
  const [userId, setUserId] = React.useState("");
  const user = [
    {
      id: "1",
      userName: "alex",
      authToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3Nfa2V5IjoiNjM2YjkyMGFhMDRmYThiYzkxNjNjNmNjIiwicm9vbV9pZCI6IjYzNzFmNTMxMGNkN2I2ZTY4YWRjMDI5MSIsInVzZXJfaWQiOiJhYmR1bGJhc2l0Iiwicm9sZSI6ImJyb2FkY2FzdGVyIiwidHlwZSI6ImFwcCIsInZlcnNpb24iOjIsImlhdCI6MTY2ODQxMzQ1MiwibmJmIjoxNjY4NDEzNDUyLCJleHAiOjE2Njg0OTk4NTIsImp0aSI6IjBjYTg0Zjc2LTcxMjMtNGY0OS1hNmEyLWQ5OGM2ZjFkYjFiNyJ9.qyFnbJ9tjMOvuCfrAuR71-h-DDYWJSmRuups5CPd-zQ",
    },
    {
      id: "2",
      userName: "clay",
      authToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3Nfa2V5IjoiNjM2YjkyMGFhMDRmYThiYzkxNjNjNmNjIiwicm9vbV9pZCI6IjYzNzFmNTMxMGNkN2I2ZTY4YWRjMDI5MSIsInVzZXJfaWQiOiJhYmR1bGJhc2l0Iiwicm9sZSI6ImJyb2FkY2FzdGVyIiwidHlwZSI6ImFwcCIsInZlcnNpb24iOjIsImlhdCI6MTY2ODQxMzQ1MiwibmJmIjoxNjY4NDEzNDUyLCJleHAiOjE2Njg0OTk4NTIsImp0aSI6IjBjYTg0Zjc2LTcxMjMtNGY0OS1hNmEyLWQ5OGM2ZjFkYjFiNyJ9.qyFnbJ9tjMOvuCfrAuR71-h-DDYWJSmRuups5CPd-zQ",
    },
    {
      id: "3",
      userName: "tony",
      authToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3Nfa2V5IjoiNjM2YjkyMGFhMDRmYThiYzkxNjNjNmNjIiwicm9vbV9pZCI6IjYzNzFmNTMxMGNkN2I2ZTY4YWRjMDI5MSIsInVzZXJfaWQiOiJhYmR1bGJhc2l0Iiwicm9sZSI6ImJyb2FkY2FzdGVyIiwidHlwZSI6ImFwcCIsInZlcnNpb24iOjIsImlhdCI6MTY2ODQxMzQ1MiwibmJmIjoxNjY4NDEzNDUyLCJleHAiOjE2Njg0OTk4NTIsImp0aSI6IjBjYTg0Zjc2LTcxMjMtNGY0OS1hNmEyLWQ5OGM2ZjFkYjFiNyJ9.qyFnbJ9tjMOvuCfrAuR71-h-DDYWJSmRuups5CPd-zQ",
    },
    {
      id: "4",
      userName: "bruce",
      authToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3Nfa2V5IjoiNjM2YjkyMGFhMDRmYThiYzkxNjNjNmNjIiwicm9vbV9pZCI6IjYzNzFmNTMxMGNkN2I2ZTY4YWRjMDI5MSIsInVzZXJfaWQiOiJhYmR1bGJhc2l0Iiwicm9sZSI6ImJyb2FkY2FzdGVyIiwidHlwZSI6ImFwcCIsInZlcnNpb24iOjIsImlhdCI6MTY2ODQxMzQ1MiwibmJmIjoxNjY4NDEzNDUyLCJleHAiOjE2Njg0OTk4NTIsImp0aSI6IjBjYTg0Zjc2LTcxMjMtNGY0OS1hNmEyLWQ5OGM2ZjFkYjFiNyJ9.qyFnbJ9tjMOvuCfrAuR71-h-DDYWJSmRuups5CPd-zQ",
    },
  ];

  const socket = io("http://localhost:4000", { secure: true });

  // useEffect to get user id from socket io
  React.useEffect(() => {
    // socket.on("hello from server");
    // socket.emit("hello from client");

    socket.on("calling", (data) => {
      setUserId(data);
      console.log("data received", data);
    });
  }, [userId]);

  // to get method like join (to join a video call room)
  const hmsActions = useHMSActions();

  //   state to get value
  const [inputValues, setInputValues] = React.useState({
    name: "",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3Nfa2V5IjoiNjM2YjkyMGFhMDRmYThiYzkxNjNjNmNjIiwicm9vbV9pZCI6IjYzNzFmNTMxMGNkN2I2ZTY4YWRjMDI5MSIsInVzZXJfaWQiOiJhYmR1bGJhc2l0Iiwicm9sZSI6ImJyb2FkY2FzdGVyIiwidHlwZSI6ImFwcCIsInZlcnNpb24iOjIsImlhdCI6MTY2ODQxMzQ1MiwibmJmIjoxNjY4NDEzNDUyLCJleHAiOjE2Njg0OTk4NTIsImp0aSI6IjBjYTg0Zjc2LTcxMjMtNGY0OS1hNmEyLWQ5OGM2ZjFkYjFiNyJ9.qyFnbJ9tjMOvuCfrAuR71-h-DDYWJSmRuups5CPd-zQ",

    // management token to create room
    managementToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3Nfa2V5IjoiNjM2YjkyMGFhMDRmYThiYzkxNjNjNmNjIiwidHlwZSI6Im1hbmFnZW1lbnQiLCJ2ZXJzaW9uIjoyLCJpYXQiOjE2Njg0MTI2NjgsIm5iZiI6MTY2ODQxMjY2OCwiZXhwIjoxNjY4NDk5MDY4LCJqdGkiOiI2ZDIxZTA0ZS00ZjU0LTRkNzAtYjQ1ZS1lMWQwZmY1NGM3NDkifQ.Q2y8plQA_v5guDGzNomM9uuq0rtzAJ8anmrn-Rh91a0",
  });

  // for joining the call
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("I got cliked");
    console.log(inputValues.name, inputValues.token);
    await hmsActions.join({
      userName: inputValues.name,
      authToken: inputValues.token,
    });
  };

  // to handle values
  const handleChange = (e) => {
    setInputValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  let roomId = "";
  const createRoom = async () => {
    const response = await fetch("https://api.100ms.live/v2/rooms", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${inputValues.managementToken}`,
        "Content-type": "application/json; charset=UTF-8",
      },

      body: JSON.stringify({
        name: "abdulapp",
        description: "This is a sample description for the room",
        template_id: "636ba0a3e61bbea99a48ec72",
        region: "in",
        // recording_info: {
        //   enabled: true,
        //   upload_info: {
        //     type: "s3",
        // location: "<Name of the AWS s3 bucket>",
        // prefix: "<Upload prefix path>",
        // options: {
        //   region: "<region of the s3 bucket>",
        // },
        // credentials: {
        //   key: "636b920aa04fa8bc9163c6cc",
        //   secret:
        //     "VYcnlGNn5cKP5lbHrpi-9ViTgBxz2O6W3-D7IfwDUcGZTK8Un0JD8_QKQ30c5RVood7uFOMpdrzo8ck7tbo7IKiEOm4oG0wqQ7Dxhf453NMTraHW1fiUQ42v68hM7Uo4kSp08Sn9XDL_gJIyThEEF462HgVfE_sYVE8dH0DAKW8=",
        // },
      }),
    });
    console.log("res", response);
    const data = await response.json();

    roomId = JSON.stringify(data.id);

    // to send roomId to backend for testing purpose
    socket.emit("roomId", roomId);
  };

  // to get details of the active room
  const getActiveRoom = async () => {
    const response = await fetch(
      `https://api.100ms.live/v2/active-rooms/6371f5310cd7b6e68adc0291`,
      {
        headers: {
          Authorization: `Bearer ${inputValues.token}`,
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const data = await response.json();
    console.log("activeRoom", data);
  };

  return (
    <>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={user.map((user) => {
          return user.userName;
        })}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Users" />}
      />
      <button
        onClick={async () => {
          setInputValues((prev) => ({
            ...prev,
            name: "abdul",
          }));
          await hmsActions.join({
            userName: inputValues.name,
            authToken: inputValues.token,
          });
          socket.emit("connectCall", "1");
        }}
      >
        Make a Call
      </button>
      {userId && (
        <button
          onClick={async () => {
            setInputValues((prev) => ({
              ...prev,
              name: "clay",
            }));
            await hmsActions.join({
              userName: inputValues.name,
              authToken: inputValues.token,
            });
          }}
        >
          AcceptCall
        </button>
      )}
      {userId && <button onClick={() => setUserId("")}>RejectCall</button>}
      <div>
        <form onSubmit={handleSubmit}>
          <label>ParticipantName</label>
          <input
            type="text"
            onChange={handleChange}
            id="name"
            name="name"
            value={inputValues.name}
          />
          <label>AuthToken</label>
          <input
            type="text"
            onChange={handleChange}
            id="token"
            name="token"
            value={inputValues.token}
          />
          <button className="btn-primary">Join</button>
        </form>

        <button onClick={createRoom}>Create a Room</button>
        <button onClick={getActiveRoom}>Get Rooms</button>
      </div>
    </>
  );
}

export default JoinForm;
