window.addEventListener("message", handleReceivedMessage, false);

var buttonFromChild = document.getElementById('buttonFromChild');

function handleReceivedMessage(_e) {
	try {
		if(_e.origin != "http://localhost:8080") {
			return
		}
		console.log(_e.data)
		var messageTxt = document.createElement('div')
		messageTxt.innerText =  _e.data;
		document.getElementById('receivedMessageChild').appendChild(messageTxt)

	} catch(err){ 
		console.log('handleReceivedMessage: ' + err)
	}
}

function sendMessageToParentFrame(_e) {
	try{
		window.parent.postMessage("test message from child", "http://localhost:8080")
	} catch(err) {
		console.log('sendMessageToParentFrame: ' + err);
	}
}

buttonFromChild.onclick = sendMessageToParentFrame;

