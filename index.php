<?php

$live = false;

$API_KEY = 'AIzaSyA7ddlax4__lfpWFITD_k1doQgyQNult5A'; 
$ChannelID = 'UCSJ4gkVC6NrvII8umztf0Ow'; 
$channelInfo = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId='.$ChannelID.'&type=video&eventType=live&key='.$API_KEY; 
$extractInfo = file_get_contents($channelInfo); 
$extractInfo = str_replace('},]',"}]",$extractInfo); 
$showInfo = json_decode($extractInfo, true); 
$live = $showInfo['pageInfo']['totalResults'] !== 0;

if($live){
$livetitle = $showInfo['items'][0]['snippet']['title'];
$liveurl = "https://youtube.com/watch?v=".$showInfo['items'][0]['id']['videoId'];
$livethumb = $showInfo['items'][0]['snippet']['thumbnails']['medium']['url'];
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>nieaHax</title>
    <link rel="stylesheet" href="https://raw.githubusercontent.com/necolas/normalize.css/master/normalize.css">
    <link rel="stylesheet" type="text/css" href="jqui.css"/>
    <link rel="stylesheet" href="style.css">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
</head>
<body>
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
                <img src="https://apprecs.org/gp/images/app-icons/300/c4/com.lenovo.FileBrowser2.jpg">
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
                content file  here :))
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