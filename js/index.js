window.addEventListener("message", handleReceivedMessage, false);
console.log(window.location.origin)
var buttonFromParent = document.getElementById('buttonFromParent');
var WINDOW_ORIGIN = window.location.origin;

function handleReceivedMessage(_e) {
	try {
		if(_e.origin != WINDOW_ORIGIN) {
			return;
		}
		console.log(_e.data);
		var messageTxt = document.createElement('div');
		messageTxt.innerText =  _e.data;
		document.getElementById('receivedMessageParent').appendChild(messageTxt);

	} catch(err){ 
		console.log('handleReceivedMessage: ' + err);
	}
}

function sendMessageToChildFrame(_e) {
	try{
		var iframe = document.getElementById('iframe').contentWindow;
		iframe.postMessage("test message from parent", WINDOW_ORIGIN)
	} catch(err) {
		console.log('sendMessageToParentFrame: ' + err);
	}
}

buttonFromParent.onclick = sendMessageToChildFrame;

