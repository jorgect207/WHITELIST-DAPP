import React, { Fragments, useState } from "react";
import Card from "./Components/UI/Card";
import Button from "./Components/UI/Button";

function App() {
  const [isConnected, setIsConnected] = useState(false);

  let buttonString;

  if (!isConnected) {
    buttonString = "Connect";
  } else {
    buttonString = "Connected";
  }

  return (
    <Fragments>
      <Card>
        <Button>{buttonString}</Button>
      </Card>
      <Card></Card>
      <div>prueba</div>
    </Fragments>
  );
}

export default App;
