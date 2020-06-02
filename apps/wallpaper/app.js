let wallpaper = new App(
    "wallpaper",             // id
    "Wallpaper",             // name 
    "https://lh3.googleusercontent.com/proxy/AN8uqnG-affU88HPt5aFla4eFIB3OojAx_0D2QTW4hQ5mo24JacDjbE-VKsHK6MT-z-1nz_1Vblws49HpnLXEJB-Krh80RjXvuymqXuAP5tNwJE-9CNfXg",             // icon
    200,            // minWidth
    120,            // minHeight
    () => {},       // onLoad
    () => {
        $('form#wpurl').submit((event) => {
            event.preventDefault();
            ws.setItem("wallpaperurl", $('input#wpurl')[0].value)
            updateWallpaper();
        })
        $('button#wpclear').click(() => {
            ws.setItem("wallpaperurl", '0')
            updateWallpaper();
        })
    },       // onOpen
    () => {},       // onClose
    () => {},       // onMinimize
    `
    <p style="margin-top: 0;">Wallpaper URL: </p>
    <form id="wpurl">
        <input type="url" id="wpurl" maxlength="150">
        <button>Set</button>
    </form>
        <button id="wpclear">Clear</button>
    `              // windowContent
);