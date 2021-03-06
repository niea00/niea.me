let globalZ = 10;
ws = window.localStorage;

let appsToLoad = [
    "fun",
    "csgo",
    "steam",
    "wallpaper"
];

class App {
    constructor(id, name, icon, minWidth = 200, minHeight = 120, onLoad = () => {}, onOpen = () => {}, onClose = () => {}, onMinimize = () => {}, windowContent = ``){
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.minWidth = minWidth;
        this.minHeight = minHeight;
        this.onLoad = onLoad;
        this.onOpen = onOpen;
        this.onClose = onClose;
        this.onMinimize = onMinimize;
        this.windowContent = windowContent;
        onLoad();
    }
}

appsToLoad.forEach(element => {
    $.getScript("./apps/" + element + "/app.js", () => {
        let a = eval(element)
        $('content dwm').append(
            '<icon id="' + 
            a.id + 
            '"><img src="' + 
            a.icon +
            '"><name>' + 
            a.name +
            '</name></icon>'
            )
        $('icon#' + a.id).dblclick(() => {
            openWindow(a.id);
        }).draggable({
            containment: "dwm",
            stop: function(e, ui){
        
                ws.setItem(ui.helper.prevObject[0].id + ".icon.x", ui.helper.position().left)
                ws.setItem(ui.helper.prevObject[0].id + ".icon.y", ui.helper.position().top)
                updateIconPos(ui.helper.prevObject[0].id);
            },
            opacity: 0.7, helper: "clone",
            grid: [ 76, 80 ]
        })
        .css(
            
                'left', 
                function() {
                    if(!ws.getItem($(this).attr('id') + ".icon.x")){
                        ws.setItem($(this).attr('id') + ".icon.x", $(this).position().left);
                        return $(this).position().left + "px";
                    }
                    updateIconPos($(this).attr('id'));
                    return ws.getItem($(this).attr('id') + ".icon.x");
                }
        )
        .css(
            
                'top', 
                function() {
                    if(!ws.getItem($(this).attr('id') + ".icon.y")){
                        ws.setItem($(this).attr('id') + ".icon.y", $(this).position().top);
                        return $(this).position().left + "px";
                    }
                    return ws.getItem($(this).attr('id') + ".icon.y");
                }
        )

        $('content').append(
            '<window id="' + a.id + `">
            <titlebar>
                <name>` + a.name + `</name>
                <closebutton></closebutton>
                <minbutton></minbutton>
            </titlebar>
            <wincontent>` +
            a.windowContent + 
            "</wincontent></window>"
        );
        $('content window#' + a.id).draggable({
            containment: "content",
            handle: "titlebar",
            stop: function(e, ui){
                updateWindowPos(ui.helper[0].id);
            }
        }).mousedown(() => {
            focusWindow(a.id)
        })

        $('content window#' + a.id + " titlebar minbutton").click((e) => {
    
            eval(a.id).onMinimize();
            $('window#' + a.id)
            .animate({
                'top' : '-16px',
                'left' : $('li.taskbaritem#' + a.id).position().left,
                'width' : $('li.taskbaritem#' + a.id).width(),
                'height' : $('li.taskbaritem#' + a.id).height(),
                'opacity' : '0'
            }, 200, () => {
                $(this)
            
                .css({
                    'display': 'none'
                })
            })
            setTimeout(() => {
                $('li.taskbaritem').removeClass('focus');
                $('window').removeClass('focus');
            }, 20);
        })

        $('content window#' + a.id + " titlebar closebutton").click(() => {
            eval(a.id).onClose();
            $('window#' + a.id).hide();
            $('li.taskbaritem#' + a.id).remove();
        })

        $('content window#' + a.id + " titlebar name").css(
            "background-image",
            function() {return "url(" + a.icon + ")"}
        )

        console.log(element + " loaded.");
    })
    .fail((data) => {
        console.log(element + " failed to load.", data.statusText);
    })
});
$('close').click(() => {
    $('popup').animate({
        right: "-400px"
    }, 500, () => {
        $('popup').hide().css('right', '4px');
    })
})

$('div.tab').click((e) => {
    $('div.tab.focus').removeClass('focus');
    $('div.tab#' + e.currentTarget.id).addClass('focus');
    $('tabcontent.focus').removeClass('focus');
    $('tabcontent#' + e.currentTarget.id).addClass('focus');
})


$('live').click(() => {
    if($('live').hasClass('islive')){
        $('popup')
        .css('z-index', globalZ++)
        .fadeIn(100);
    }
})

$( "ul#taskbarcontainer" ).sortable({
    revert: true,
    axis: "x",
    containment: "#taskbarcontainer"
});

$('dwm').mousedown(() => {
    $('window').removeClass("focus");
    $('li.taskbaritem').removeClass('focus');
});

startTime();


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    $('clock').text(h + ":" + m + ":" + s);
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function updateWallpaper(){
    if(ws.getItem("wallpaperurl") != "0"){
        $('content').css(
            'background-image',
            'url(' + ws.getItem("wallpaperurl") + ')'
        )
    } else {
        $('content').css(
            'background-image',
            'unset'
        )
    }
}

updateWallpaper();

function openWindow(id){

        if($('li.taskbaritem#' + id).length == 0){

            eval(id).onOpen();
            $('ul#taskbarcontainer').append('<li class="taskbaritem" id="' + id + '"><img src="' + $('icon#' + id + ' img').attr('src') + '"><p id="name">' + eval(id).name + '</p></li>')
            $('li.taskbaritem#' + id).mousedown(() => {
                openWindow(id);
            })
        }
    
    if(ws.getItem(id + '.x')){
        $('window#' + id)       
        .css({'width': ws.getItem(id + ".w"), 'height': ws.getItem(id + ".h")})
        .css({'top': ws.getItem(id + ".y"), 'left': ws.getItem(id + ".x")})
        .css({'display': 'initial'})
        .css({'z-index': globalZ++})
    } else {
        $('window#' + id)
        .css({'width': eval(id).minWidth + "px", 'height': eval(id).minHeight + "px"})
        .css({'top': ($('dwm').height()/2)-(eval(id).minWidth + "px"/2), 'left': ($('dwm').width()/2)-(eval(id).minWidth/2)})
        .css({'display': 'initial'})
        .css({'z-index': globalZ++})
    }
    focusWindow(id);

    $('window#' + id).resizable({
        containment: "content",
        minHeight: eval(id).minHeight,
        minWidth: eval(id).minWidth,
        stop: function(e, ui){
            updateWindowPos(ui.helper[0].id);
        }
    });
}

$('button#msgok').click(() => {
    $('bigassmessage').fadeOut(200);
})

function updateWindowPos(id){
    ws.setItem(id+'.x', $("window#" + id).css('left'));
    ws.setItem(id+'.y', $("window#" + id).css('top'));
    ws.setItem(id+'.w', $("window#" + id).css('width'));
    ws.setItem(id+'.h', $("window#" + id).css('height'));
}

function updateIconPos(id){
    $('icon#' + id).css('position', 'absolute');
    $('icon#' + id).animate({
        'left': ws.getItem(id + ".icon.x") + 'px',
        'top': ws.getItem(id + ".icon.y") + 'px'
    }, 200)
}
function doBigAssMessage(title, text, stack){
    $('bigassmessage h1#msgheader').text(title);
    $('bigassmessage p#msgtext').text(text);
    if(stack){
        console.log(stack);
        $('div#stack').show();
        $('pre#msgstack').text(stack);
    } else {
        console.log('nope');
        $('div#stack').hide();
    }
    $('bigassmessage').fadeIn(100);
}

$(document).ready(() => {
    setTimeout(() => {
       $('preload').fadeOut(200);
    }, 200)
})

function focusWindow(id){
    $('window').removeClass('focus')
    $('li.taskbaritem').removeClass('focus');
    $('li.taskbaritem#' + id).addClass('focus');
    $('window#' + id)
    .addClass("focus")
    .css('opacity', '1')
    .css('display', 'initial')
    .css({'z-index': globalZ++})
}