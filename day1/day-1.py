
def get_presentation_info(name,role):
	name = name.strip()
	role = role.strip()

	if not name or not role:
		return 'Name and role are required';

	return f'Hi, My name is {name.strip()} and I work as a {role.strip()}.'; 


print(get_presentation_info(' Ysidro Almonte ','Web Developer '))