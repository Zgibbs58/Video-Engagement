import ReactPlayer from "react-player";
import React, { useState } from "react";
import XrayComponent from "../components/Xray";
import { useParams } from "react-router-dom";

const VideoPlayer = () => {
  const [currentTime, setCurrentTime] = useState(0);

  const handleProgress = (progress) => {
    // progress is an object automatically passed by the "react-player" library
    setCurrentTime(progress.playedSeconds);
  };

  return (
    <div>
      <ReactPlayer
        url={"https://www.youtube.com/watch?v=Tgi57GavzPQ"}
        controls
        // the onProgress prop event is triggered every time the video plays form "react-player" library
        onProgress={handleProgress}
        width="640px"
        height="360px"
        playing
        volume={0.8}
        muted={true}
        loop={false}
        playbackRate={1}
        youtubeConfig={{
          playerVars: {
            showinfo: 1,
            controls: 1,
            rel: 0,
            autoplay: 1,
            mute: 1,
            start: 0,
            end: 0,
            loop: 0,
            iv_load_policy: 3,
            fs: 0,
            disablekb: 1,
            modestbranding: 1,
            playsinline: 1,
          },
        }}
      />
      <h2>Current Time: {currentTime.toFixed(0)}</h2>
      <XrayComponent currentTime={currentTime} />
    </div>
  );
};

export default VideoPlayer;
