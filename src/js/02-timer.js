// Opisany w dokumentacji
import flatpickr from 'flatpickr';
// Dodatkowy import stylów
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector("button[data-start]");
const daysOnTimer = document.querySelector("[data-days]");
const hoursOnTimer = document.querySelector("[data-hours]");
const minutesOnTimer = document.querySelector("[data-minutes]");
const secondsOnTimer = document.querySelector("[data-seconds]");
const input = document.querySelector("#datetime-picker");

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      const now = new Date();
      if (selectedDates[0] <= now) {
          alert("Please choose a date in the future");
          blockBtn(startBtn)
      } else {
        unblockBtn(startBtn)
      }
    },
  };
function blockBtn(btn) {
    btn.disabled = true;
};
blockBtn(startBtn)
function unblockBtn(btn) {
    btn.disabled = false;
};
flatpickr("#datetime-picker", options)

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  };

startBtn.addEventListener("click", countdown)
function countdown() {
  timerId = setInterval(() => {
  if (input.value != null) {
    const now = new Date().getTime();
    const deadline = new Date((input.value).replace(/-/g, "/")).getTime();
    const dif = deadline - now;
    const { days, hours, minutes, seconds} = convertMs(dif)
      daysOnTimer.innerHTML = addLeadingZero(days);
      hoursOnTimer.innerHTML = addLeadingZero(hours);
      minutesOnTimer.innerHTML = addLeadingZero(minutes);
      secondsOnTimer.innerHTML = addLeadingZero(seconds);
  } else
    return
  }, 1000);
}

function addLeadingZero(value) {
  const result = String(value).padStart(2, '0');
  return result
}