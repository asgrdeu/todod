browser.contextMenus.create(
    {
        id: "add",
        title: "Add to Derictionary " + window.getSelection().toString(),
        contexts: ["selection"],
    },
    onCreated
);

browser.contextMenus.onClicked.addListener((info, tab) => {
    switch (info.menuItemId) {
        case "add":
            console.log(info.selectionText);
            break;
        // ...
    }
});

function onCreated() {
    // ...
}

// browser.browserAction.onClicked.addListener(handleClick);

// function handleClick(tab) {
//     console.log("hello");
// }

// function getActiveTab() {
//     return browser.tabs.query({active: true, currentWindow: true});
//   }
  
//   function cookieUpdate() {
//     getActiveTab().then((tabs) => {
//       // get any previously set cookie for the current tab 
//       let gettingCookies = browser.cookies.get({
//         url: tabs[0].url,
//         name: "bgpicker"
//       });
//       gettingCookies.then((cookie) => {
//         if (cookie) {
//           let cookieVal = JSON.parse(cookie.value);
//           browser.tabs.sendMessage(tabs[0].id, {image: cookieVal.image});
//           browser.tabs.sendMessage(tabs[0].id, {color: cookieVal.color});
//         }
//       });
//     }); 
//   }
  
//   // update when the tab is updated
//   browser.tabs.onUpdated.addListener(cookieUpdate);
//   // update when the tab is activated
//   browser.tabs.onActivated.addListener(cookieUpdate);