'use strict';

/**
 * Load buttons
 */

var off = document.querySelector('#option-off');
var dopamine = document.querySelector('#option-dopamine');
var block = document.querySelector('#option-block');

/**
 * Sets the correct styling for the buttons when the popup is loaded
 */
getMode(function (mode) {
    switch (mode) {
        case 'off':
            buttonSelected(off);
            break;
        case 'dopamine':
            buttonSelected(dopamine);
            break;
        case 'block':
            buttonSelected(block);
            break;
    }
});

/**
 * Set the mode to off in the storage and broadcast message to the content script
 */
off.onclick = function () {
    setMode('off', function () {
        broadcastMode('off');

        buttonSelected(off);
        [dopamine, block].forEach(function (x) {
            return buttonNotSelected(x);
        });
    });
};

/**
 * Set the mode to dopamine in the storage and broadcast message to the content script
 */
dopamine.onclick = function () {
    setMode('dopamine', function () {
        broadcastMode('dopamine');

        // Sets the player mode to wide
        chrome.cookies.set({
            'url': 'https://www.youtube.com/*',
            'name': 'wide',
            'value': '1',
            'domain': '.youtube.com'
        });

        buttonSelected(dopamine);
        [off, block].forEach(function (x) {
            return buttonNotSelected(x);
        });
    });
};

/**
 * Set the mode to block in the storage and broadcast message to the content script
 */
block.onclick = function () {
    setMode('block', function () {
        broadcastMode('block');

        buttonSelected(block);
        [off, dopamine].forEach(function (x) {
            return buttonNotSelected(x);
        });
    });
};

/**
 * Set the mode in the storage
 * @param {string} value 
 * @param {function} callback 
 */
function setMode(value, callback) {
    chrome.storage.sync.set({ 'mode': value }, callback);
}

/**
 * Get the current mode from the storage
 * @param {function} callback 
 */
function getMode(callback) {
    chrome.storage.sync.get(function (result) {
        return callback(result.mode);
    });
}

/**
 * Broadcast the mode to the content script
 * @param {string} msg 
 */
function broadcastMode(msg) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { mode: msg });
    });
}

/**
 * Sets the styling for the button when it is selected
 * @param {Element} button 
 */
function buttonSelected(button) {
    button.classList.remove('bg-blue', 'text-white', 'hover:bg-blue-dark');
    button.classList.add('bg-grey', 'text-black', 'cursor-not-allowed');
}

/**
 * Sets the styling for the button when it is not selected
 * @param {Element} button 
 */
function buttonNotSelected(button) {
    button.classList.remove('bg-grey', 'text-black', 'cursor-not-allowed');
    button.classList.add('bg-blue', 'text-white', 'hover:bg-blue-dark');
}