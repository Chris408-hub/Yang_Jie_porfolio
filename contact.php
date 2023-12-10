<html>
<head>
</head>

<body>
<section>
<form method="post" action="sendmail.php">


    <label for="name">Name: </label>
    <input type="text" name="name" id="name">

    <br><br>

    <label for="email">Email: </label>
    <input type="text" name="email" id="email">

    <br><br>

    <label for="comments">Comments: </label>
    <textarea name="comments" id="comments">LEAVE ME A Message</textarea>

    <br><br>

    <input type="submit" value="send">
    <br><br>    <br><br>
</form>
</section>
<footer>
<?php 
echo date("F j, Y, g:i a"); 
?>

</footer>
</body>
</html>