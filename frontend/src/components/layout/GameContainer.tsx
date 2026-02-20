import React from 'react';
import { useGameScale } from '../../hooks/useGameScale';

interface GameContainerProps {
    children: React.ReactNode;
}

export default function GameContainer({ children }: GameContainerProps) {
    // Reference resolution for the game canvas (Smaller resolution = Larger UI)
    const REF_WIDTH = 1280;
    const REF_HEIGHT = 720;

    // Calculate the scale factor to fit the viewport
    const { scale, shouldRotate } = useGameScale(REF_WIDTH, REF_HEIGHT);

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-[#020617] overflow-hidden"
            style={{ width: '100vw', height: '100vh' }}
        >
            {/* The Scaling Canvas */}
            <div
                className="relative shadow-[0_0_100px_rgba(0,0,0,0.8)] bg-[#0f172a] overflow-hidden origin-center pointer-events-auto"
                style={{
                    width: `${REF_WIDTH}px`,
                    height: `${REF_HEIGHT}px`,
                    transform: `scale(${scale}) ${shouldRotate ? 'rotate(90deg)' : ''}`,
                    flexShrink: 0,
                    // Specific rendering for game-style UI
                    imageRendering: 'auto',
                    backfaceVisibility: 'hidden',
                    transition: 'transform 0.3s ease-out', // Smooth transition on resize/orientation change
                }}
            >
                {/*
                  Scale everything back up for children if they use
                  fixed positioning relative to the canvas
                */}
                <div className="w-full h-full relative overflow-hidden">
                    {children}
                </div>
            </div>

            {/* Background Decorative Blur (Extending outside canvas) */}
            <div className="absolute inset-0 z-[-1] opacity-30 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vh] bg-gradient-radial from-indi-gold/5 to-transparent blur-3xl"></div>
            </div>
        </div>
    );
}
