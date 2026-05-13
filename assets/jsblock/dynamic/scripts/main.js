include("jsblock:dynamic/scripts/util.js");
include("jsblock:dynamic/scripts/settings.js");

const HEADER_HEIGHT = 14;

function create(ctx, state, pids) {
    // Your custom logic here...
}

function render(ctx, state, pids) {
    let arrivalsChecker = pids.arrivals().get(0);
    print("Its your PIDS Silly 🤣🤣")
}

function dispose(ctx, state, pids) {
    // Your custom logic here...
}


/*    Text.create("Custom Text")
            .text("My Custom Text!!")
            .scale(1.25)
            .color(0xFFFFFF)
            .size(pids.width - (5*2), 9)
            .scaleXY()
            .pos(5, rowY)
            .draw(ctx);
    Background(ctx, "no_service.png")

    // This will check if there is even a runing service
    if (arrivalsChecker == null) {
        Background(ctx, "no_service.png")
        Weather(ctx, 97, 1.5, 7);
        Weather(ctx, 5, 0);
        Clock(ctx, pids.width - 5, 2)
    }*/
