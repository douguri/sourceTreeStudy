<?php
require 'vendor/autoload.php';
use Abraham\TwitterOAuth\TwitterOAuth;
require_once('config.php');

$consumerKey = "bCGBXS9x3bna0KI8dZ4t0YgIG";
$consumerSecret = "6kW3WfSM6TrkJTF8WYqWfJ3XD3vXTiXuYXuW13K8XSGrjTfI5B";
$accessToken = "855700274-8W2CuvSdWAw8a4AgePJPGULFdkrvr8IAsdAJ9XAF";
$accessTokenSecret = "6XbnA3WgowRnUo9gtex3QzkRBkzW6Zhl5FRrrpSzvyG9v";

$connection = new TwitterOAuth($consumerKey, $consumerSecret, $accessToken, $accessTokenSecret);


$result = $connection->get("search/tweets", array("q" => "twitter"));

?>
