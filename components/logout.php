<?php
if (isset($_GET['functionToCall']) && function_exists($_GET['functionToCall'])) {
  call_user_func($_GET['functionToCall']);
}

function logout()
{
  $_SESSION['loggedIn'] = FALSE;
  $_SESSION['username'] = '';
  $_SESSION['password'] = '';
  session_destroy();
}

?>