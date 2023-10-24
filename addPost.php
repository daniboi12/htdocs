<?php
include 'validateSession.php';
include 'sendPostToDatabase.php';
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Add Post</title>
    <link rel="icon" type="image/x-icon" href="images/logo_circle_favicon.svg">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php
    include "./requiredCSS.php";
    ?>
    <script src="./scripts/nav.js" defer></script>
    <script src="https://kit.fontawesome.com/1e30e30b42.js" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/blog.css">
</head>

<body>

    <div class="container-fluid p-3">

        <div class="row sticky-top">
            <div class="col p-0">
                <?php
                include "./components/navBootstrap.php";
                ?>
            </div>
        </div>

        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8 p-2">
                <div id="blogSection">
                    <article>
                        <h3>Blog Post</h3>
                        <?php include 'getBlogPosts.php' ?>
                    </article>
                </div>

                <div id="blogPostFormSection">
                    <p id="greetingMessage">
                        <?php echo "Hello " . $_SESSION['username']; ?>
                    </p>
                    <form id="blogPostForm" action="#" method="post">
                        <label for="title">Title:</label>
                        <input type="text" id="title" name="title" required><br>
                        <label for="date">Date:</label>
                        <input type="date" id="date" name="date" required><br>
                        <label for="content">Content:</label>
                        <textarea id="body" name="body" required></textarea><br>
                        <input id="submitPostButton" style="font-weight: bold;" type="submit" name="sendPost"
                            value="Submit">
                    </form>
                    <button id="logoutButton" onclick="callPHPLogout()">Log Out</button>
                    <button id="clearButton" onclick="clearBoxes()">Clear</button>
                </div>
            </div>
            <div class="col-md-2"></div>
        </div>


        <div class="row">
            <div class="col p-0">
                <?php
                include "./components/footer.php";
                ?>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
        crossorigin="anonymous"></script>
</body>

</html>