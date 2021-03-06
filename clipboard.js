document.body.dataset.clipboardhelperinstalled = 1;
const port = browser.runtime.connect({name:"port-from-cs"});

port.onMessage.addListener((message) => {
    window.postMessage({type: 'OCTOPUS:CLIPBOARD_CONTENT', content: message.content}, '*')
});

window.addEventListener("message", (event) => {
    if (event.source != window) {
        return;
    }
    if (event.data.type && (event.data.type === "OCTOPUS:REQUEST_CLIPBOARD_CONTENT")) {
        port.postMessage({type: 'OCTOPUS:REQUEST_CLIPBOARD_CONTENT'});
    }
});
