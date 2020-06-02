let fun = new App(
    "fun", 
    "CSGO thing", 
    "https://cdn.discordapp.com/attachments/650189211273789440/716188468174258176/tumblr_mjok1bhPIB1rfjowdo1_500.gif",
    200,
    120,
    () => {
    },
    () => {
        $('#funstuffpreload p').text("Connecting...");
        $.ajax({
            type: "get",
            timeout: 5000,
            url: "https://nieahax.pagekite.me/hi",
            success: function (response) {
                if(response == "ok"){
                    $('#funstuffpreload').delay(200).fadeOut(200);
                }
            }
        })
        .fail(function(msg){
            $('#funstuffpreload p').text("Connection failed!");
        });
    },
    () => {
    },
    () => {
        $('#funstuffpreload').show();
    },
    `
    <div id="funstuffpreload" class="winpreload">
        <p>Connecting...</p>
    </div>
    <p style="margin-top: 0;">Clantag: </p>
    <form id="clantag">
        <input type="text" id="clantag" maxlength="15">
        <button>Set</button>
    </form>
    <p>Chat: </p>
    <form id="chat">
        <input type="text" id="chat" maxlength="126">
        <button>Send</button>
    </form>
    <p id="funstuffmessage" style="text-align: center;"></p>
`
);