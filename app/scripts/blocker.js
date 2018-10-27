'use strict';

var blacklist = ['youtube.com', 'facebook.com', 'reddit.com', 'linkedin.com', 'twitter.com'];

var stylesheet = 'blocker';

var blockBlacklistedWebsites = function blockBlacklistedWebsites() {
    if (!blacklist.filter(function (website) {
        return location.href.includes(website);
    }).length) {
        return;
    }

    var path = './styles/' + stylesheet + '.css';

    var link = document.createElement('link');
    link.href = chrome.runtime.getURL(path);
    link.rel = 'stylesheet';
    link.id = stylesheet;

    document.getElementsByTagName('head')[0].appendChild(link);
};

var unblockBlacklistedWebsites = function unblockBlacklistedWebsites() {
    var element = $('#' + stylesheet);

    if (element != null) {
        element.remove();
    }
};