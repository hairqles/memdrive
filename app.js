/**
 *
 */

chrome.runtime.sendMessage({popupOpen: true});

window.onload = function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {action: "getSelectedText"}, function(response) {
      var selectedeText = document.getElementById("selected-text");
      selectedeText.innerHTML = response.selectedText;
    });
  });
}
