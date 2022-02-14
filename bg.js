chrome.omnibox.onInputEntered.addListener((keyword) => {
  const url = `https://www.zhihu.com/search?q=${encodeURIComponent(keyword)}`;
  chrome.tabs.create({ url });
});
