// ==UserScript==
// @name         Remove P5Play docs login
// @namespace    http://tampermonkey.net/
// @version      2025-05-07
// @description  Stop p5play asking you to log in
// @author       Obelous
// @match        https://p5play.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=p5play.org
// @grant        none
// ==/UserScript==

(function() {
    setTimeout(() => {
    	document.querySelector('.unauth').remove()
    }, 100);
    document.body.style.overflowY = "scroll";
})();
