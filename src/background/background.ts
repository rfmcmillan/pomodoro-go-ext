// TODO: background script
chrome.runtime.onInstalled.addListener(() => {
  // TODO: on installed function
})

chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.create({
    url: 'https://pomodoro-go-1.herokuapp.com'
  });
})
