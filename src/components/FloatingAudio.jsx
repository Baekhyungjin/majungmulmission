import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Music } from 'lucide-react';
import './FloatingAudio.css';

const FloatingAudio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`floating-audio ${isPlaying ? 'playing' : ''}`}>
      <audio ref={audioRef} loop>
        <source src="/bg-music.mp3" type="audio/mpeg" />
      </audio>
      
      <div className="audio-info">
        <Music size={14} className="music-icon" />
        <span>BGM: 작은 물길</span>
      </div>
      
      <button onClick={togglePlay} className="floating-play-btn" aria-label="Play/Pause">
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </button>
    </div>
  );
};

export default FloatingAudio;
