import React from "react";

import { useHMSActions } from "@100mslive/react-sdk";

function JoinForm() {
  // to get method like join (to join a video call room)
  const hmsActions = useHMSActions();

  //   state to get value
  const [inputValues, setInputValues] = React.useState({ name: "", token: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await hmsActions.join({
      name: inputValues.name,
      token: inputValues.token,
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
