function sendComplaint(ele) {
 	document.getElementById(ele).innerHTML = "Message received.";
	document.getElementById(ele).disabled = 'true';
	document.getElementById(ele).display = 'none';
	document.removeChild(document.getElementById(ele));
}

function deletThis() {
	document.innerHTML = "You Fool!";
}
