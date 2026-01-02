import { useEffect, useState } from 'react';

type Props = {
  onFinish: () => void;
};

// Configuration constants
const WORDS = ["Precision", "Automation", "Efficiency", "Reliability"] as const;
const WORD_DISPLAY_TIME = 400; // ms per word
const EXIT_ANIMATION_DURATION = 800; // ms for exit animation
const SHUTTER_COUNT = 5;
const SHUTTER_STAGGER_DELAY = 100; // ms between each shutter

const Preloader = ({ onFinish }: Props) => {
  const [index, setIndex] = useState(0);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const totalAnimationTime = WORDS.length * WORD_DISPLAY_TIME;
    let intervalId: any;

    // Only set up interval if there are more words to show
    if (WORDS.length > 1) {
      intervalId = setInterval(() => {
        setIndex((currentIndex) => {
          const nextIndex = currentIndex + 1;
          
          // Stop at the last word
          if (nextIndex >= WORDS.length) {
            clearInterval(intervalId);
            return currentIndex;
          }
          
          return nextIndex;
        });
      }, WORD_DISPLAY_TIME);
    }

    // Trigger exit animation after all words are shown
    const exitTimer = setTimeout(() => {
      setExit(true);
    }, totalAnimationTime);

    // Complete the preloader sequence
    const finishTimer = setTimeout(() => {
      onFinish();
    }, totalAnimationTime + EXIT_ANIMATION_DURATION);

    // Cleanup
    return () => {
      if (intervalId) clearInterval(intervalId);
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  const currentWord = WORDS[index];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black">
      {/* Shutter panels */}
      {Array.from({ length: SHUTTER_COUNT }).map((_, i) => (
        <div
          key={i}
          className={`
            absolute left-0 w-full bg-black
            transition-transform duration-700
            ease-[cubic-bezier(0.77,0,0.18,1)]
            ${exit ? 'translate-y-full' : 'translate-y-0'}
          `}
          style={{
            height: `${100 / SHUTTER_COUNT}%`,
            top: `${(i * 100) / SHUTTER_COUNT}%`,
            transitionDelay: `${i * SHUTTER_STAGGER_DELAY}ms`,
          }}
          aria-hidden="true"
        />
      ))}

      {/* Animated text display */}
      <div
        className={`
          absolute inset-0 flex items-center justify-center
          text-[#CA4FD3] font-extrabold text-6xl
          transition-all duration-500
          ${exit ? 'opacity-0 scale-95' : 'opacity-100'}
        `}
        role="status"
        aria-live="polite"
      >
        {currentWord}
      </div>
    </div>
  );
};

export default Preloader;