'use strict';

/**
 * Listen for when the content script wants to fetch the current mode and respond
 */

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.method == 'mode') getMode(function (mode) {
        return sendResponse(mode);
    });
});

/**
 * Dispatch a message with the mode when tab has loaded
 */
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    getMode(function (mode) {
        chrome.tabs.sendMessage(tabId, { mode: mode });
    });
});

/**
 * Get the current mode from the storage
 * @param {function} callback 
 */
function getMode(callback) {
    chrome.storage.sync.get(function (result) {
        callback(result.mode);
    });
}