<?php 
// Database configuration 
$servername = "localhost"; 
$username = "editihyw_testneoma"; 
$password = "testneoma@123"; 
$database = "editihyw_testneoma"; 
 
$conn = mysqli_connect($servername, $username, $password, $database);
// Connection Check
if (!$conn) {
    die("Connection failed: " . $conn->connect_error);
}
else{
    // echo "done";
}
?>