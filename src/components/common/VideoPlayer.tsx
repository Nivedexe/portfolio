import React, { useState, useRef } from 'react';
import { Play, AlertCircle, Film } from 'lucide-react';
import { DoodleArrow } from '../doodles/DoodleArrow';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title: string;
  description?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  poster,
  title,
  description,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setHasError(true));
    }
  };

  return (
    <div className="w-full">
      <div className="relative rounded-lg overflow-hidden sketch-border sketch-shadow-lg bg-[#171717]">
        {!hasError ? (
          <div className="relative aspect-video w-full bg-black">
            <video
              ref={videoRef}
              src={src}
              poster={poster}
              preload="metadata"
              controls
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onError={() => setHasError(true)}
              className="w-full h-full object-contain"
            >
              Your browser does not support HTML5 video playback.
            </video>

            {/* Custom Play overlay if paused */}
            {!isPlaying && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors cursor-pointer group"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#F8F6F0] text-[#171717] flex items-center justify-center sketch-border shadow-lg group-hover:scale-105 group-hover:bg-[#FEF08A] transition-all">
                  <Play className="w-8 h-8 md:w-10 md:h-10 ml-1 text-[#171717] fill-current" />
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Graceful placeholder when local MP4 video hasn't been copied to public/videos/ yet */
          <div className="aspect-video w-full flex flex-col items-center justify-center p-8 bg-[#222222] text-[#F8F6F0] text-center">
            <div className="w-14 h-14 rounded-full border-2 border-dashed border-[#5F5F5F] flex items-center justify-center mb-4 text-[#D9532F]">
              <Film className="w-7 h-7" />
            </div>
            <h4 className="font-bold text-lg text-white mb-2">{title}</h4>
            <p className="text-sm text-[#CCCCCC] max-w-md mb-4">
              {description || 'Interactive product workflow walkthrough.'}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#333333] border border-[#555555] text-xs font-mono text-[#FDE047]">
              <AlertCircle className="w-4 h-4 text-[#D9532F]" />
              Video demo ready to load: {src}
            </div>
            <p className="font-handwritten text-sm text-[#AAAAAA] mt-3">
              Drop your demo MP4 file into public/videos/shippro-demo.mp4
            </p>
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 px-1">
        <div>
          <h4 className="font-bold text-base text-[#171717]">{title}</h4>
          {description && <p className="text-xs text-[#5F5F5F]">{description}</p>}
        </div>
        <div className="flex items-center gap-2">
          <span className="font-handwritten text-sm text-[#D9532F]">
            screen recording demo
          </span>
          <DoodleArrow type="straight-right" color="#D9532F" className="w-6 h-3" />
        </div>
      </div>
    </div>
  );
};
