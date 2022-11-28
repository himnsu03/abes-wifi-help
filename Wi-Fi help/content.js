chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        try {
            document.getElementById("username").value = request.name;
            document.getElementById("password").value = request.email;
             
            sendResponse({status: "Success!"});
        } catch (error) {
            console.log(error)
            sendResponse({status: "Exception occurred!"});
        }
    }
);