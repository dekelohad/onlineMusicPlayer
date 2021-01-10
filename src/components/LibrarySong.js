import React from "react";

const LibrarySong = ({ song, SetCurrentSong,audioRef ,isPlaying}) => {
  const songSelectedHandler = () => {
    SetCurrentSong(song);

    if(isPlaying){
      const playPromise = audioRef.current.play();
      if(playPromise){
        playPromise.then(() =>{
          audioRef.current.play();
        })
      }
    }
  };
  return (
    <div onClick={songSelectedHandler} className="library-song">
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
