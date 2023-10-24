import VideoItem from "../components/VideoItem";
import PropTypes from "prop-types";

const VideoMenu = ({ videos }) => {
  const renderedList = videos.map((video) => {
    return <VideoItem key={video.videoId} video={video} />;
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

VideoMenu.propTypes = {
  videos: PropTypes.array.isRequired,
};

export default VideoMenu;
