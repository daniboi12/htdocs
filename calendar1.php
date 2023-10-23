<!DOCTYPE html>

<html>

<head>
  <title>Stories</title>
  <link rel="icon" type="image/x-icon" href="images/logo_circle_favicon.svg">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php
  include "./requiredCSS.php";
  ?>
  <script src="./scripts/nav.js" defer></script>
  <link rel="stylesheet" type="text/css" href="css/calendar.css">
  <!-- Google Font Link for Icons -->
  <link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200">
  <script src="scripts/calendar.js" defer></script>
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

    <div class="row py-3">
      <div class="col-md-12">
        <div class="elegant-calencar d-md-flex shadow">
          <div class="wrap-header d-flex align-items-center">
            <p id="reset">reset</p>
            <div id="header" class="p-0">
              <div class="pre-button d-flex align-items-center justify-content-center"><i
                  class="fa fa-chevron-left"></i></div>
              <div class="head-info">
                <div class="head-day"></div>
                <div class="head-month"></div>
              </div>
              <div class="next-button d-flex align-items-center justify-content-center"><i
                  class="fa fa-chevron-right"></i></div>
            </div>
          </div>
          <div class="calendar-wrap">
            <table id="calendar">
              <thead>
                <tr>
                  <th>Sun</th>
                  <th>Mon</th>
                  <th>Tue</th>
                  <th>Wed</th>
                  <th>Thu</th>
                  <th>Fri</th>
                  <th>Sat</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col p-0">
        <?php
        include "./components/footer.php";
        ?>
      </div>
    </div>
  </div>
  <script src="scripts/jquery.min.js"></script>
  <script src="scripts/bootstrap.min.js"></script>
  <script src="scripts/main.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
    crossorigin="anonymous"></script>
</body>

</html>