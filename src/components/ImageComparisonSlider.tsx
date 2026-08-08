import React, { useState, useRef, useCallback, useEffect } from 'react';
import { MoveHorizontal, Maximize2, X } from 'lucide-react';

interface ImageComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  alt?: string;
  className?: string;
  title?: string;
  enableModal?: boolean;
}

export const ImageComparisonSlider: React.FC<ImageComparisonSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'BEFORE',
  afterLabel = 'AFTER',
  alt = 'Before and after comparison',
  className = '',
  title,
  enableModal = true,
}) => {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const onMouseUp = () => setIsDragging(false);
    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    };

    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [isDragging, handleMove]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  return (
    <>
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        className={`relative aspect-video rounded-sm bg-slate-950 overflow-hidden border border-slate-200 dark:border-slate-800 select-none cursor-ew-resize group shadow-sm ${className}`}
      >
        {/* After Image (Background Layer - Right Side) */}
        <img
          src={afterImage}
          alt={`${alt} After`}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="225" viewBox="0 0 400 225"><rect width="100%" height="100%" fill="%230f172a"/><path d="M50 180 L200 40 L350 180 Z" stroke="%2322d3ee" stroke-width="2" fill="none"/><line x1="50" y1="180" x2="350" y2="180" stroke="%230284c7" stroke-width="2"/><text x="200" y="120" text-anchor="middle" fill="%2338bdf8" font-family="monospace" font-size="14">3D BIM MODEL VIEW</text></svg>';
          }}
        />

        {/* Before Image (Foreground Layer - Left Side with Clip Path) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-10"
          style={{
            clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
            WebkitClipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
          }}
        >
          <img
            src={beforeImage}
            alt={`${alt} Before`}
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="225" viewBox="0 0 400 225"><rect width="100%" height="100%" fill="%23020617"/><circle cx="200" cy="112" r="60" stroke="%230d9488" stroke-dasharray="4 4" stroke-width="2" fill="none"/><text x="200" y="116" text-anchor="middle" fill="%232dd4bf" font-family="monospace" font-size="14">POINT CLOUD DATA</text></svg>';
            }}
          />
        </div>

        {/* Before Badge (Left) */}
        <div className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded bg-slate-950/85 backdrop-blur-sm text-[10px] font-mono font-bold text-teal-400 border border-teal-500/30 shadow-md pointer-events-none">
          {beforeLabel}
        </div>

        {/* After Badge (Right) */}
        <div className="absolute top-2 right-2 z-10 px-2 py-0.5 rounded bg-teal-600/90 backdrop-blur-sm text-[10px] font-mono font-bold text-white shadow-md pointer-events-none">
          {afterLabel}
        </div>

        {/* Expand Modal Icon Button (Bottom-Left Corner) */}
        {enableModal && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(true);
            }}
            title="Expand comparison in pop-up"
            className="absolute bottom-2 left-2 z-30 p-1.5 rounded-md bg-slate-900/90 hover:bg-teal-600 text-slate-300 hover:text-white border border-slate-700/60 transition-all duration-150 shadow-md flex items-center justify-center"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        )}

        {/* Vertical Slider Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-teal-400 z-20 shadow-[0_0_8px_#22d3ee] pointer-events-none transform -translate-x-1/2"
          style={{ left: `${sliderPos}%` }}
        >
          {/* Center Draggable Circular Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-slate-900 border-2 border-teal-400 text-teal-300 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
            <MoveHorizontal className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Floating Bottom Hint on Hover */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none bg-slate-950/80 backdrop-blur-sm px-2 py-0.5 rounded text-[9px] font-mono text-slate-300 border border-slate-700">
          Drag slider or click Enlarge
        </div>
      </div>

      {/* Pop-up Modal View */}
      {enableModal && isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-10"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl bg-slate-900 border border-slate-700 rounded-lg p-4 md:p-6 shadow-2xl flex flex-col space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center space-y-0.5 space-x-3">
                <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest px-2 py-1 bg-teal-500/10 rounded border border-teal-500/20">
                  Interactive BIM Comparison
                </span>
                <h3 className="text-sm md:text-base font-bold text-white font-mono">
                  {title || `${beforeLabel} ↔ ${afterLabel}`}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                title="Close pop-up"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Enlarged Slider */}
            <div className="w-full">
              <ImageComparisonSlider
                beforeImage={beforeImage}
                afterImage={afterImage}
                beforeLabel={beforeLabel}
                afterLabel={afterLabel}
                alt={alt}
                enableModal={false}
                className="aspect-[16/9] w-full max-h-[75vh]"
              />
            </div>

            {/* Modal Footer hint */}
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-1">
              <span>Drag slider left/right to compare details</span>
              <span className="text-[11px] text-slate-500">Press ESC or click outside to close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
