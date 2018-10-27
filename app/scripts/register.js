'use strict';

var youtube = new Dopamine('youtube.com', 'dopamine', function () {
    if ($('#toggle').getAttribute('aria-selected') == 'true') {
        $('#toggleButton').click();
    }
});

var registerDopamine = [youtube];