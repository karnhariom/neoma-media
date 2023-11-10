
<?php

        include("connection.php");
    $name    = @trim(stripslashes($_POST['name']));
    $companyname    = @trim(stripslashes($_POST['c_name']));
    $reachby = $_GET['reachby'];
    $helpwant = $_GET['helpwant'];
    $email   = @trim(stripslashes($_POST['email']));
    $message = @trim(stripslashes($_POST['message']));

    
    $email_from = $name;
    $email_to = 'growth@neoma.media';
    
    
     
    $subject="Neoma contact form";
     
     
     $body='<html>
            <body>
            <table border="2px">
            <tr align="center">
            <td colspan="2"><b>'.$subject.'</b></td>
            </tr>
             <tr>
                <tr><td><b>Name :</b></td><td>'.$name.'</td></tr>
                <tr><td><b>Email :</b></td><td>'.$email.'</td></tr>
                <tr><td><b> Phone :</b></td><td>'.$phone.'</td></tr>
                <tr><td><b>Selected subject :</b></td><td>'.$subject.'</td></tr>
                <td><b>Message :</b></td><td>'.$message.'</td></tr>
            </tr>
            
            </table>
            
            </body>
            </html>';  
                
            
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= 'From: <'.$email_from.'>'. "\r\n";
    $headers .= 'Bcc: hariom.karn@thecuneiform.com' . "\r\n";
    
    if(mail($email_to, $subject, $body, $headers))
    {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone= $_POST['phone'];
        $subject= $_POST['subject'];
        $message = $_POST['message'];
        
  
        $qu= "INSERT INTO `contactform` (`name`, `email`, `phone`, `subject`, `message`) VALUES ('".$name."', '".$email."', '".$phone."','".$subject."', '".$message."')";
      if($conn->query($qu)===TRUE){
        // echo "<script>
        // window.location='https://neoma.media';
        // </script>";
        $conn->close();
        }
        else
        {
        echo "Insert Failed ".$conn->error;
        $conn->close();
    }
    
    }
?>
