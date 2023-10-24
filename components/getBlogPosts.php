<?php
    include 'connectToDatabase.php';

    $sql = "SELECT * FROM blogPosts";
    $result = $conn->query($sql);
    
    if ($result->num_rows > 0) 
    {
        while($row = $result->fetch_assoc()) 
        {
            echo "<hr><hgroup><h4>$row[dateAdded] - $row[title]</h4><p>$row[body]</p></hgroup></hr>";
        }
    }

    $conn->close();
?>