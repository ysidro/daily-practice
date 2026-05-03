
function get_presentation_info(name,role)
{

	var name = name.trim();
	var role = role.trim();

	if(!name || !role){
		
		return 'Name and role are required';
	}

	return `Hi, My name is ${name} and I work as a ${role}`;

}

console.log(get_presentation_info('Ysidro Almonte','Web Developer'));
