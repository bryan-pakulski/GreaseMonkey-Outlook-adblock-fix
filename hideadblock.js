// ==UserScript==
// Created by Bryan Pakulski
// @name        Hotmail-hideAdBlock
// @namespace   default
// @description Hides the "Adblocker detected" in outlook.com
// @include     https://outlook*
// @version     1
// @grant       none
// ==/UserScript==

// On page load run the function
window.addEventListener( 
  'DOMNodeInserted', 
  function (e)
  { 
   
    // Get the div that holds the adblocking content
    var div_hide = document.getElementsByClassName('_n_i');

    // Iterate through our elements and hide them
    for (var i = 0; i < div_hide.length; i++)
    {
      div_hide[i].style.visibility = "hidden";
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
