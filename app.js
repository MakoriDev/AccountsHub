function sendToWhatsapp(){
	let number = "+254700205302";

	let name = document.getElementById('name').value;
	let email = document.getElementById('subject').value;
	let message = document.getElementById('message').value;

	var url = "https://wa.me/" + number + "?text="
	+ "Name : " +name+ "%0a"
	+ "Subject : " +email+ "%0a"
	+ "Message : " +message+ "%0a%0a";

	window.open(url, '_blank').focus();
}