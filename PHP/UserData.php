<?php
$host = '127.0.0.1';
$dbUser = 'root';
$dbPassword = '6g3fpxt4gv'; // Your MySQL root password
$dbName = "userdatabase"; // Change this to your database name

$conn = new mysqli('127.0.0.1', 'root', '6g3fpxt4gv', "userdatabase");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form is submitted for login or registration
if (isset($_POST['action']) && $_POST['action'] == 'register') {
    $formUsername = $_POST['username'];
    $formEmail = $_POST['email'];
    $formPassword = password_hash($_POST['password'], PASSWORD_DEFAULT);

    // Check if the email or username already exists
    $checkEmailStmt = $conn->prepare("SELECT Email FROM Users WHERE Email = ?");
    $checkEmailStmt->bind_param("s", $formEmail);
    $checkEmailStmt->execute();
    $checkEmailStmt->store_result();

    $checkUsernameStmt = $conn->prepare("SELECT Username FROM Users WHERE Username = ?");
    $checkUsernameStmt->bind_param("s", $formUsername);
    $checkUsernameStmt->execute();
    $checkUsernameStmt->store_result();

    if ($checkEmailStmt->num_rows > 0) {
        echo "Αυτό το email χρησιμοποιείται ήδη από κάποιον άλλο.";
    } else if ($checkUsernameStmt->num_rows > 0) {
        echo "Αυτό το username χρησιμοποιείται ήδη από κάποιον άλλο.";
    } else {
        // If the email and username do not exist, proceed with the registration
        $stmt = $conn->prepare("INSERT INTO Users (Username, Email, Password) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $formUsername, $formEmail, $formPassword);
        if ($stmt->execute()) {
            // Redirect to the home page after successful registration
            header("Location: MenuBars.html");
            exit;
        } else {
            echo "Error: " . $stmt->error;
        }
        $stmt->close();
    }
    $checkEmailStmt->close();
    $checkUsernameStmt->close();
} elseif (isset($_POST['action']) && $_POST['action'] == 'login') {
    // Login logic
    $formEmail = $_POST['email'];
    $formPassword = $_POST['password'];

    $stmt = $conn->prepare("SELECT Password FROM Users WHERE Email = ?");
    $stmt->bind_param("s", $formEmail);
    $stmt->execute();
    $stmt->store_result();
    if ($stmt->num_rows == 1) {
        $stmt->bind_result($hashedPassword);
        $stmt->fetch();
        if (password_verify($formPassword, $hashedPassword)) {
            // Password is correct, redirect to the home page
            header("Location: MenuBars.html");
            exit;
        } else {
            echo "Invalid email or password";
        }
    } else {
        echo "Invalid email or password";
    }
    $stmt->close();
}

$conn->close();
?>
