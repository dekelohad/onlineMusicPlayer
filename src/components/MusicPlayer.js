import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";

function MusicPlayer({
  currentSong,
  SetCurrentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  songs,
}) {
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const skipTrackHandler = (direction) => {
    let currentSongIndex = songs.findIndex(
      (song) => song.id === currentSong.id
    );

    if (direction === "skip-forward") {
      //we set the currentSong and we assure that we are not outside of the array boundaries.
      SetCurrentSong(songs[(currentSongIndex + 1) % songs.length]);
    } else {
      //if we are not in the array boundaries we set the currentSong to the last song in the songsArray and we return.
      if ((currentSongIndex - 1) % songs.length === -1) {
        SetCurrentSong(songs[songs.length - 1]);
        return;
      }
      SetCurrentSong(songs[(currentSongIndex + -1) % songs.length]);
    }
  };

  return (
    <div className="music-player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          onChange={dragHandler}
          type="range"
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back"
          onClick={() => skipTrackHandler("skip-back")}
          size="2x"
          icon={faAngleDoubleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="skip-forward"
          onClick={() => skipTrackHandler("skip-forward")}
          size="2x"
          icon={faAngleDoubleRight}
        />
      </div>
    </div>
  );
}

export default MusicPlayer;
