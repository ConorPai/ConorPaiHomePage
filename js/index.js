/**
 * Created by paiconor on 2016/12/2.
 */
$(window).on('load', function () {
    const observer = lozad(); // lazy loads elements with default selector as '.lozad'
    observer.observe();

    $(".button-collapse").sideNav();
    $('.slider').slider();
});

window.onresize = function () {
    var mainheight = document.body.clientHeight - $(".bodynav").height();
    $(".bodymain").css({"height": mainheight});
};