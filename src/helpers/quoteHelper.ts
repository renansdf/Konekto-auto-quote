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
];

interface IWordRequestData {
  languageGroup: number;
  serviceName: 'machineTranslation' | 'humanTranslation' | 'technicalTranslation' | 'simpleRevision' | 'technicalRevision';
  numberOfWords: number;
}

export const calculateWordCost = (data: IWordRequestData) => {
  const selectedGroup = wordServicesGroups[data.languageGroup];
  const serviceData = selectedGroup[data.serviceName];

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
];

interface IMinuteRequestData {
  languageGroup: number;
  serviceName: 'machineTranscription' | 'humanTranscription' | 'captionFile' | 'captionHardcoded' | 'captionBonus';
  totalMinutes: number;
}

export const calculateMinuteCost = (data: IMinuteRequestData) => {
  const selectedGroup = minuteServicesGroups[data.languageGroup];
  const serviceData = selectedGroup[data.serviceName];

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
