import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [msg, setMessage] = useState("");

  //Handlers
  const handleButtonClick = (e) => {
    const nameLen = name.length;
    if (nameLen > 0) {
      setMessage(`You name has ${nameLen} characters including space`);
    }
  };

  const handleTextChange = (e) => {
    setName(e.target.value);
  };

  const handleReset = () => {
    setName("");
    setMessage("");
  };

  return (
    <div>
      <label>Your name </label>
      <input
        type="text"
        id="txtName"
        name="txtName"
        value={name}
        onChange={(e) => handleTextChange(e)}
      />
      <button id="btnSubmit" onClick={(e) => handleButtonClick(e)}>
        Calculate Name Length
      </button>
      <button id="btnReset" onClick={() => handleReset()}>
        Reset All
      </button>
      <hr />
      {msg}
    </div>
  );
};
export default App;
