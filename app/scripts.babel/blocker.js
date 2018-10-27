'use strict';

const blacklist = [
    'youtube.com',
    'facebook.com',
    'reddit.com',
    'linkedin.com',
    'twitter.com',
];

const stylesheet = 'blocker';

const blockBlacklistedWebsites = () => {
    if (!blacklist.filter(website => location.href.includes(website)).length) {
        return;
    }

    const path = './styles/' + stylesheet + '.css';

    let link = document.createElement('link');
    link.href = chrome.runtime.getURL(path);
    link.rel = 'stylesheet';
    link.id = stylesheet;

    document.getElementsByTagName('head')[0].appendChild(link);
}

const unblockBlacklistedWebsites = () => {
    const element = $('#' + stylesheet);

    if (element != null) {
        element.remove();
    }
}