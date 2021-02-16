let brojac = 0;

function dodajElement() {
	let input = document.getElementById('naziv');
	let lista = document.getElementById('lista');;

	var li = document.createElement('li');
	li.appendChild(document.createTextNode(input.value));
	lista.appendChild(li);

	brojac++;
	azurirajBrojac();
};

function obrisiSve() {
	document.getElementById("lista").innerHTML = "";
	brojac=0;
	azurirajBrojac();
};

function azurirajBrojac() {
	document.getElementById('kolicina').innerHTML = brojac;
}