/**
 * Created by paiconor on 2016/12/2.
 */
$(window).on('load', function () {

    $(".button-collapse").sideNav();
    $('.slider').slider();
});

window.onresize = function () {
    var mainheight = document.body.clientHeight - $(".bodynav").height();
    $(".bodymain").css({"height": mainheight});
};