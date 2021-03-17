document.body.dataset.clipboardhelperinstalled = 1;
let myPort = browser.runtime.connect({name:"port-from-cs"});

myPort.onMessage.addListener((message) => {
    window.postMessage({type: 'CLIPBOARD_CONTENT', content: message.content}, '*')
});

window.addEventListener("message", (event) => {
    if (event.source != window) {
        return;
    }
        
    if (event.data.type && (event.data.type == "REQUEST_CLIPBOARD_CONTENT")) {
        myPort.postMessage({type: 'REQUEST_CLIPBOARD_CONTENT'});
    }
});

const extensionInterface = {
    tgoctopusClipboardHelperFunction: () => {}
}
window.wrappedJSObject.extensionInterface = cloneInto(extensionInterface, window, {cloneFunctions: true});
  