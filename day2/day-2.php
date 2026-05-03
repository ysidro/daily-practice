<?php

function formatPrice($price)
{

	if(!is_numeric($price) || $price < 0){

		return 'Invalid price';
	
	}

	$price = number_format((float) $price, 2, '.', ',');

	return '$' . $price;

}

echo formatPrice(45000);

?>