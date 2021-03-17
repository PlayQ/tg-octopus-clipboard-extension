browser.runtime.onConnect.addListener(p => {
    p.onMessage.addListener((message) => {
        if (message.type === 'OCTOPUS:REQUEST_CLIPBOARD_CONTENT') {
            navigator.clipboard.readText().then(content => {
                p.postMessage({type: 'OCTOPUS:CLIPBOARD_CONTENT', content});
            })
        }
    });
});
