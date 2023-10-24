import PropTypes from "prop-types";
import xrayData from "../../utils/videoData";

const XrayComponent = ({ currentTime, videoId }) => {
  const displayDuration = 10;
  // Find the Xray data for the current timestamp
  const currentXrayData = xrayData[videoId].videoMoments.find(
    (entry) => entry.timestamp <= currentTime && currentTime <= entry.timestamp + displayDuration
  );

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

XrayComponent.propTypes = {
  currentTime: PropTypes.number.isRequired,
  videoId: PropTypes.number.isRequired,
};

export default XrayComponent;
