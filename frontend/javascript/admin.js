document.getElementById('adminLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add admin login logic here
    window.location.href = 'admin_dashboard.html';
});

document.getElementById('addStudentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add student addition logic here
    window.location.href = 'admin_dashboard.html';
});

// Fetch and display logs
fetch('logs.json') // Assuming logs are stored in a JSON file
    .then(response => response.json())
    .then(data => {
        const logsTable = document.getElementById('logsTable').getElementsByTagName('tbody')[0];
        data.forEach(log => {
            const row = logsTable.insertRow();
            row.insertCell(0).textContent = log.name;
            row.insertCell(1).textContent = log.rollNumber;
            row.insertCell(2).textContent = log.department;
            row.insertCell(3).textContent = log.date;
            row.insertCell(4).textContent = log.time;
        });
    });
