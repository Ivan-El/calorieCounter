const Activity_coefficients = {
  MIN: 1.2,
  LOW: 1.375,
  MEDIUM: 1.55,
  HIGH: 1.725,
  MAX: 1.9,
};

const CaloriesFormulaFactor = {
  AGE: 5,
  WEIGHT: 10,
  HEIGHT: 6.25,
};

const TargetFormulaFactor = {
  SLIM: 0.85,
  GAIN: 1.15,
};

const GenderFormulaFactor = {
  MALE: -5,
  FEMALE: 161,
}


const calculateCalorieRate = (form) => {
  const gender = form.gender.value.toUpperCase();
  const weight = form.weight.value * CaloriesFormulaFactor.WEIGHT;
  const height = form.height.value * CaloriesFormulaFactor.HEIGHT;
  const age = form.age.value * CaloriesFormulaFactor.AGE;
  const coefficient = Activity_coefficients[`${form.activity.value.toUpperCase()}`];
  const weightIndicator =  Math.round((weight + height - age - GenderFormulaFactor[`${gender}`]) * coefficient);
  const caloriesNorm = {};

  caloriesNorm.slim = Math.round(weightIndicator * TargetFormulaFactor.SLIM);
  caloriesNorm.maintaining = weightIndicator;
  caloriesNorm.gain = Math.round(weightIndicator * TargetFormulaFactor.GAIN);

  return caloriesNorm;
};

export { calculateCalorieRate };
