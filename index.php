<?php

$live = false;
$ChannelID = 'UCMQtFQeykJyG-VTsO_p5dxg'; //live test 

$pagecontent = file_get_contents("https://youtube.com/channel/".$ChannelID);

$live = strpos($pagecontent, '>Live now</span></li></ul></div>') !== false;
$livethumb = "0";
$liveurl = "0";
$livetitle= "0";

@preg_match('/https:\/\/i.ytimg.com\/vi\/...........\/hqdefault_live.jpg/', $pagecontent, $matches, PREG_OFFSET_CAPTURE);
    @$livethumb = str_split(str_split($pagecontent, $matches[0][1])[1], 53)[0];

    @preg_match('/href=\"\/watch\?v=...........\" rel=\"nofollow\">/', $pagecontent, $matches, PREG_OFFSET_CAPTURE);
    @$liveurl = "https://youtube.com" . str_split(str_split($pagecontent, $matches[0][1] + 6)[1], 20)[0];

    @preg_match('/ellipsis-2\" dir=\"ltr\" title=\".*\"  data/', $pagecontent, $matches, PREG_OFFSET_CAPTURE);
    @$tmp = str_split($pagecontent, $matches[0][1] + 29)[1];
    @preg_match('/\"  data-session/', $tmp, $matches, PREG_OFFSET_CAPTURE);
    @$livetitle = str_split($tmp, $matches[0][1])[0];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>nieaHax</title>
    <link rel="stylesheet" type="text/css" href="jqui.css"/>
    <link rel="stylesheet" href="style.css">
    <link rel="shortcut icon" href="favicon.png" type="image/x-icon">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
</head>
<body>
    <preload><h1>niea<span>Hax</span></h1><br/><img src="load.gif"></preload>
    <taskbar>
        <a href="#">
        <tag>niea<span>Hax</span></tag>
        </a>

        <taskbarcontainer>
        </taskbarcontainer>

        <clock>00:00:00</clock>
        <live <?php if($live){echo 'class="islive"';}?>>LIVE</live>
        <popup <?php if(!$live){echo 'style="display: none;"';}?>>
            <close></close>
            niea is currently live on YouTube!
            <a href="<?php echo $liveurl; ?>">
                <img src="<?php echo $livethumb; ?>">
                <livetitle><?php echo $livetitle;?></livetitle>
            </a>
        </popup>
    </taskbar>
    <content>
        <dwm>
            <icon id="steam">
                <img src="https://cdn.freebiesupply.com/images/large/2x/steam-logo-transparent.png">
                <name>Steam</name>
            </icon>
            <icon id="fun">
                <img src="https://cdn.discordapp.com/attachments/650189211273789440/716188468174258176/tumblr_mjok1bhPIB1rfjowdo1_500.gif">
                <name>Fun stuff</name>
            </icon>
            <icon id="csgo">
                <img src="https://lookingforclan.com/sites/default/files/styles/icon/public/2018-02/csgo-icon.jpg?itok=QowWchnK">
                <name>CSGO Hax</name>
            </icon>
        </dwm>
        <window id="steam" data-minw="200" data-minh="120">
            <titlebar>
                <name>Steam</name>
                <closebutton></closebutton>
                <minbutton></minbutton>
            </titlebar>
            <wincontent>
                content here :))
            </wincontent>
        </window>
        <window id="fun" data-minw="200" data-minh="120">
            <titlebar>
                <name>Fun stuff</name>
                <closebutton></closebutton>
                <minbutton></minbutton>
            </titlebar>
            <wincontent>
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
            </wincontent>
        </window>
        <window id="csgo" data-minw="578" data-minh="120">
            <titlebar>
                <name>CSGO Hax</name>
                <closebutton></closebutton>
                <minbutton></minbutton>
            </titlebar>
            <wincontent>
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
            </wincontent>
        </window>
    </content>
    <script type="text/javascript" src="script.js"></script>
</body>
</html>