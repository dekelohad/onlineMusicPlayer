import React, { useState, useRef } from "react";
import Song from "./components/Song";
import MusicPlayer from "./components/MusicPlayer";
import Library from "./components/Library";
import data from "./data";
import "./styles/_app.scss";

function App() {
  const audioRef = useRef("null");
  const [songs, setSongs] = useState(data);
  const [currentSong, SetCurrentSong] = useState(data[0]);
  const [isPlaying, setIsPlaying] = useState("false");
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime, duration });
  };

  return (
    <div>
      <Song currentSong={currentSong} />
      <MusicPlayer
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        audioRef={audioRef}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
      />
      <Library
        songs={songs}
        audioRef={audioRef}
        isPlaying={isPlaying}
        SetCurrentSong={SetCurrentSong}
        setSongs={setSongs}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      />
    </div>
  );
}

export default App;
