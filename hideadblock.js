// ==UserScript==
// Created by Bryan Pakulski
// @name        Hotmail-hideAdBlock
// @namespace   default
// @description Hides the "Adblocker detected" in outlook.com
// @exclude     https://outlook.office365*
// @include     https://outlook.live*
// @version     1.5.0
// @grant       none
// ==/UserScript==

var premium_bar = '_3ULF2TRi4jsI2kVaIoieka'; // On bottom left
var adblocking = '_1_ag99JsBHxI6S4FP5ayPv'; // On right hand side

// On page load run the function
window.addEventListener(
  'DOMNodeInserted',
  function (e)
  {

    // Bottom left "Get premium bar"
    var div_hide2 = document.getElementsByClassName(premium_bar);

    // Get the div that holds the adblocking content
    var div_hide = document.getElementsByClassName(adblocking);

    // Iterate through our elements and hide them
    for (var i = 0; i < div_hide.length; i++)
    {
      div_hide[i].style.visibility = "hidden";
      div_hide[i].style.width = "0px";
    }

    for (var i = 0; i < div_hide2.length; i++)
    {
      div_hide2[i].style.visibility = "hidden";
      div_hide2[i].style.height = "0px";
      div_hide2[i].style.padding = "0px";
    }

}, false);
