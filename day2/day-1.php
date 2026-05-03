<?php

function get_presentation_info($name,$role)
{
	$name = trim($name);
	$role = trim($role);

	if(empty($name) || empty($role)){
		return 'Name and role are required';
	}

	return 'Hi, My name is '. $name  .' and I work as a '. $role .' ';

}

echo get_presentation_info('Ysidro Almonte','Web Developer');

?>