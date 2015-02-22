/**
 * @file
 * Injected as content script.
 */

/**
 *
 */
console.log("content script injected");

/**
 *
 */
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	if (message.action == "getSelectedText") {
		var selected = window.getSelection().toString();

		var response = {
			action: "getSelectedText",
			selectedText: selected
		}
		
		sendResponse(response);
	}
});
