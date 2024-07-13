import React from "react";
import Welcome from "./components/Welcome";
import Starting from "./components/Starting";
function App() {
  const [clicked, setClicked] = React.useState(false);
  document.querySelector("body").addEventListener("click", () => {
    setClicked(true);
  });

  if (clicked) {
    return <Starting />;
  } else {
    return <Welcome />;
  }
}
export default App;
