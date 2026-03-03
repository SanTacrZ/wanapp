import { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface Props {
  text: string;
  label?: string;
}

export default function AudioPlayer({ text, label }: Props) {
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if ('speechSynthesis' in window) {
      setPlaying(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'es-CO';
      utterance.onend = () => setPlaying(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <button
      onClick={handlePlay}
      disabled={playing}
      title={label ?? `Escuchar: ${text}`}
      className="p-1.5 rounded-lg bg-selva-700 hover:bg-selva-600 text-selva-300 hover:text-sol-300 transition-colors disabled:opacity-50"
    >
      {playing ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
    </button>
  );
}
