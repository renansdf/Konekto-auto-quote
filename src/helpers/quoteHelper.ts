// has table of costs

const servicesByLanguageGroup = [
  {
    humanTranslation: {
      wordsPerDay: 4000,
      baseDays: 1,
      baseCost: 0.06,
      thresholdCost: 0.05,
    },
    simpleRevision: {
      wordsPerDay: 8000,
      baseDays: 1,
      baseCost: 0.03,
      thresholdCost: 0.02,
    },
  },
  {
    humanTranslation: {
      wordsPerDay: 3000,
      baseDays: 1,
      baseCost: 0.07,
      thresholdCost: 0.05,
    },
    simpleRevision: {
      wordsPerDay: 8000,
      baseDays: 1,
      baseCost: 0.04,
      thresholdCost: 0.03,
    },
  },
];

// receives cost request
// returns calculated cost

interface IRequestData {
  languageGroup: number;
  serviceName: 'humanTranslation' | 'simpleRevision';
  numberOfWords: number;
}

const calculateCost = (data: IRequestData) => {
  const selectedGroup = servicesByLanguageGroup[data.languageGroup];
  const serviceData = selectedGroup[data.serviceName];

  let multiplier: number;
  if (data.numberOfWords < 8000) {
    multiplier = serviceData.baseCost;
  } else {
    multiplier = serviceData.thresholdCost;
  }

  const totalCost = Math.ceil(data.numberOfWords * multiplier);
  return totalCost;
};

export default calculateCost;
