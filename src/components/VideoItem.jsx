const VideoItem = ({ video, title }) => {
  return (
    <div className="py-2">
      <a className="text-blue-500 hover:underline" href={video}>
        {title}
      </a>
    </div>
  );
};

export default VideoItem;
