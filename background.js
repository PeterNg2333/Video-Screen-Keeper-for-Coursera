chrome.commands.onCommand.addListener((command) => {
    if (command === "capture") {
      chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.scripting.executeScript({
          target: {tabId: tabs[0].id},
          files: ['content.js']
        });
      });
    }
  });