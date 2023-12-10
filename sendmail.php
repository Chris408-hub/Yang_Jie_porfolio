<?php

require_once('connect.php');

///gather the form content
$name = $_POST['name'];
$email = $_POST['email'];
$msg = $_POST['comments'];

$errors = [];

//validate and clean these values

$name = trim($name);
$email = trim($email);
$msg = trim($msg);


if(empty($name)) {
    $errors['name'] = 'Name cant be empty';
}

if(empty($msg)) {
    $errors['comments'] = 'Comment field cant be empty';
}

if(empty($email)) {
    $errors['email'] = 'You must provide an email';
} else if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['legit_email'] = 'You must provide a REAL email';
}

if(empty($errors)) {

    //insert these values as a new row in the contacts table

    $query = "INSERT INTO contacts ( name, email, comments) VALUES('$name','$email','$msg')";

    if(mysqli_query($connect, $query)) {

//format and send these values in an email

$to = 'yjie9093@gmail.com';
$subject = 'Message from your Portfolio site!';

$message = "You have received a new contact form submission:\n\n";
$message .= "Name: ".$name."\n";
$message .= "Email: ".$email."\n\n";
//build out rest of message body...

mail($to,$subject,$message);

header('Location: thank_you.php');

}








}


?>