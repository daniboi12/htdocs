<?php

    session_start();

    $_SESSION['blogSite'] = "blog.php";

    if($_SESSION['loggedIn'] == TRUE){
        $_SESSION['blogSite'] = "addPost.php";
    }

?>