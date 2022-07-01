import { hideResult } from './result.js';

const validateInput = (evt) => {
  const input = evt.target;
  const validityState = input.validity;

  if (validityState.valueMissing) {
    input.setCustomValidity('Обязательное поле. Введите значение');
    hideResult();
  } else if (validityState.patternMismatch) {
    input.setCustomValidity('Значение должно содержать только числа без пробелов и символов');
    hideResult();
  } else if (validityState.tooShort) {
    input.setCustomValidity(`Значение должно содержать не менее ${input.minLength} симв.`);
    hideResult();
  } else if (validityState.tooLong) {
    input.setCustomValidity(`Значение должно содержать не более ${input.maxLength} симв.`);
    hideResult();
  } else {
    input.setCustomValidity('');
  }

  input.reportValidity();
};

export { validateInput }
