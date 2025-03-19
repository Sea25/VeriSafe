// admin.js

// Admin Login Form Submission
document.getElementById('adminLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get input values
    const username = document.getElementById('adminUsername').value;
    const password = document.getElementById('adminPassword').value;

    // Basic validation (customize as needed)
    if (username === "admin" && password === "admin123") {
        // Redirect to Admin Dashboard on successful login
        window.location.href = 'admin_dashboard.html';
    } else {
        alert("Invalid username or password. Please try again.");
    }
});

// Add Student Form Submission
document.getElementById('addStudentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const name = document.getElementById('studentName').value;
    const rollNumber = document.getElementById('rollNumber').value;
    const department = document.getElementById('department').value;
    const photo = document.getElementById('studentPhoto').files[0];

    // Validate inputs (customize as needed)
    if (!name || !rollNumber || !department || !photo) {
        alert("Please fill out all fields and upload a photo.");
        return;
    }

    // Create a FormData object to send data (useful for file uploads)
    const formData = new FormData();
    formData.append('name', name);
    formData.append('rollNumber', rollNumber);
    formData.append('department', department);
    formData.append('photo', photo);

    // Simulate saving data (replace with actual API call)
    console.log("Student Data:", { name, rollNumber, department, photo });
    alert("Student added successfully!");

    // Redirect back to Admin Dashboard
    window.location.href = 'admin_dashboard.html';
});

// Fetch and Display Logs
function fetchLogs() {
    // Simulate fetching logs from a backend (replace with actual API call)
    const logs = [
        { name: "John Doe", rollNumber: "12345", department: "Computer Science", date: "2023-10-01", time: "10:00 AM" },
        { name: "Jane Smith", rollNumber: "67890", department: "Electrical Engineering", date: "2023-10-02", time: "11:30 AM" },
    ];

    const logsTable = document.getElementById('logsTable').getElementsByTagName('tbody')[0];
    logsTable.innerHTML = ""; // Clear existing rows

    // Populate the table with logs
    logs.forEach(log => {
        const row = logsTable.insertRow();
        row.insertCell(0).textContent = log.name;
        row.insertCell(1).textContent = log.rollNumber;
        row.insertCell(2).textContent = log.department;
        row.insertCell(3).textContent = log.date;
        row.insertCell(4).textContent = log.time;
    });
}

// Call fetchLogs when the logs page loads
if (window.location.pathname.endsWith('logs.html')) {
    fetchLogs();
}