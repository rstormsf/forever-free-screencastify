"use strict";!function(e,s){function t(s){if(s.origin===n&&e===s.source){var t=s.data;switch(t.type){case"isInstalled":e.postMessage({type:"isInstalledResult",data:a.getManifest().version},n);break;case"launchApp":a.sendMessage("bg:launchApp");break;case"updateLicense":a.sendMessage("bg:updateLicense");break;case"getLicenseInfo":a.sendMessage("bg:getLicenseInfo",function(s){e.postMessage({type:"getLicenseInfoResult",data:s},n)});break;case"getSignInToken":a.sendMessage("bg:getSignInToken",function(s){a.lastError||!s?(console.debug(a.lastError),e.postMessage({type:"getSignInTokenResult",data:!1},n)):e.postMessage({type:"getSignInTokenResult",data:s},n)});break;case"oauth2AuthResult":a.sendMessage({type:"oauth2AuthResult",data:t.data})}}}var a=chrome.runtime,n=e.location.origin;e.addEventListener("message",t,!1)}(window,document);