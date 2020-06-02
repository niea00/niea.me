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
    <bigassmessage style="display: none">
        <msgbox>
            <h1 id="msgheader"></h1>
            <p id="msgtext"></p>
            <div id="stack">
                <p id="msgstacklabel">Call Stack</p>
                <pre id="msgstack"></pre>
            </div>
            <button id="msgok">Okay</button>
        </msgbox>
    </bigassmessage>
    <preload><h1>niea<span>Hax</span></h1><br/><img src="load.gif"></preload>
    <taskbar>
        <a href="#">
        <tag>niea<span>Hax</span></tag>
        </a>

        <taskbarcontainer>
        </taskbarcontainer>

        <live <?php if($live){echo 'class="islive"';}?>>LIVE</live>
        <clock>00:00:00</clock>
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
        </dwm>
    </content>
    <script type="text/javascript" src="script.js"></script>
</body>
</html>