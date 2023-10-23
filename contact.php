<!DOCTYPE html>

<html>

<head>
  <title>Main Page</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" type="image/x-icon" href="images/logo_circle_favicon.svg" />
  <link rel="stylesheet" type="text/css" href="/css/contact.css" />
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
    <div class="row py-3 about-me">
      <div class="col-lg-2"></div>
      <div class="col-lg-4 text-justify d-flex align-items-center justify-content-center flex-column">
        <h3>Get In Touch</h3>
        <p>Fill out the form to get in touch with us.</p>
      </div>
      <form class="col-lg-4 d-flex justify-content-center flex-column">
        <div class="form-group">
          <label for="exampleFormControlInput1">Email address:</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
        </div>
        <div class="form-group mt-3">
          <label for="exampleFormControlTextarea1">Your message:</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="I wanted to ask..."
            rows="20"></textarea>
        </div>
        <button type="submit" class="btn btn-primary mt-3">Submit</button>
      </form>
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