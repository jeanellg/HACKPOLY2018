<!-- Action page for the sign up in login.html -->

<html>
<body>

<?php
$myFile = fopen('users.txt','r') or die("Users don't exist");

$username = $_POST["username"];
$password = $_POST["password"];

$users = array();

//check Username
$check = true;
$i = 1;
while (!feof($myFile))
{
  $line = fgets($myFile)
  $line = str_replace(array("\n", "\r"), '', $line);
  if (i%5 == 1)
  {
    if (username == line)
    {
      $check = false;
    }
  }
  i++;
}

fclose($myFile);

if ($check)
{
  header("Location: userhome.html");
  $myFile = fopen(users.txt, 'x');
  $username =

}
else
{
  echo "Username already in use. Please return and try another username."
}
?>

</body>
</html>
