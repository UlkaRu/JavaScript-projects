var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var arr3 = ['a', 'b', 'c', 'd', 'e', 'f'];
var arr4 = ['C', 'D', 'E', 'F'];
var arr5 = ['%', '&', '*', '!'];


document.getElementById('param1').oninput = function (){
	// console.log(this.value);
	document.getElementById('password-length').innerHTML = this.value;
}

generatePass();

document.getElementById('generator').onclick = generatePass;

function generatePass() {
	var result = [];
	if (document.getElementById('param2').checked) {
		result = result.concat(arr2);
	}
	if (document.getElementById('param3').checked) {
		result = result.concat(arr3);
	}
	if (document.getElementById('param4').checked) {
		result = result.concat(arr4);
	}
	if (document.getElementById('param5').checked) {
		result = result.concat(arr5);
	}
	result.sort(compareRandom);
	// console.log(result);
	document.getElementById('out').innerHTML = '';
	for (var k = 0; k < 6; k++) {
		var pass = '';
		var passLength = parseInt(document.getElementById('param1').value);
		for (var i = 0; i < passLength; i++) {
			pass += result[randomInteger(0, result.length - 1)];
		}
		document.getElementById('out').innerHTML += '<p>' + pass + '</p>';
	}
}

function compareRandom(a, b) {
	return Math.random() - 0.5;
}

function randomInteger(min, max) {
	var rand = min - 0.5 + Math.random() * (max - min + 1)
	rand = Math.round(rand);
	return rand;
}








