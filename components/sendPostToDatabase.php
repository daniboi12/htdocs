<?php
    include 'connectToDatabase.php';

    if (isset($_POST['sendPost'])) {

    $dateAdded = $_POST['date'];;
    $title = $_POST['title'];;
    $body = $_POST['body'];;
        
    $sql = "INSERT INTO blogPosts (dateAdded, title, body) VALUES ('$dateAdded', '$title', '$body')";

    $conn->query($sql);

    $conn->close();
    }
?>