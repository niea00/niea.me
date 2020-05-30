<?php

$live = false;
$ChannelID = 'UCSJ4gkVC6NrvII8umztf0Ow'; //live test 
//$ChannelID = 'UCKe5uOUpa3N31HcOD-ZcXrg'; //non-live test

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
            <live <?php if($live){echo 'class="islive"';}?>>LIVE</live>
            <popup <?php if(!$live){echo 'style="display: none;"';}?>>
                <close></close>
                niea is currently live on YouTube!
                <a href="<?php echo $liveurl; ?>">
                <img src="<?php echo $livethumb; ?>">
                <livetitle><?php echo $livetitle;?></livetitle>
                </a>
            </popup>
        <clock>00:00:00</clock>
    </taskbar>
    <content>
        <dwm>
            <icon id="steam">
                <img src="https://cdn.freebiesupply.com/images/large/2x/steam-logo-transparent.png">
                <name>Steam</name>
            </icon>
            <icon id="file">
                <img src="https://cdn.discordapp.com/attachments/650189211273789440/716188468174258176/tumblr_mjok1bhPIB1rfjowdo1_500.gif">
                <name>File</name>
            </icon>
            <icon id="csgo">
                <img src="https://lookingforclan.com/sites/default/files/styles/icon/public/2018-02/csgo-icon.jpg?itok=QowWchnK">
                <name>CSGO</name>
            </icon>
        </dwm>
        <window id="steam" data-minw="200" data-minh="120">
            <titlebar>
                <name>Steam</name>
                <closebutton></closebutton>
            </titlebar>
            <wincontent>
                content here :))
            </wincontent>
        </window>
        <window id="file" data-minw="200" data-minh="120">
            <titlebar>
                <name>File</name>
                <closebutton></closebutton>
            </titlebar>
            <wincontent>
                limbi was here 👌👌
            </wincontent>
        </window>
        <window id="csgo" data-minw="200" data-minh="120">
            <titlebar>
                <name>CSGO</name>
                <closebutton></closebutton>
            </titlebar>
            <wincontent>
                content file  here :))
            </wincontent>
        </window>
    </content>
    <script type="text/javascript" src="script.js"></script>
</body>
</html>