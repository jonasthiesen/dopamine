'use strict';

/**
 * Listen for changes in the mode
 */

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    handleMode(request.mode);
});

/**
 * Get the current mode from the storage
 */
chrome.runtime.sendMessage({ method: 'mode' }, function (reponse) {
    handleMode(response.mode);
});

/**
 * Call the right method depending on what mode is currently active
 * @param {string} mode 
 */
function handleMode(mode) {
    switch (mode) {
        case 'off':
            registerDopamine.forEach(function (dopamine) {
                return dopamine.withdraw();
            });

            break;
        case 'dopamine':
            registerDopamine.forEach(function (dopamine) {
                return dopamine.inject();
            });

            break;
        case 'block':
            blockMode();
            break;
    }
}