<?php

$myObj->browser  =$_SERVER['HTTP_USER_AGENT']; // get the browser name
$myObj->curr_page=$_SERVER['PHP_SELF'];// get page name
$myObj->ip  =  $_SERVER['REMOTE_ADDR'];   // get the IP address
$myObj->from_page = $_SERVER['HTTP_REFERER'];//  page from which visitor came
$myObj->page=$_SERVER['PHP_SELF'];//get current page

$myJSON = json_encode($myObj);

echo $myJSON;
?>