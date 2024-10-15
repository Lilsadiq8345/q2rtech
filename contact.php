<?php
// MySQL database credentials
$servername = "localhost";  
$password = "";  
$dbname = "contact";  

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the request is a POST request
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);
    
    // Prepare the SQL statement to insert data into the contacts table
    $stmt = $conn->prepare("INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $name, $email, $subject, $message);
    
    // Execute the query and check if the data was saved successfully
    if ($stmt->execute()) {
        // Return success message
        echo '<p style="color: green;">Your form has been submitted successfully. We will get back to you soon.</p>';
    } else {
        // Return error message
        echo '<p style="color: red;">There was an error submitting your form. Please try again later.</p>';
    }

    // Close the prepared statement and the database connection
    $stmt->close();
    $conn->close();
}
?>
