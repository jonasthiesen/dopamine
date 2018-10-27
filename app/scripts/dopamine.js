'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dopamine = function () {
    /**
     * Construct a dopamine object for a specific site
     * @param {string} url 
     * @param {string} elements 
     * @param {Function} logic 
     */
    function Dopamine(url, stylesheet, logic) {
        _classCallCheck(this, Dopamine);

        this.url = url;
        this.stylesheet = stylesheet;
        this.logic = logic;
    }

    _createClass(Dopamine, [{
        key: 'inject',
        value: function inject() {
            this.injectCSS();
            this.logic();
        }
    }, {
        key: 'withdraw',
        value: function withdraw() {
            this.removeCSS();
        }
    }, {
        key: 'injectCSS',
        value: function injectCSS() {
            var path = './styles/' + this.stylesheet + '.css';
            var link = document.createElement('link');
            link.href = chrome.runtime.getURL(path);
            link.rel = 'stylesheet';
            link.id = this.stylesheet;
            document.getElementsByTagName('head')[0].appendChild(link);
        }
    }, {
        key: 'removeCSS',
        value: function removeCSS() {
            $('#' + this.stylesheet).remove();
        }
    }]);

    return Dopamine;
}();