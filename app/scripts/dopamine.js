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
chrome.runtime.sendMessage({method: "mode"}, reponse => {
    handleMode(response.mode);
});

/**
 * 
 * @param {string} mode 
 */
function handleMode(mode) {
    switch(mode) {
        case "off":
            offMode();
            break;
        case "dopamine":
            dopamineMode();
            break;
        case "block":
            blockMode();
            break;
    }
}

/**
 * Change the relevant elements in the DOM related to when the mode is set to off
 */
function offMode() {
    document.querySelector("#related").classList.remove("hidden");
    document.querySelector("#comments").classList.remove("hidden");
    document.querySelector(".ytp-endscreen-content").classList.remove("hidden");
}

/**
 * Change the relevant elements in the DOM related to when the mode is set to dopamine
 */
function dopamineMode() {
    document.querySelector("#related").classList.add("hidden");
    document.querySelector("#comments").classList.add("hidden");
    document.querySelector(".ytp-endscreen-content").classList.add("hidden");

    if (document.querySelector("#toggle").getAttribute("aria-selected") == "true") {
        document.querySelector("#toggleButton").click();
    }
}