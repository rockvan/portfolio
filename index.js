/*** JSCARD ***/
document.getElementById('btn').addEventListener('click', function () {
	document.getElementById('jscard').classList.toggle('bg-dark');
	document.getElementById('jscard').classList.toggle('bg-danger');
	document.getElementById('jscard').classList.toggle('text-dark');
	var txt =
		'Testing Javascript to add, remove, toggle CSS classes and add new text on click event';
	var print_txt = txt.valueOf();
	document.getElementById('jspara').innerHTML = print_txt;
	document.getElementById('btn').classList.toggle('btn-outline-primary');
	document.getElementById('btn').classList.toggle('btn-outline-warning');
	document.getElementById('jsbar').classList.remove('bg-danger');
	document.getElementById('jsbar').classList.add('bg-warning');
	document.getElementById('jsbar').classList.add('text-dark');
	document.getElementById('jsbar').style.width = '45%';
	/**Badge**/
	var bdg = ' Javascript';
	var add_bdg = bdg.valueOf();
	document.getElementById('badge').innerHTML = add_bdg;
	document.getElementById('badge').classList.add('fab');
	document.getElementById('badge').classList.add('fa-js');
	document.getElementById('badge').classList.add('badge');
	document.getElementById('badge').classList.add('rounded-pill');
	document.getElementById('badge').classList.add('bg-warning');
	document.getElementById('badge').classList.add('animate__animated');
	document.getElementById('badge').classList.add('animate__jackInTheBox');
	document.getElementById('badge').classList.add('animate__delay-1s');
});
