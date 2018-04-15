'use strict';

/**
 * Listen for when the content script wants to fetch the current mode and respond
 */
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.method == 'mode') getMode(mode => sendResponse(mode));
});

/**
 * Dispatch a message with the mode when tab has loaded
 */
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    getMode(mode => {
        chrome.tabs.sendMessage(tabId, {mode: mode});
    });
});

/**
 * Get the current mode from the storage
 * @param {function} callback 
 */
function getMode(callback) {
    chrome.storage.sync.get(result => {
        callback(result.mode);
    });
}