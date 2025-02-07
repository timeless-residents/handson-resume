import { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import PropTypes from 'prop-types';

export function AudioPlayer({ src, label }) {
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

  const handleEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div className="flex items-center gap-2 mt-2">
      <button
        onClick={togglePlay}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          <Pause className="w-4 h-4" />
        ) : (
          <Play className="w-4 h-4" />
        )}
      </button>
      <span className="text-sm text-gray-600 dark:text-gray-400">{label}</span>
      <audio
        ref={audioRef}
        src={src}
        onEnded={handleEnded}
        className="hidden"
      />
    </div>
  );
}

AudioPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};
