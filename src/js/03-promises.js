import Notiflix from 'notiflix';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve({ position, delay });
  } else {
    reject({ position, delay });
  }
})}, delay.value);
};

const form = document.querySelector('.form');
const { delay, step, amount } = document.querySelector('form');
let position = null;


form.addEventListener('submit', handleEvent);

function handleEvent(e) {
  e.preventDefault();
  for (i = 0; i < amount.value; i++) {
    setTimeout(() => {
      position = i + 1;
      createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    }, i * step.value)
  }
}