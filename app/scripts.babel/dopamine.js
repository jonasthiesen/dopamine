'use strict';

class Dopamine {
    /**
     * Construct a dopamine object for a specific site
     * @param {string} url 
     * @param {string} elements 
     * @param {Function} logic 
     */
    constructor(url, stylesheet, logic) {
        this.url = url;
        this.stylesheet = stylesheet;
        this.logic = logic;
    }

    inject() {
        this.injectCSS();
        this.logic();
    }

    withdraw() {
        this.removeCSS();
    }

    injectCSS() {
        const path = './styles/' + this.stylesheet + '.css';
        var link = document.createElement('link');
        link.href = chrome.runtime.getURL(path);
        link.rel = 'stylesheet';
        link.id = this.stylesheet;
        document.getElementsByTagName('head')[0].appendChild(link);
    }

    removeCSS() {
        $('#' + this.stylesheet).remove();
    }
}

const youtube = new Dopamine('https://www.youtube.com/*', 'dopamine', () => {
    if ($('#toggle').getAttribute('aria-selected') == 'true') {
        $('#toggleButton').click();
    }
});

/**
 * Listen for changes in the mode
 */
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    handleMode(request.mode);
});

/**
 * Get the current mode from the storage
 */
chrome.runtime.sendMessage({method: 'mode'}, reponse => {
    handleMode(response.mode);
});

/**
 * Call the right method depending on what mode is currently active
 * @param {string} mode 
 */
function handleMode(mode) {
    switch(mode) {
        case 'off':
            youtube.withdraw();
            break;
        case 'dopamine':
            youtube.inject();
            break;
        case 'block':
            blockMode();
            break;
    }
}