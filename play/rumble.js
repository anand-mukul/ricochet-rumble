console.log("I am rumble.js");

document.addEventListener("DOMContentLoaded", function() {
    var urlParams = new URLSearchParams(window.location.search);
    var mode = urlParams.get('mode');

    if (mode !== null && (mode === "friend" || mode === "bot")) {
        loadScript(mode === "friend" ? "/play/js/withFriend.js" : "/play/js/withBot.js");
    } else {
        console.error("Invalid or missing mode parameter in URL.");
        window.location.href = "/play/invalidMode.html"; 
    }

    function loadScript(scriptName) {
        var script = document.createElement("script");
        script.src = scriptName;
        script.onload = function() {
        };
        script.onerror = function() {
            console.error("Failed to load! Please try again.");
        };
        document.body.appendChild(script);
    }
});
