<?php 
// Database configuration 
$servername = "localhost"; 
$username = "editihyw_neoma"; 
$password = "neoma@123"; 
$database = "editihyw_neoma"; 
 
$conn = mysqli_connect($servername, $username, $password, $database);
// Connection Check
if (!$conn) {
    die("Connection failed: " . $conn->connect_error);
}
else{
    // echo "done";
}
?>