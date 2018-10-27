'use strict';

var youtube = new Dopamine('https://www.youtube.com/*', 'dopamine', function () {
    if ($('#toggle').getAttribute('aria-selected') == 'true') {
        $('#toggleButton').click();
    }
});

var registerDopamine = [youtube];