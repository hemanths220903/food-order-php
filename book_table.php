<?php
// Create connection
$conn =mysqli_connect("localhost","root", "", "sample");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$date = $_POST['date'];
$time = $_POST['time'];

// SQL query to insert data into the table
$sql = "INSERT INTO bookings (name, email, date, time) VALUES ('$name', '$email', '$date', '$time')";

if ($conn->query($sql) === TRUE) {
    echo '<script>alert("TABLE BOOKED SUCCESSFULLY!!")</script>';
    header("Location: food.html");

} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the database connection
$conn->close();
?>
