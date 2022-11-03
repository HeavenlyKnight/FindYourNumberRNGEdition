var video = document.createElement("video");
video.setAttribute("src", "goblin.mp4");

var huh = new Audio ("audio/huh.mp3");
var boom = new Audio ("audio/boom.mp3");
var sheesh = new Audio ("audio/sheesh.mp3");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
button.addEventListener("mouseover", function() {
    huh.currentTime = 0;
	huh.play();
  });
  button.addEventListener("click", function() {
    boom.currentTime = 0;
	huh.currentTime = 1;
	boom.play();
  });
});

document.getElementById('kodeNegara').onclick = function () {
  x = Math.floor(Math.random() * 998) + 1;
  document.getElementById('xlabel').innerHTML = x;
};

document.getElementById('empatpertama').onclick = function () {
	y = Math.floor(Math.random() * 9999);
	document.getElementById('ylabel').innerHTML = y;
};

document.getElementById('empatkedua').onclick = function () {
	z = Math.floor(Math.random() * 9999);
	document.getElementById('zlabel').innerHTML = z;
};

document.getElementById('empatketiga').onclick = function () {
	aa = Math.floor(Math.random() * 9999);
	document.getElementById('aalabel').innerHTML = aa;
};

document.getElementById('semua').onclick = function () {
	x = Math.floor(Math.random() * 998) + 1;
	document.getElementById('xlabel').innerHTML = x;
	y = Math.floor(Math.random() * 9999);
	document.getElementById('ylabel').innerHTML = y;
	z = Math.floor(Math.random() * 9999);
	document.getElementById('zlabel').innerHTML = z;
	aa = Math.floor(Math.random() * 9999);
	document.getElementById('aalabel').innerHTML = aa;
	sheesh.currentTime = 0;
	sheesh.play();
};