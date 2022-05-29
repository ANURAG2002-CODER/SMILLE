chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason.search(/install/g) === -1) {
    return;
  }
  chrome.tabs.create({
    url: chrome.extension.getURL('welcome.html'),
    active: true
  });
});
chrome.webNavigation.onCompleted.addListener(function () {
  console.log("csdkbhv")

}, { url: [{ urlMatches: 'https://www.facebook.com' }] });
chrome.scripting.executeScript({
  target: {tabId: id, allFrames: true},
  files: ['content_scripts/cscript.js'],
});