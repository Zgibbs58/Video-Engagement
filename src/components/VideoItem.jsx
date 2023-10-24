import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const VideoItem = ({ video }) => {
  return (
    <div className="py-2">
      <Link className="text-blue-500 hover:underline" to={`/video`}>
        {video.title}
      </Link>
    </div>
  );
};

VideoItem.propTypes = {
  video: PropTypes.object.isRequired,
};

export default VideoItem;
