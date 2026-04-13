import { create } from 'zustand';

export type EraType = 
  | 'birth'
  | 'satya'
  | 'treta'
  | 'dwapar'
  | 'kali'
  | 'middle'
  | 'end'
  | null;

export type AppPhase = 
  | 'loading'
  | 'storytelling'
  | 'hero'
  | 'era'
  | 'exploration';

export type ExperienceType =
  | 'citylife'
  | 'spirituality'
  | 'mahashivratri'
  | 'festivals'
  | 'tourism'
  | null;

interface JourneyState {
  // Phase Management
  currentPhase: AppPhase;
  setPhase: (phase: AppPhase) => void;
  
  // Loading State
  loadingProgress: number;
  setLoadingProgress: (progress: number) => void;
  isLoadingComplete: boolean;
  setLoadingComplete: (complete: boolean) => void;
  
  // Storytelling State
  storyStep: number;
  setStoryStep: (step: number) => void;
  isStoryComplete: boolean;
  setStoryComplete: (complete: boolean) => void;
  
  // Era Journey
  currentEra: EraType;
  setCurrentEra: (era: EraType) => void;
  completedEras: EraType[];
  markEraComplete: (era: EraType) => void;
  
  // Experience Section
  currentExperience: ExperienceType;
  setCurrentExperience: (exp: ExperienceType) => void;
  
  // Exploration Mode
  isExplorationMode: boolean;
  setExplorationMode: (mode: boolean) => void;
  
  // Navigation
  activeSection: string;
  setActiveSection: (section: string) => void;
  
  // Reset
  resetJourney: () => void;
}

export const useJourneyStore = create<JourneyState>((set, get) => ({
  // Initial States
  currentPhase: 'loading',
  loadingProgress: 0,
  isLoadingComplete: false,
  storyStep: 0,
  isStoryComplete: false,
  currentEra: null,
  completedEras: [],
  currentExperience: null,
  isExplorationMode: false,
  activeSection: 'home',
  
  // Actions
  setPhase: (phase) => set({ currentPhase: phase }),
  
  setLoadingProgress: (progress) => set({ loadingProgress: progress }),
  setLoadingComplete: (complete) => set({ isLoadingComplete: complete }),
  
  setStoryStep: (step) => set({ storyStep: step }),
  setStoryComplete: (complete) => set({ isStoryComplete: complete }),
  
  setCurrentEra: (era) => set({ currentEra: era }),
  markEraComplete: (era) => {
    const { completedEras } = get();
    if (era && !completedEras.includes(era)) {
      set({ completedEras: [...completedEras, era] });
    }
  },
  
  setCurrentExperience: (exp) => set({ currentExperience: exp }),
  
  setExplorationMode: (mode) => set({ isExplorationMode: mode }),
  
  setActiveSection: (section) => set({ activeSection: section }),
  
  resetJourney: () => set({
    currentPhase: 'loading',
    loadingProgress: 0,
    isLoadingComplete: false,
    storyStep: 0,
    isStoryComplete: false,
    currentEra: null,
    completedEras: [],
    currentExperience: null,
    isExplorationMode: false,
    activeSection: 'home',
  }),
}));
