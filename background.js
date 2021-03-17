browser.runtime.onConnect.addListener(p => {
    p.onMessage.addListener((message) => {
        if (message.type === 'REQUEST_CLIPBOARD_CONTENT') {
            navigator.clipboard.readText().then(content => {
                p.postMessage({type: 'CLIPBOARD_CONTENT', content});
            })
        }
    });
});