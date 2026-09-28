function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime(); m
setInterval(function () {
	showTime();
}, 1000);
