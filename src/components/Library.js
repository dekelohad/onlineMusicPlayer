import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs, SetCurrentSong ,audioRef ,isPlaying}) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            SetCurrentSong={SetCurrentSong}
            key={song.id}
            song={song}
            audioRef ={audioRef}
            isPlaying ={isPlaying}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
