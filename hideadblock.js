// ==UserScript==
// Created by Bryan Pakulski
// @name        Hotmail-hideAdBlock
// @namespace   default
// @description Hides the "Adblocker detected" in outlook.com
// @include     https://outlook*
// @version     1.1.1
// @grant       none
// ==/UserScript==

// On page load run the function
window.addEventListener( 
  'DOMNodeInserted', 
  function (e)
  { 
    
    // Bottom left "Get premium bar"
    var div_hide2 = document.getElementsByClassName('_n_05');
    
    // Get the div that holds the adblocking content
    var div_hide = document.getElementsByClassName('_n_h');

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
    var div_hide3 = document.getElementsByClassName('_n_W4 _n_Z4');
    for (var i = 0; i < div_hide3.length; i++)
    {
      div_hide3[i].style.bottom = "60px";
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
