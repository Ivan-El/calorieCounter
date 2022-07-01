import { formatNumber } from './util.js';

const resultBox = document.querySelector('.counter__result');
const resultBoxCaloriesNorm = resultBox.querySelector('#calories-norm');
const resultBoxCaloriesSlim = resultBox.querySelector('#calories-minimal');
const resultBoxCaloriesGain = resultBox.querySelector('#calories-maximal');


const showResult = ({slim, maintaining, gain}) => {
  if (resultBox.classList.contains('counter__result--hidden')) {
    resultBox.classList.remove('counter__result--hidden')
  }

  resultBoxCaloriesSlim.textContent = formatNumber(slim);
  resultBoxCaloriesNorm.textContent = formatNumber(maintaining);
  resultBoxCaloriesGain.textContent = formatNumber(gain);
};


const hideResult = () => {
  if (!resultBox.classList.contains('counter__result--hidden')) {
    resultBox.classList.add('counter__result--hidden')
  }
};

export { hideResult, showResult }
