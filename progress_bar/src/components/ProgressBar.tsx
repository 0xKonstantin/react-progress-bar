import React, { useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const increaseProgress = () => {
    if (progress === 100) {
      const restart = window.confirm("Progress is at 100%. Do you wish to restart?");
      if (restart) {
        window.location.reload();
      }
      return;
    }
    setProgress(prevProgress => Math.min(prevProgress + 10, 100));
  };

  return (
    <div>
      <h1>Progress Bar</h1>
      <div style={{ width: "100%", backgroundColor: "#e0e0e0", borderRadius: "4px" }}>
        <div
          style={{
            width: `${progress}%`,
            backgroundColor: "#007bff",
            height: "24px",
            borderRadius: "4px"
          }}
        ></div>
      </div>
      <p>{progress}% Complete</p>
      <button onClick={increaseProgress}>Increase Progress</button>
    </div>
  );
};

export default ProgressBar;
