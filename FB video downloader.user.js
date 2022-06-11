// ==UserScript==
// @name         FB video downloader
// @namespace    https://rushi.ch/fb-video-downloader
// @version      0.1
// @description  An easy and light weight script to use basic html feature and enable video download.
// @author       rushi__chavan
// @include     http://*facebook*
// @include     https://*facebook*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log('adding');
    document.querySelector('#screen-root').addEventListener('click', function(){
    console.log('hey');
    window.setTimeout(
     function() {
        console.log('doing');
         document.querySelectorAll('video').forEach(v => {
            v.setAttribute('controlslist','download');
        });
        console.log('done');
     }, 2000);
    console.log('bye');
});
console.log('added');
})();
function callme() {
    console.log('Hello there !!!');
}