<?php
require_once './passHash.php';

/**
* @author Jorge Lima
*/


/* ------------- login method ------------------ */

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$user = $request->user;
$pass = $request->password;

$conn;

  require_once './dbConnect.php';
  // opening db connection
  $db = new DbConnect();
  $conn = $db->connect();

  /*$password_hash = PassHash::hash("_tuna");

  // insert query

  if ($stmt = $conn->prepare("INSERT INTO users values(NULL, 'admin', '$password_hash')")) {
    $stmt->bind_param("ssss",$password_hash);

  }
  else {
    printf("Errormessage: %s\n", $conn->error);
  }

  $result = $stmt->execute();

  $stmt->close();*/

$stmt = $conn->prepare("SELECT password FROM users WHERE username = '$user'");

$stmt->execute();

$stmt->bind_result($password);

$stmt->store_result();

if ($stmt->num_rows > 0) {
  // Found user with the email
  // Now verify the password

  $stmt->fetch();

  $stmt->close();

  if (PassHash::check_password($password, $pass)) {
    // User password is correct
    echo 1;
  } else {
    // user password is incorrect
    echo 0;
  }
} else {
  $stmt->close();

  // user not existed with the name
  echo 0;
}




?>
