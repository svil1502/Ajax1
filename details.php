<?php

$name = $_POST['fname'];
$rno = $_POST['id'];
$link = mysqli_connect( 'localhost','root','02091502','school');
$q="SELECT * FROM students where rno=$rno and name='".$name."'";
$query = mysqli_query( $link,$q);
$array = mysqli_fetch_array( $query );
echo $array['address'];

?>
