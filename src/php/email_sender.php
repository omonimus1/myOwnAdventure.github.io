<?php
$to = "davidepollicino2015@gmail.com";
$subject = "Website message";
$txt = "MessageFromWebsite";
$headers = "From: webmaster@example.com" . "\r\n";

if (mail($to, $subject, $txt, $headers)) {
    echo("Email successfully sent to $to...");
 } else {
    echo("Email sending failed...");
 }
?>