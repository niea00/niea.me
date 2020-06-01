let globalZ = 10;
ws = window.localStorage;

$('icon').dblclick((e) => {
    openWindow(e.currentTarget.id);
});

$('window').draggable({
    containment: "content",
    handle: "titlebar",
    stop: function(e, ui){
        updateWindowPos(ui.helper[0].id);
    }
})

$('window').mousedown((e) => {
    focusWindow(e.currentTarget.id)
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

$('minbutton').click((e) => {
    $('window#' + e.currentTarget.parentNode.parentNode.id)
    .animate({
        'top' : '-16px',
        'left' : $('taskbaritem#' + e.currentTarget.parentNode.parentNode.id).position().left,
        'width' : $('taskbaritem#' + e.currentTarget.parentNode.parentNode.id).width(),
        'height' : $('taskbaritem#' + e.currentTarget.parentNode.parentNode.id).height(),
        'opacity' : '0'
    }, 200, () => {
        $(this)
    
        .css({
            'display': 'none'
        })
    })
    setTimeout(() => {
        $('taskbaritem').removeClass('focus');
        $('window').removeClass('focus');
    }, 20);
})

$('icon').draggable({
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


$('live').click(() => {
    if($('live').hasClass('islive')){
        $('popup')
        .css('z-index', globalZ++)
        .fadeIn(100);
    }
})

$('closebutton').click((e) => {
    $('window#' + e.currentTarget.parentNode.parentNode.id).hide();
    if(e.currentTarget.parentNode.parentNode.id == "csgo"){
        $('#csgohaxpreload').show();
    }
    if(e.currentTarget.parentNode.parentNode.id == "fun"){
        $('#funstuffpreload').show();
    }
    $('taskbaritem#' + e.currentTarget.parentNode.parentNode.id).remove();
});

$('dwm').mousedown(() => {
    $('window').removeClass("focus");
    $('taskbaritem').removeClass('focus');
});

$('form').submit((event) => {
    event.preventDefault();
    $.ajax({
        url: "https://nieahax.pagekite.me/api?" + event.currentTarget.id + "=" + $('input#' + event.currentTarget.id)[0].value,
        success: function(message){
            if(event.currentTarget.id == "clantag"){
                $("p#funstuffmessage").removeClass('fail');
                $("p#funstuffmessage").addClass('success');
                $("p#funstuffmessage").text(message);
            }
            if(event.currentTarget.id == "chat"){
                $("p#funstuffmessage").removeClass('fail');
                $("p#funstuffmessage").addClass('success');
                $("p#funstuffmessage").text(message);
            }
        }
    })
    .fail((message) => {
        if(event.currentTarget.id == "clantag"){
            console.log(message);
            $("p#funstuffmessage").removeClass('success');
            $("p#funstuffmessage").addClass('fail');
            $("p#funstuffmessage").text("(" + message.status + ") " + message.statusText);
        }
        if(event.currentTarget.id == "chat"){
            $("p#funstuffmessage").removeClass('success');
            $("p#funstuffmessage").addClass('fail');
            $("p#funstuffmessage").text("(" + message.status + ") " + message.statusText);
        }
    })
})

$('titlebar name').css(
    'background-image',
    function() {
        return 'url(' + $('icon#' + $(this).parent().parent().attr('id') + ' img').attr('src') + ')'
    } 
)

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

function openWindow(id){


    if(id == "csgo")
    {
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
    }

    if(id == "fun")
    {
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
    }
    
        if($('taskbaritem#' + id).length == 0){
            console.log($('taskbaritem#' + id));
            $('taskbarcontainer').append('<taskbaritem id="' + id + '"><name>' + $('window#' + id + " titlebar name").text() + '</name></taskbaritem>')
            $('taskbaritem#' + id).click(() => {
                openWindow(id);
            }).css(
                'background-image',

                function() {
                    return 'url(' + $('icon#' + id + ' img').attr('src') + ')'
                } 
            )
        }
    
    if(ws.getItem(id + '.x')){
        $('window#' + id)       
        .css({'width': ws.getItem(id + ".w"), 'height': ws.getItem(id + ".h")})
        .css({'top': ws.getItem(id + ".y"), 'left': ws.getItem(id + ".x")})
        .css({'display': 'initial'})
        .css({'z-index': globalZ++})
    } else {
        $('window#' + id)
        .css({'width': $('window#' + id).data('minw') + "px", 'height': $('window#' + id).data('minh') + "px"})
        .css({'top': ($('dwm').height()/2)-($('window#' + id).data('minh')/2), 'left': ($('dwm').width()/2)-($('window#' + id).data('minw')/2)})
        .css({'display': 'initial'})
        .css({'z-index': globalZ++})
    }
    focusWindow(id);

    $('window#' + id).resizable({
        containment: "content",
        minHeight: $('window#' + id).data('minh'),
        minWidth: $('window#' + id).data('minw') ,
        stop: function(e, ui){
            updateWindowPos(ui.helper[0].id);
        }
    });
}

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

$(document).ready(() => {
    setTimeout(() => {
       $('preload').fadeOut(200);
    }, 200)
})

function focusWindow(id){
    $('window').removeClass('focus')
    $('taskbaritem').removeClass('focus');
    $('taskbaritem#' + id).addClass('focus');
    $('window#' + id)
    .addClass("focus")
    .css('opacity', '1')
    .css('display', 'initial')
    .css({'z-index': globalZ++})
}