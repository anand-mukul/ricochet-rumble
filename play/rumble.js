document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get('mode');

    if (mode && (mode === "friend" || mode === "bot")) {
        loadScript(mode === "friend" ? "/play/js/withFriend.js" : "/play/js/withBot.js");
    } else {
        window.location.href = "/play/invalidMode.html";
    }

    function loadScript(scriptName) {
        const script = document.createElement("script");
        script.src = scriptName;
        document.body.appendChild(script);
    }
});
