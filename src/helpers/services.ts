interface ITimebasedServices {
  [key: string]: {
    name: string;
    value: 'machineTranscription' | 'humanTranscription' | 'captionFile' | 'captionHardcoded' | 'captionBonus';
  }[]
}

interface ITextBasedServices {
  [key: string]: {
    name: string;
    value: 'machineTranslation' | 'humanTranslation' | 'technicalTranslation' | 'simpleRevision' | 'technicalRevision';
  }[]
}

export const TimebasedServices: ITimebasedServices = {
  transcription: [
    { name: 'Machine Transcription', value: 'machineTranscription' },
    { name: 'Human Transcription', value: 'humanTranscription' },
  ],
  subtitling: [
    { name: 'Caption File', value: 'captionFile' },
    { name: 'Caption Hardcoded', value: 'captionHardcoded' },
    { name: 'Caption Bonus', value: 'captionBonus' },
  ],
};

export const TextbasedServices: ITextBasedServices = {
  translationBasic: [
    { name: 'Machine Translation', value: 'machineTranslation' },
    { name: 'Human Translation', value: 'humanTranslation' },
    { name: 'Technical Translation', value: 'technicalTranslation' },
  ],
  translationAdvanced: [
    { name: 'Human Translation', value: 'humanTranslation' },
    { name: 'Technical Translation', value: 'technicalTranslation' },
  ],
  revision: [
    { name: 'Simple Revision', value: 'simpleRevision' },
    { name: 'Technical Revision', value: 'technicalRevision' },
  ],
};
