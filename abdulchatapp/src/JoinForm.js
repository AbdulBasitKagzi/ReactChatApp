import React from "react";

import { useHMSActions } from "@100mslive/react-sdk";

function JoinForm() {
  // to get method like join (to join a video call room)
  const hmsActions = useHMSActions();

  //   state to get value
  const [inputValues, setInputValues] = React.useState({ name: "", token: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("I got cliked");
    console.log(inputValues.name, inputValues.token);
    await hmsActions.join({
      userName: inputValues.name,
      authToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3Nfa2V5IjoiNjM2YjkyMGFhMDRmYThiYzkxNjNjNmNjIiwicm9vbV9pZCI6IjYzNmJhMGEzZTA4ODYzYTNmMmZiMWE1MyIsInVzZXJfaWQiOiJhYmR1bGJhc2l0Iiwicm9sZSI6ImJyb2FkY2FzdGVyIiwidHlwZSI6ImFwcCIsInZlcnNpb24iOjIsImlhdCI6MTY2ODA1OTM2OSwibmJmIjoxNjY4MDU5MzY5LCJleHAiOjE2NjgxNDU3NjksImp0aSI6Ijc1ODNkMTMwLTU2YjctNGZmYy05OTBiLTg2M2FmY2NhNWU4NiJ9.syzM4BQBhkK9txNj-biY72LHV_BAlPZlZ1jfYv2fJho",
    });
  };

  const handleChange = (e) => {
    setInputValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    // console.log(inputValues.name);
    // console.log(inputValues.token);
  };

  return (
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
    </div>
  );
}

export default JoinForm;
