'use strict';

const youtube = new Dopamine('youtube.com', 'dopamine', () => {
    if ($('#toggle').getAttribute('aria-selected') == 'true') {
        $('#toggleButton').click();
    }
});

const registerDopamine = [
    youtube
];