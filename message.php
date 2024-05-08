<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    if(!empty($email) && !empty($message)) {    // if email and message field not empty
        if(filter_var($email, FILTER_VALIDATE_EMAIL)) { // if user entered invalid email
            $receiver = "rnd.danceppd@gmail.com";
            $subject = "From: $name <$email>"; 
            $body = "Name: $name\nEmail: $email\n\nMessage: $message";
            $sender = "From: $email";
            if(mail($receiver, $subject, $body, $sender)) {

            } else {
                echo "Sorry, failed to send message.";
            }
        } else {
            echo "Enter a valid email address.";
        }
    } else {
        echo "Email and message required.";
    }
?>