$(function(){
    $("#isShow").click(function(){
        $("#overlay").fadeIn(200);
        $("#modalWindow").fadeIn(200);
    });
})

$(function(){
    $("#overlay").click(function(){
        $("#overlay").fadeOut(200);
        $("#modalWindow").fadeOut(200);
    });
})

locateCenter();  // => モーダルウィンドウを中央配置するための初期値を設定する
$(window).resize(locateCenter);  // => ウィンドウのリサイズに合わせて、モーダルウィンドウの配置を変える

// モーダルウィンドウを中央配置するための配置場所を計算する関数
function locateCenter() {
    let w = $(window).width();
    let h = $(window).height();

    let cw = $('#modalWindow').outerWidth();
    let ch = $('#modalWindow').outerHeight();

    $('#modalWindow').css({
        'left': ((w - cw) / 2) + 'px',
        'top': ((h - ch) / 2) + 'px'
    });
}

$(function () {
    $('.Main__tabBar-RecommendArticle').click(function(){
        $('#RecommendArticle').addClass('Main__blogCard-Active');
    },
    function(){
        $('#NewArticle').removeClass('Main__blogCard-Active');
    });
})

