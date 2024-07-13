import React, { useState, useEffect } from "react";
import Score from "./Score";
import Spheres from "./Spheres";

function Starting() {
  const [score, setScore] = useState(0);
  const [sec, setSec] = useState(3);

  function updatescore(score) {
    setScore(score);
  }

  function handleChange() {
    if (sec > 0) {
      setSec((prevSec) => prevSec - 1);
    }
  }

  useEffect(() => {
    const myInterval = setInterval(handleChange, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, []);

  if (sec <= 0) {
    return (
      <div>
        <Score score={score} />
        <Spheres updatescore={updatescore} />
      </div>
    );
  } else {
    return (
      <div className="Starting">
        <h1>Starting in {sec}</h1>
      </div>
    );
  }
}

export default Starting;
