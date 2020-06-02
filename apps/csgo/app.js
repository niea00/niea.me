let csgo = new App(
    "csgo",             // id
    "CSGO Cheats",             // name 
    "https://lookingforclan.com/sites/default/files/styles/icon/public/2018-02/csgo-icon.jpg?itok=QowWchnK",             // icon
    200,            // minWidth
    120,            // minHeight
    () => {},       // onLoad
    () => {
        $('#csgohaxpreload p').text("Connecting...");
        $.ajax({
            type: "get",
            timeout: 5000,
            url: "https://nieahax.pagekite.me/hi",
            success: function (response) {
                if(response == "ok"){
                    $('#csgohaxpreload p').delay(200).text("Retrieving config...");
                    $.ajax({
                        url: "https://nieahax.pagekite.me/cfg",
                        dataType:'text',
                        success: function(data) {
                            $('#csgohaxpreload').delay(200).fadeOut(200);
                        }
                    })
                }
            }
        })
        .fail(function(msg){
            $('#csgohaxpreload p').text("Connection failed!");
        });
    },       // onOpen
    () => {
        $('#csgohaxpreload').show();
    },       // onClose
    () => {},        // onMinimize
    `
    <div id="csgohaxpreload" class="winpreload">
                    <p>Connecting...</p>
                </div>
                <tabcontainer>
                    <div class="tab focus" id="aimbot" >Aimbot</div>
                    <div class="tab" id="antiaim" >Anti-aim</div>
                    <div class="tab" id="triggerbot" >Triggerbot</div>
                    <div class="tab" id="backtrack" >Backtrack</div>
                    <div class="tab" id="glow" >Glow</div>
                    <div class="tab" id="chams" >Chams</div>
                    <div class="tab" id="esp" >ESP</div>
                    <div class="tab" id="visuals" >Visuals</div>
                    <div class="tab" id="skinchanger" >Skinchanger</div>
                    <div class="tab" id="sound" >Sound</div>
                    <div class="tab" id="style" >Style</div>
                    <div class="tab" id="misc" >Misc</div>
                    <div class="tab" id="reportbot" >Reportbot</div>
                    <div class="tab" id="config" >Config</div>
                </tabcontainer>
                <tabcontent id="aimbot" class="focus" >aimbot</tabcontent>
                <tabcontent id="antiaim">antiaim</tabcontent>
                <tabcontent id="triggerbot">triggerbot</tabcontent>
                <tabcontent id="backtrack">backtrack</tabcontent>
                <tabcontent id="glow">glow</tabcontent>
                <tabcontent id="chams">chams</tabcontent>
                <tabcontent id="esp">esp</tabcontent>
                <tabcontent id="visuals">visuals</tabcontent>
                <tabcontent id="skinchanger">skinchanger</tabcontent>
                <tabcontent id="sound">sound</tabcontent>
                <tabcontent id="style">style</tabcontent>
                <tabcontent id="misc">misc</tabcontent>
                <tabcontent id="reportbot">
                </tabcontent>
                <tabcontent id="config">config</tabcontent>
    `
);