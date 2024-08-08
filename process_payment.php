<?php
// Database configuration
$servername = "localhost"; // Your database server
$username = "root";        // Your database username
$password = "";            // Your database password
$dbname = "sample"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve and sanitize form input
$account = $conn->real_escape_string($_POST['account']);
$amount = $conn->real_escape_string($_POST['amount']);

// Validate amount to ensure it's numeric and positive
if (!is_numeric($amount) || $amount <= 0) {
    die("Invalid amount.");
}

// Insert payment record into the database
$sql = "INSERT INTO payments (account, amount) VALUES ('$account', '$amount')";

if ($conn->query($sql) === TRUE) {
    echo "<script>
        alert('Payment recorded successfully.');
        window.location.href = 'food.html';
    </script>";
} else {
    echo "<script>
        alert('Error: " . $conn->error . "');
        window.location.href = 'food.html';
    </script>";
}

// Close connection
$conn->close();
?>
