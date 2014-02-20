<?php

		$cb = $_GET["callback"];
		$response = $cb . "(" . $json . ");";
		echo $response;

?>