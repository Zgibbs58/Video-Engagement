import React from "react";
import xrayData from "../utils/xrayData";

const XrayComponent = ({ currentTime }) => {
  const displayDuration = 10;
  // Find the Xray data for the current timestamp
  const currentXrayData = xrayData.find((entry) => entry.timestamp <= currentTime && currentTime <= entry.timestamp + displayDuration);

  // Render Xray information if available
  return (
    <div>
      {currentXrayData && (
        <div>
          <h3>{currentXrayData.content}</h3>
          <a className="text-blue-500 hover:underline" href={currentXrayData.resourceReference}>
            {currentXrayData.resourceTitle}
          </a>
        </div>
      )}
    </div>
  );
};

export default XrayComponent;
