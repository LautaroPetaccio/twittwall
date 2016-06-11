
function pepe() {
	var pepe = 2;
	return function() {
		pepe += 2;
		return pepe;
	}
}

var jesus = pepe();
console.log(jesus());
console.log(jesus());
console.log(jesus());
var joseph = pepe();
console.log(joseph());
console.log(jesus());
console.log(joseph());
console.log(jesus());