// Emergency Alert Button
const emergencyBtn = document.getElementById('emergencyBtn');
const alertStatus = document.getElementById('alertStatus');
const timerDisplay = document.getElementById('timer');
const cancelBtn = document.getElementById('cancelBtn');
const fakeCallBtn = document.getElementById('fakeCallBtn');
const alarmSound = document.getElementById('alarmSound');
const messageInput = document.getElementById('message');

let countdown;
let timer = 10;

// Trigger Emergency Alert
emergencyBtn.addEventListener('click', () => {
  // Start countdown
  countdown = setInterval(() => {
    timer--;
    timerDisplay.textContent = timer;

    if (timer <= 0) {
      clearInterval(countdown);
      triggerAlert();
    }
  }, 1000);

  // Show countdown and cancel button
  document.getElementById('countdownTimer').style.display = 'block';
  emergencyBtn.disabled = true;
});

// Cancel Alert
cancelBtn.addEventListener('click', () => {
  clearInterval(countdown);
  timer = 10;
  timerDisplay.textContent = timer;
  document.getElementById('countdownTimer').style.display = 'none';
  emergencyBtn.disabled = false;
  alertStatus.textContent = 'Emergency alert canceled.';
  alertStatus.style.color = 'red';
});

// Trigger Alert Function
function triggerAlert() {
  // Play alarm sound
  alarmSound.play();

  // Flash screen effect
  document.body.classList.add('flash');
  setTimeout(() => {
    document.body.classList.remove('flash');
  }, 5000);

  // Show alert status
  const customMessage = messageInput.value.trim();
  if (customMessage) {
    alertStatus.textContent = `Alert sent with message: "${customMessage}"`;
  } else {
    alertStatus.textContent = 'Emergency alert sent!';
  }
  alertStatus.style.color = 'green';

  // Reset timer and hide countdown
  timer = 10;
  timerDisplay.textContent = timer;
  document.getElementById('countdownTimer').style.display = 'none';
  emergencyBtn.disabled = false;
}

// Fake Call Button
fakeCallBtn.addEventListener('click', () => {
  alertStatus.textContent = 'Fake call initiated. Pretend to answer!';
  alertStatus.style.color = 'blue';
});