import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";

function MusicPlayer({ currentSong, isPlaying, setIsPlaying }) {
  const audioRef = useRef("null");

  const playSongHandler = () => {
    console.log(audioRef.current);
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="music-player">
      <div className="time-control">
        <p>Start time</p>
        <input type="range" />
        <p>End time </p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back"
          size="2x"
          icon={faAngleDoubleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={faPlay}
        />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleDoubleRight}
        />
        <audio ref={audioRef} src={currentSong.audio} />
      </div>
    </div>
  );
}

export default MusicPlayer;
