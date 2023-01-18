import React, { useState } from "react";
import Card from "./Components/UI/Card";
import Button from "./Components/UI/Button";

function App() {
  const [isConnected, setIsConnected] = useState(false);

  let buttonString;

  function buttonHandle() {
    setIsConnected((x) => !x);
  }

  if (!isConnected) {
    buttonString = "Connect";
  } else {
    buttonString = "Connected";
  }

  return (
    <React.Fragment>
      <Card>
        <Button onClick={buttonHandle}>{buttonString}</Button>
      </Card>
      <Card>
        <Button onClick={buttonHandle}>Get whitelist</Button>
      </Card>
    </React.Fragment>
  );
}

export default App;
