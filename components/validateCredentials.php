
<?php
    include 'validateSession.php';
    include 'connectToDatabase.php';

    $sql = "SELECT * FROM registeredCredentials";
    $result = $conn->query($sql);

    $_SESSION['username'] = $_POST['username'];
    $_SESSION['password'] = $_POST['password'];
    $message = "Enter your details:";
    $_SESSION['loggedIn'] = FALSE;

    if(isset($_POST['submit'])){
        if ($result->num_rows > 0) 
        {
            while($row = $result->fetch_assoc()) 
            {
                if($_SESSION['username'] == $row["username"])
                {
                    if($_SESSION['password'] == $row["password"])
                    {
                        $_SESSION['loggedIn'] = TRUE;
                        header("Location: addPost.php");
                        exit();
                    }
                    else
                    {
                        $message = "Invalid Password!!";
                    }
                }
                
                else
                {
                    $message = "Invalid Username!!";
                }
            }
        } 
        else 
        {
            echo "No results were found using the specified SQL Query";
        }
    }
    

    $conn->close();

?>
