// DOM Elements
const emergencyBtn = document.getElementById('emergencyBtn');
const cancelBtn = document.getElementById('cancelBtn');
const fakeCallBtn = document.getElementById('fakeCallBtn');
const timerDisplay = document.getElementById('timer');
const alertStatus = document.getElementById('alertStatus');
const messageInput = document.getElementById('message');
const alertList = document.getElementById('alertList');
const alarmSound = document.getElementById('alarmSound');
const fakeCallScreen = document.getElementById('fakeCallScreen');

// Variables
let countdown;
let timer = 10; // Countdown time in seconds
let ringtone; // Variable to store the ringtone audio

// Function to start the countdown
function startCountdown() {
  console.log("Countdown started"); // Debugging log
  // Disable the emergency button to prevent multiple clicks
  emergencyBtn.disabled = true;

  // Show countdown and cancel button
  document.getElementById('countdownTimer').style.display = 'block';

  // Start the countdown
  countdown = setInterval(() => {
    timer--;
    timerDisplay.textContent = timer;

    // If countdown reaches 0, trigger the alert
    if (timer <= 0) {
      clearInterval(countdown);
      triggerAlert();
    }
  }, 1000); // Update every second
}

// Function to trigger the emergency alert
function triggerAlert() {
  console.log("Alert triggered"); // Debugging log
  // Play the alarm sound
  alarmSound.play();

  // Flash screen effect
  document.body.classList.add('flash');
  setTimeout(() => {
    document.body.classList.remove('flash');
  }, 5000); // Flash for 5 seconds

  // Get the custom message (if any)
  const message = messageInput.value.trim() || "Emergency alert triggered!";

  // Display the alert status
  alertStatus.textContent = `Alert sent: "${message}"`;
  alertStatus.style.color = 'green';

  // Add the alert to the sent alerts list
  const alertItem = document.createElement('li');
  const timestamp = new Date().toLocaleTimeString();
  alertItem.textContent = `[${timestamp}] Alert sent${message ? `: "${message}"` : ''}`;
  alertList.appendChild(alertItem);

  // Reset the timer and hide countdown
  resetCountdown();
  document.getElementById('countdownTimer').style.display = 'none';
}

// Function to reset the countdown
function resetCountdown() {
  console.log("Countdown reset"); // Debugging log
  clearInterval(countdown);
  timer = 10;
  timerDisplay.textContent = timer;
  emergencyBtn.disabled = false;
}

// Function to simulate a fake call
function simulateFakeCall() {
  console.log("Fake call initiated"); // Debugging log
  // Show the fake call screen
  fakeCallScreen.style.display = 'block';

  // Play the ringtone
  ringtone = new Audio('../assets/original-phone-ringtone-36558.mp3'); // Add a ringtone file
  ringtone.play();

  // Automatically decline the call after 10 seconds
  setTimeout(() => {
    if (fakeCallScreen.style.display === 'block') {
      declineCall();
      alertStatus.textContent = "Call ended (automatically).";
      alertStatus.style.color = 'blue';
    }
  }, 10000); // 10 seconds
}

// Function to answer the fake call
function answerCall() {
  console.log("Fake call answered"); // Debugging log
  alert("You answered the call.");
  declineCall(); // Hide the call screen after answering
  alertStatus.textContent = "Call ended (answered).";
  alertStatus.style.color = 'blue';
}

// Function to decline the fake call
function declineCall() {
  console.log("Fake call declined"); // Debugging log
  // Hide the fake call screen
  fakeCallScreen.style.display = 'none';

  // Stop the ringtone
  if (ringtone) {
    ringtone.pause();
    ringtone.currentTime = 0; // Reset the audio
  }
}

// Event Listeners
emergencyBtn.addEventListener('click', startCountdown);
cancelBtn.addEventListener('click', resetCountdown);
fakeCallBtn.addEventListener('click', simulateFakeCall);