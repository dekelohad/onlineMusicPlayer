import React, { useState } from "react";
import Song from "./components/Song";
import MusicPlayer from "./components/MusicPlayer";
import data from "./data";
import "./styles/_app.scss";

function App() {
  const [songs, setSongs] = useState(data);
  const [currentSong, SetCurrentSong] = useState(data[0]);
  const [isPlaying, setIsPlaying] = useState("false");

  return (
    <div>
      <Song currentSong={currentSong} />
      <MusicPlayer
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
    </div>
  );
}

export default App;
