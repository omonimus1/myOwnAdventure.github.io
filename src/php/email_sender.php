<?php

$to = "davidepollicino2015@gmail.com";
$subject = "My Own Adventure message";
// Fetch form content
$txt = $_POST["message"];
$email = $_POST["email"];
$name = $_POST["full_name"];
// Contenate strings
$headers = "From: ". $email;
$header . $name;

if (mail($to, $subject, $txt, $headers)) {
    echo("Email successfully sent to $to...");
 } else {
    echo("Email sending failed...");
 }
?>