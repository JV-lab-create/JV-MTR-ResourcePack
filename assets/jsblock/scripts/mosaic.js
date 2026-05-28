include(Resources.id("jsblock:scripts/pids_util.js"));

const HEADER_HEIGHT = 13;



function create(ctx, state, pids) {
    // Your custom logic here...
}


function render(ctx, state, pids) {
    // Background Image
    Texture.create("Background")
        .texture("jsblock:textures/mosaic/dune.png")
        .size(pids.width, pids.height)
        .draw(ctx);

    Texture.create("Cross")
        .texture("mtr:textures/block/sign/cross.png")
        .size(pids.width, pids.height)
        .draw(ctx);

    // Time
    Text.create("Clock") 
        .text(PIDSUtil.formatTime(MinecraftClient.worldDayTime(), true))
        .color(0xFFFFFF)
        .pos(pids.width - 5, 2)
        .scale(0.9)
        .rightAlign()
        .draw(ctx);

   let firstRowY = HEADER_HEIGHT // + ( i * 16.75);
   let secondRowY = HEADER_HEIGHT + ( 16.75);
   let thirdRowY = HEADER_HEIGHT + ( 2 * 16.75);
   let fourthRowY = HEADER_HEIGHT + (3 * 16.75);
   let arrival = pids.arrivals().get(1);

}

function dispose(ctx, state, pids) {
    // Your custom logic here...
}