// DATA FOR WORDS
const wordServicesGroups = [
  {
    machineTranslation: {
      wordsPerDay: 8000,
      baseDays: 1,
      baseCost: 0.15,
      thresholdCost: 0.14,
    },
    humanTranslation: {
      wordsPerDay: 4000,
      baseDays: 1,
      baseCost: 0.19,
      thresholdCost: 0.17,
    },
    technicalTranslation: {
      wordsPerDay: 4000,
      baseDays: 1,
      baseCost: 0.25,
      thresholdCost: 0.22,
    },
    simpleRevision: {
      wordsPerDay: 8000,
      baseDays: 1,
      baseCost: 0.10,
      thresholdCost: 0.10,
    },
    technicalRevision: {
      wordsPerDay: 6000,
      baseDays: 1,
      baseCost: 0.14,
      thresholdCost: 0.14,
    },
  },
  {
    machineTranslation: {
      wordsPerDay: 7000,
      baseDays: 1,
      baseCost: 0.17,
      thresholdCost: 0.16,
    },
    humanTranslation: {
      wordsPerDay: 3000,
      baseDays: 1,
      baseCost: 0.21,
      thresholdCost: 0.19,
    },
    technicalTranslation: {
      wordsPerDay: 3000,
      baseDays: 1,
      baseCost: 0.27,
      thresholdCost: 0.24,
    },
    simpleRevision: {
      wordsPerDay: 8000,
      baseDays: 1,
      baseCost: 0.12,
      thresholdCost: 0.12,
    },
    technicalRevision: {
      wordsPerDay: 6000,
      baseDays: 1,
      baseCost: 0.16,
      thresholdCost: 0.16,
    },
  },
  {
    humanTranslation: {
      wordsPerDay: 2000,
      baseDays: 1,
      baseCost: 0.55,
      thresholdCost: 0.50,
    },
    technicalTranslation: {
      wordsPerDay: 2000,
      baseDays: 1,
      baseCost: 0.65,
      thresholdCost: 0.60,
    },
    simpleRevision: {
      wordsPerDay: 5000,
      baseDays: 1,
      baseCost: 0.35,
      thresholdCost: 0.32,
    },
    technicalRevision: {
      wordsPerDay: 4000,
      baseDays: 1,
      baseCost: 0.4,
      thresholdCost: 0.37,
    },
  },
  {
    humanTranslation: {
      wordsPerDay: 2000,
      baseDays: 1,
      baseCost: 0.8,
      thresholdCost: 0.8,
    },
    technicalTranslation: {
      wordsPerDay: 2000,
      baseDays: 1,
      baseCost: 0.9,
      thresholdCost: 0.9,
    },
    simpleRevision: {
      wordsPerDay: 5000,
      baseDays: 1,
      baseCost: 0.4,
      thresholdCost: 0.4,
    },
    technicalRevision: {
      wordsPerDay: 4000,
      baseDays: 1,
      baseCost: 0.45,
      thresholdCost: 0.45,
    },
  },
];

interface IWordRequestData {
  languageGroup: number;
  serviceName: 'machineTranslation' | 'humanTranslation' | 'technicalTranslation' | 'simpleRevision' | 'technicalRevision';
  numberOfWords: number;
}

export const calculateWordCost = (data: IWordRequestData) => {
  const selectedGroup = wordServicesGroups[data.languageGroup];
  const serviceData = selectedGroup[data.serviceName];

  if (!serviceData) {
    throw new Error('ocorreu um erro no sistema.');
  }
  let multiplier: number;
  if (data.numberOfWords < 8000) {
    multiplier = serviceData.baseCost;
  } else {
    multiplier = serviceData.thresholdCost;
  }

  const totalCost = Math.ceil(data.numberOfWords * multiplier);

  const translationTime = Math.ceil(data.numberOfWords / serviceData.wordsPerDay);
  const totalTime = translationTime + serviceData.baseDays;

  return [totalCost, totalTime];
};

// DATA FOR MINUTES
const minuteServicesGroups = [
  {
    machineTranscription: {
      minutesPerDay: 60,
      baseDays: 1,
      baseCost: 12,
      thresholdCost: 12,
    },
    humanTranscription: {
      minutesPerDay: 30,
      baseDays: 1,
      baseCost: 15,
      thresholdCost: 15,
    },
    captionFile: {
      minutesPerDay: 20,
      baseDays: 1,
      baseCost: 25,
      thresholdCost: 23,
    },
    captionHardcoded: {
      minutesPerDay: 20,
      baseDays: 2,
      baseCost: 27,
      thresholdCost: 25,
    },
    captionBonus: {
      minutesPerDay: 20,
      baseDays: 2,
      baseCost: 27,
      thresholdCost: 25,
    },
  },
  {
    machineTranscription: {
      minutesPerDay: 60,
      baseDays: 1,
      baseCost: 14,
      thresholdCost: 14,
    },
    humanTranscription: {
      minutesPerDay: 30,
      baseDays: 1,
      baseCost: 17,
      thresholdCost: 17,
    },
    captionFile: {
      minutesPerDay: 20,
      baseDays: 1,
      baseCost: 27,
      thresholdCost: 25,
    },
    captionHardcoded: {
      minutesPerDay: 20,
      baseDays: 2,
      baseCost: 30,
      thresholdCost: 28,
    },
    captionBonus: {
      minutesPerDay: 20,
      baseDays: 2,
      baseCost: 30,
      thresholdCost: 28,
    },
  },
  {
    captionFile: {
      minutesPerDay: 15,
      baseDays: 1,
      baseCost: 55,
      thresholdCost: 50,
    },
    captionHardcoded: {
      minutesPerDay: 15,
      baseDays: 2,
      baseCost: 58,
      thresholdCost: 55,
    },
    captionBonus: {
      minutesPerDay: 15,
      baseDays: 2,
      baseCost: 58,
      thresholdCost: 55,
    },
  },
  {
    captionFile: {
      minutesPerDay: 15,
      baseDays: 1,
      baseCost: 70,
      thresholdCost: 70,
    },
    captionHardcoded: {
      minutesPerDay: 15,
      baseDays: 2,
      baseCost: 73,
      thresholdCost: 73,
    },
    captionBonus: {
      minutesPerDay: 15,
      baseDays: 2,
      baseCost: 73,
      thresholdCost: 73,
    },
  },
];

interface IMinuteRequestData {
  languageGroup: number;
  serviceName: 'machineTranscription' | 'humanTranscription' | 'captionFile' | 'captionHardcoded' | 'captionBonus';
  totalMinutes: number;
}

export const calculateMinuteCost = (data: IMinuteRequestData) => {
  const selectedGroup = minuteServicesGroups[data.languageGroup];
  const serviceData = selectedGroup[data.serviceName];

  if (!serviceData) {
    throw new Error('ocorreu um erro no sistema.');
  }

  let multiplier: number;
  if (data.totalMinutes < 60) {
    multiplier = serviceData.baseCost;
  } else {
    multiplier = serviceData.thresholdCost;
  }

  const totalCost = Math.ceil(data.totalMinutes * multiplier);

  const translationTime = Math.ceil(data.totalMinutes / serviceData.minutesPerDay);
  const totalTime = translationTime + serviceData.baseDays;

  return [totalCost, totalTime];
};
