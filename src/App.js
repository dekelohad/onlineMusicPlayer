import React, { useState, useRef } from "react";
import Song from "./components/Song";
import MusicPlayer from "./components/MusicPlayer";
import Library from "./components/Library";
import Nav from "./components/Nav";
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
  const [libraryStatus, setLibraryStatus] = useState(false);
  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime, duration });
  };

  return (
    <div>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <MusicPlayer
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        SetCurrentSong={SetCurrentSong}
        setSongs ={setSongs}
        audioRef={audioRef}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
      />
      <Library
        songs={songs}
        audioRef={audioRef}
        isPlaying={isPlaying}
        SetCurrentSong={SetCurrentSong}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
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
