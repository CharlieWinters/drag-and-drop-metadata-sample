const { board } = window.miro;

async function init() {
  board.ui.on("icon:click", async () => {
    await board.ui.openPanel({ url: "app.html" });
  });

  board.ui.on('selection:update', async (event) => {
    console.log('Subscribed to selection update event', event);

   

    if(event.items.length == 1){
      const selectedItems = event.items;
      const firstItem = await selectedItems[0];
      const firstItemMetadata = await firstItem.getMetadata("linkData");
      if (firstItemMetadata){
        await board.ui.openModal({ url: firstItemMetadata.linkUrl});
      }
    }
  

   
  });
}

// Initialize board
init();

export {};
