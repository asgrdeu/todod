
browser.contextMenus.create(
    {
        id: "add",
        title: "Add to Todod",
        contexts: ["selection"],
    },
    onCreated
);

browser.contextMenus.onClicked.addListener((info, tab) => {
    switch (info.menuItemId) {
        case "add":
            browser.storage.local.get("db")
                .then(item => {
                    if (item.db == undefined) {
                        let db = { list: [ { words: [] } ] };
                        db.list[0].words.push(info.selectionText);
                        browser.storage.local.set({db});
                    } else {
                        item.db.list[0].words.push(info.selectionText);
                        browser.storage.local.set({db: item.db});
                    }
                }, error => console.log(error));
            break;
        // ...
    }
});

function onCreated() {
    // ...
}