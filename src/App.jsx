import React from "react";
import ReactDOM from "react-dom";
import Score from "./components/Score";
import Spheres from "./components/Spheres";
function App() {
  const [score,setScore] = React.useState(0);
  function updatescore(score){
    setScore(score);
  }
  return (
    <div>
      <Score score={score} />
      <Spheres updatescore={updatescore}/>
    </div>
  );
}
export default App;
