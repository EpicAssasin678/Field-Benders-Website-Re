import React, { useState, useEffect } from "react";


const useAudio = (url, playingToggle, songVolume) => {
  //playingToggle is for the use of another Element which is attached to the Component to pass a value which is watched for and changes the playing status
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  
  const toggle = () => setPlaying(!playing);
  
  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing, playingToggle]
  );

  useEffect(() => {
    audio.volume = songVolume/100;
    console.log(`Volume: ${songVolume}%`)
  }, [songVolume])

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
      
    };
  }, []);

  console.log(`Music player state: song : ${audio} playing: ${playing} `);
  return [playing, toggle];
};


const Player = ({ url, wrappedPlayer, toggleRef, songStatus, songVolume}) => {
  const [playing, toggle] = useAudio(url, toggleRef, songVolume);
  //destructure stately values into the Player's state
  
  useEffect(() => {
    toggle(playing);
  }, [songStatus])

  return (
    wrappedPlayer
  );
};

export default Player; 

/**
 * 
 * 
 export const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

  const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);


  return (
    <div>
      <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
};
 */