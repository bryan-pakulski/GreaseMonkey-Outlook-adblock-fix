// ==UserScript==
// Created by Bryan Pakulski
// @name        Hotmail-hideAdBlock
// @namespace   default
// @description Hides the "Adblocker detected" in outlook.com
// @exclude     https://outlook.office365*
// @include     https://outlook.live*
// @version     1.2.0
// @grant       none
// ==/UserScript==

var premium_bar = '_n_15';
var adblocking = '_n_h';
var blank_space = '_n_X4 _n_05';

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
    }

    for (var i = 0; i < div_hide2.length; i++)
    {
      div_hide2[i].style.visibility = "hidden";
      div_hide2[i].style.height = "0px";
      div_hide2[i].style.padding = "0px";
    }


    // Minimise blank space from premium bar
    var div_hide3 = document.getElementsByClassName(blank_space);
    for (var i = 0; i < div_hide3.length; i++)
    {
      div_hide3[i].style.bottom = "45px";
      div_hide3[i].style.zIndex = "100";
    }

    // Get rid of the empty space left behind
    var root = document.getElementById('primaryContainer');
    var div_resize = root.children;

    for (var i = 0; i < div_resize.length; i++)
    {
      if (div_resize[i].hasAttribute("style"))
      {
        div_resize[i].style.right = "0px";
      }
    }


}, false);
