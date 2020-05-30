let globalZ = 10;

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
    $('window').removeClass("focus");
    $('window#' + e.currentTarget.id)
    .css({'z-index': globalZ++})
    .addClass("focus")
});

$('close').click(() => {
    $('popup').animate({
        right: "-50%"
    }, 500, () => {
        $('popup').hide().css('right', '4px');
    })
})

$('live').click(() => {
    $('popup')
    .css('z-index', globalZ++)
    .fadeIn(100);
})

$('closebutton').click((e) => {
    $('window#' + e.currentTarget.parentNode.parentNode.id).hide();
});

$('dwm').mousedown(() => {
    $('window').removeClass("focus");
});

$('titlebar name').css(
    'background-image',
    function() {
        return 'url(' + $('icon#' + $(this).parent().parent().attr('id') + ' img').attr('src') + ')'
    } 
)

startTime();

ws = window.localStorage;

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
    if(ws.getItem(id + '.x')){
        $('window#' + id)       
        .css({'width': ws.getItem(id + ".w"), 'height': ws.getItem(id + ".h")})
        .css({'top': ws.getItem(id + ".y"), 'left': ws.getItem(id + ".x")})
        .css({'display': 'initial'})
        .addClass("focus")
        .css({'z-index': globalZ++})
    } else {
        $('window#' + id)
        .css({'width': $('window#' + id).data('minw') + "px", 'height': $('window#' + id).data('minh') + "px"})
        .css({'top': ($('dwm').height()/2)-($('window#' + id).data('minh')/2), 'left': ($('dwm').width()/2)-($('window#' + id).data('minw')/2)})
        .css({'display': 'initial'})
        .addClass("focus")
        .css({'z-index': globalZ++})
    }
    
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