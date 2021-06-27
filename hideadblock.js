// ==UserScript==
// Created by Bryan Pakulski
// @name        Hotmail-hideAdBlock
// @namespace   default
// @description Hides the "Adblocker detected" in outlook.com
// @exclude     https://outlook.office365*
// @include     https://outlook.live*
// @version     1.9.0
// @grant       none
// ==/UserScript==

var premium_bar = '_28ithXDZzMqSN0YAG2rCVn'; // On bottom left
var adblocking = '_1fti_QgAzqGWPGlqh_FSvI'; // On right hand side

// On page load run the function
window.addEventListener(
  'DOMNodeInserted',
  function (e)
  {

    // Get the div that holds the adblocking content
    var div_hide = document.getElementsByClassName(adblocking);

    // Bottom left "Get premium bar"
    var div_hide2 = document.getElementsByClassName(premium_bar);

    // Iterate through our elements and hide them
    for (var i = 0; i < div_hide.length; i++)
    {
      div_hide[i].style.visibility = "hidden";
      div_hide[i].style.width = "0px";
    }

    // Dirty delete, would be nicer with jquery
    div_hide2[0].parentNode.removeChild(div_hide2[0]);

}, false);
