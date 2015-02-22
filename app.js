/**
 * @file
 * Background script.
 */

chrome.runtime.sendMessage({popupOpen: true});

window.onload = function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  	// Send a message if the extension icon became active.
    chrome.tabs.sendMessage(tabs[0].id, {action: "getSelectedText"}, function(response) {
      // Set the selected text.	
      var selectedeText = document.getElementById("selected-text");
      selectedeText.innerHTML = response.selectedText;
    });
  });
}
