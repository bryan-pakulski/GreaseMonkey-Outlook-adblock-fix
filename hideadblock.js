// ==UserScript==
// Created by Bryan Pakulski
// @name        Hotmail-hideAdBlock
// @namespace   default
// @description Hides the "Adblocker detected" in outlook.com
// @exclude     https://outlook.office365*
// @include     https://outlook.live*
// @version     2.0.0
// @grant       none
// ==/UserScript==

var adblocking = 'GssDD'; // On right hand side

let max_retries = 50
let retries = 0;
let success = false;

const intervalID = setInterval(_ => {
    // Get the div that holds the adblocking content
    var div_hide = document.getElementsByClassName(adblocking);

    if(div_hide.length >= 2) {
      // Iterate through our elements and hide them
      for (var i = 0; i < div_hide.length; i++)
      {
        div_hide[i].style.visibility = "hidden";
        div_hide[i].style.width = "0px";
      }
      
      success = true;
    }

    retries++;
  
    if(success) {
      clearInterval(intervalID);
      console.log("Cleaned up adblock elements in ", retries, " attempts");
    }
    
  if (retries == max_retries) {
      clearInterval(intervalID);
    	console.log("Max retries hit, adblock elements not found!", adblocking); 
    }
}, 100);
