const video = document.getElementById('video');
const captureButton = document.getElementById('capture');
const statusMessage = document.getElementById('status');

navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    });

captureButton.addEventListener('click', () => {
    // Add face recognition logic here
    statusMessage.textContent = '✔️ Face Matched';
    setTimeout(() => {
        window.location.href = 'success.html';
    }, 2000);
});
