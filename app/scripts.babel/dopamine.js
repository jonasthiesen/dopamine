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