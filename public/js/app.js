var socket = io();
socket.on('connect', function(){
	console.log('Connected to socket.io');
});

socket.on('message', function(message){
	console.log(message.text);
});