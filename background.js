browser.contextMenus.create({
  id: "open-csv",
  title: "Open CSV in Iodide",
  contexts: ["all"] 
});


browser.contextMenus.onClicked.addListener(
  async function(info, tab) {
    console.log(info) 
    const file = await fetch(info.linkUrl).then(r => r.text())

    console.log(file)

  }
);

