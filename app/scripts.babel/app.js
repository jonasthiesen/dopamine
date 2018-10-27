'use strict';

/**
 * Listen for changes in the mode
 */
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    handleMode(request.mode);
});

/**
 * Get the current mode from the storage
 */
chrome.runtime.sendMessage({method: 'mode'}, response => {
    handleMode(response.mode);
});

/**
 * Call the right method depending on what mode is currently active
 * @param {string} mode 
 */
function handleMode(mode) {

    switch(mode) {
        case 'off':
            registerDopamine.forEach(dopamine => dopamine.withdraw());
            unblockBlacklistedWebsites();

            break;
        case 'dopamine':
            unblockBlacklistedWebsites();
            registerDopamine.forEach(dopamine => dopamine.inject());

            break;
        case 'block':
            registerDopamine.forEach(dopamine => dopamine.withdraw());
            blockBlacklistedWebsites();

            break;
    }
}