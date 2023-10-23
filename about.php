<!DOCTYPE html>

<html>

<head>
  <title>Main Page</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" type="image/x-icon" href="images/logo_circle_favicon.svg" />
  <link rel="stylesheet" type="text/css" href="/css/about.css" />
  <?php
  include "./requiredCSS.php";
  ?>
  <script src="scripts/nav.js" defer></script>
  <script src="https://kit.fontawesome.com/1e30e30b42.js" crossorigin="anonymous"></script>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
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

    <!-- 1st ROW Carousel-->
    <div class="row py-3">
      <div class="col-lg-2"></div>
      <div class="px-3 col-lg-4 text-justify d-flex align-items-center justify-content-center flex-column">
        <h3>About Me</h3>
        <p>Hello, I'm Gabriela Bashalova, and I'm the face behind the keyboard, penning down my thoughts and experiences
          for the world to read. By day, I'm a diligent dentistry student in the heart of Germany, diving into the
          fascinating world of oral health. But when the sun sets and my textbooks take a break, I transform into a
          passionate blogger.
          <br><br>
          I find joy in sharing my adventures, insights, and musings on life as a student and everything in between.
          From the complexities of dental anatomy to the joys of exploring new places, my journey is a colorful tapestry
          of academia and adventure.
          <br><br>
          Join me as I navigate the dual worlds of teeth and tales, bringing you along for the ride through the lens of
          my words and the heart of my experiences. Together, we'll explore the intersection of dentistry and
          storytelling, and who knows, we might just uncover a secret or two about keeping those smiles bright!
        </p>
      </div>
      <div class="px-3 col-lg-4 d-flex align-items-center justify-content-center overflow-hidden rounded shadow">
        <img src="images/me-portrait.jpeg" alt="me">
      </div>
      <div class="col-lg-2"></div>
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