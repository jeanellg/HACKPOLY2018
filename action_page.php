<!-- Action page for login in login.html -->

<html>
<body>

<?php
$myFile = fopen('users.txt','r') or die("Users don't exist");

$username = $_POST["username"];
$password = $_POST["password"];

$users = array();

$i = 1;
while (!feof($myFile))
{
  $line = fgets($myFile)
  if (i%5 == 1)
  {
    $line = str_replace(array("\n", "\r"), '', $line);
    if (username == line)
    {
      i++;
      $line = fgets($myFile);
      $line = str_replace(array("\n", "\r"), '', $line);
      if (password == line)
      {
        header("Location: userhome.html");
        break; // successful login
      }
      else {
        echo "Incorrect password. Please return and log in again."
        break;
      }
    }
  }
  i++;
}


fclose($myFile);

echo "Username already in use. Please return and try another username."

?>

</body>
</html>
