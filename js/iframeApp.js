window.addEventListener("message", handleReceivedMessage, false);

var buttonFromChild = document.getElementById('buttonFromChild');
var WINDOW_ORIGIN = window.location.origin;

function handleReceivedMessage(_e) {
	try {
		if(_e.origin != WINDOW_ORIGIN) {
			return;
		}
		console.log(_e.data)
		var messageTxt = document.createElement('div');
		messageTxt.innerText =  _e.data;
		document.getElementById('receivedMessageChild').appendChild(messageTxt);

	} catch(err){ 
		console.log('handleReceivedMessage: ' + err);
	}
}

function sendMessageToParentFrame(_e) {
	try{
		window.parent.postMessage("test message from child", WINDOW_ORIGIN);
	} catch(err) {
		console.log('sendMessageToParentFrame: ' + err);
	}
}

buttonFromChild.onclick = sendMessageToParentFrame;

