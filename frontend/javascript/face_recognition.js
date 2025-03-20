const video = document.getElementById('video');
const captureButton = document.getElementById('capture');
const statusMessage = document.getElementById('status');

navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    });

captureButton.addEventListener('click', () => {
    const faceMatched = Math.random() > 0.5; // Simulated face match (Replace with actual API)
    
    if (faceMatched) {
        statusMessage.textContent = '✔️ Face Matched';
        setTimeout(() => {
            window.location.href = 'success.html';
        }, 2000);
    } else {
        statusMessage.textContent = '❌ Face Not Recognized';
        setTimeout(() => {
            window.location.href = 'denied.html';
        }, 2000);
    }
});
