/**
 * Audio utility functions using real mp3 files for spiritual sounds.
 */

import omSoundFile from '@/lib/om.mp3';
import damruSoundFile from '@/lib/shivji_damru.mp3';

/**
 * Plays the Om chanting sound.
 * 
 * @param volume - Volume level from 0 to 1 (default: 0.5)
 * @param loop - Whether to loop the sound (default: true)
 * @returns A cleanup function to stop and dispose the audio
 */
export function playOmSound(volume: number = 0.5, loop: boolean = true): () => void {
    const audio = new Audio(omSoundFile);
    audio.volume = volume;
    audio.loop = loop;

    // Fade in effect
    audio.volume = 0;
    audio.play().catch(() => {
        // Autoplay blocked — try playing on next user interaction
        const resumeAudio = () => {
            audio.play().catch(() => { });
            document.removeEventListener('click', resumeAudio);
            document.removeEventListener('touchstart', resumeAudio);
        };
        document.addEventListener('click', resumeAudio, { once: true });
        document.addEventListener('touchstart', resumeAudio, { once: true });
    });

    // Gradual fade in over 2 seconds
    let fadeIn: number | undefined;
    const targetVolume = volume;
    const fadeInDuration = 2000; // ms
    const fadeInSteps = 40;
    const fadeInInterval = fadeInDuration / fadeInSteps;
    const volumeStep = targetVolume / fadeInSteps;
    let currentStep = 0;

    fadeIn = window.setInterval(() => {
        currentStep++;
        audio.volume = Math.min(currentStep * volumeStep, targetVolume);
        if (currentStep >= fadeInSteps) {
            clearInterval(fadeIn);
        }
    }, fadeInInterval);

    // Cleanup: fade out and stop
    return () => {
        if (fadeIn) clearInterval(fadeIn);

        // Fade out over 500ms
        const fadeOutDuration = 500;
        const fadeOutSteps = 20;
        const fadeOutInterval = fadeOutDuration / fadeOutSteps;
        const currentVolume = audio.volume;
        const fadeOutStep = currentVolume / fadeOutSteps;
        let outStep = 0;

        const fadeOut = setInterval(() => {
            outStep++;
            audio.volume = Math.max(currentVolume - outStep * fadeOutStep, 0);
            if (outStep >= fadeOutSteps) {
                clearInterval(fadeOut);
                audio.pause();
                audio.currentTime = 0;
                audio.src = '';
            }
        }, fadeOutInterval);
    };
}

/**
 * Plays the Damru (Lord Shiva's drum) sound.
 * 
 * @param volume - Volume level from 0 to 1 (default: 0.4)
 * @param loop - Whether to loop the sound (default: true)
 * @returns A cleanup function to stop and dispose the audio
 */
export function playDamruSound(volume: number = 0.4, loop: boolean = true): () => void {
    const audio = new Audio(damruSoundFile);
    audio.volume = volume;
    audio.loop = loop;

    audio.play().catch(() => {
        // Autoplay blocked — try playing on next user interaction
        const resumeAudio = () => {
            audio.play().catch(() => { });
            document.removeEventListener('click', resumeAudio);
            document.removeEventListener('touchstart', resumeAudio);
        };
        document.addEventListener('click', resumeAudio, { once: true });
        document.addEventListener('touchstart', resumeAudio, { once: true });
    });

    // Cleanup: fade out and stop
    return () => {
        const fadeOutDuration = 500;
        const fadeOutSteps = 20;
        const fadeOutInterval = fadeOutDuration / fadeOutSteps;
        const currentVolume = audio.volume;
        const fadeOutStep = currentVolume / fadeOutSteps;
        let outStep = 0;

        const fadeOut = setInterval(() => {
            outStep++;
            audio.volume = Math.max(currentVolume - outStep * fadeOutStep, 0);
            if (outStep >= fadeOutSteps) {
                clearInterval(fadeOut);
                audio.pause();
                audio.currentTime = 0;
                audio.src = '';
            }
        }, fadeOutInterval);
    };
}
