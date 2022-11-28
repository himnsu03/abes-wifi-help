document.getElementById("auto-fill").addEventListener("click", () => {
	
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			name: document.getElementById('name').value,
			email: document.getElementById('email').value,
			
		}, function(response) {
			console.log(response.status);
		});
	});
});

document.getElementById("reset-fields").addEventListener("click", () => {
	
	document.getElementById('name').value = '';
	document.getElementById('email').value = '';
	
});


document.getElementById("save").addEventListener("click", () => {
	chrome.storage.sync.set({
		name: document.getElementById('name').value,
		email: document.getElementById('email').value,
		
	}, function() {
		console.log("Saved!");
	});
});

document.getElementById("load").addEventListener("click", () => {
	chrome.storage.sync.get([
		'name',
		'email',
		
	], function(result) {
		document.getElementById('name').value = result.name;
		document.getElementById('email').value = result.email;
		
	});
});
ocument.getElementById("auto-fill").addEventListener("click", () => {
	
	chrome.tabs.query({active: true, currentWindow: true}, function hreffunction() {
		window.location.href="http://192.168.1.254:8090"
		window.location.replace("http://192.168.1.254:8090")
		});
	});

