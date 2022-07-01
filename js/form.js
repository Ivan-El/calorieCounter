import { validateInput } from './validation.js';
import { showResult, hideResult } from './result.js';
import { calculateCalorieRate } from './calculation.js';
import { findOutFieldStatus } from './util.js';

const form = document.querySelector('.counter__form');
const formFields = form.querySelectorAll('input[type=text]');
const submitButton = form.querySelector('.form__submit-button');
const resetButton = form.querySelector('.form__reset-button');


const onFormChange = () => {
  const fiedsStatus = findOutFieldStatus(formFields);

  if (fiedsStatus.fill) {
    resetButton.disabled = false;
  } else {
    resetButton.disabled = true;
  }

  if (fiedsStatus.valid) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
};


const submitForm = (evt) => {
  evt.preventDefault();

  const target = evt.target;
  const formData = calculateCalorieRate(target);

  showResult(formData);
};


const onResetButtonClick = () => {
  form.reset();
  hideResult();
  resetButton.disabled = true;
  submitButton.disabled = true;
};

const initForm = () => {
  form.addEventListener('change', onFormChange);
  form.addEventListener('input', validateInput);
  form.addEventListener('submit', submitForm);
  resetButton.addEventListener('click', onResetButtonClick);
};

export { initForm }


