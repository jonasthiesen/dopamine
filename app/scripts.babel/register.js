'use strict';

const youtube = new Dopamine('https://www.youtube.com/*', 'dopamine', () => {
    if ($('#toggle').getAttribute('aria-selected') == 'true') {
        $('#toggleButton').click();
    }
});

const registerDopamine = [
    youtube
];