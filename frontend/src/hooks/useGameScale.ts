import { useState, useEffect, useCallback } from 'react';

export const useGameScale = (refWidth = 1280, refHeight = 720) => {
    const [scaling, setScaling] = useState({ scale: 1, shouldRotate: false });

    const updateScale = useCallback(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        // Check if we are in portrait mode
        const isPortrait = height > width;

        // Target dimensions for our landscape game
        // If we are in portrait, we plan to rotate, so our "available width" 
        // for the 1920px ref is actually the screen's height.
        const availableWidth = isPortrait ? height : width;
        const availableHeight = isPortrait ? width : height;

        // Apply safety margin
        const usableWidth = availableWidth * 0.98;
        const usableHeight = availableHeight * 0.98;

        const scaleX = usableWidth / refWidth;
        const scaleY = usableHeight / refHeight;

        // Use the smaller scale to fit the entire container
        const scale = Math.min(scaleX, scaleY);

        setScaling({ scale, shouldRotate: isPortrait });
    }, [refWidth, refHeight]);

    useEffect(() => {
        updateScale();
        window.addEventListener('resize', updateScale);
        return () => window.removeEventListener('resize', updateScale);
    }, [updateScale]);

    return scaling;
};
