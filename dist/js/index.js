var root = window.player;
var ro_timer = null;
var deg = 0;

(function ($, root) {

    function init () {
        root.audioManager.load();
        root.audioManager.play();
        bindEvent();
        rotated();
    }
    init();


    function bindEvent() {
        $('.skill_logo span').on('mouseenter', function (e) {
            var id = $(e.target).attr('data-id');
            $('.skill_active').toggleClass('skill_active');
            $('#' + id).toggleClass('skill_active');
        })
        $('.melody').on('click', function () {

            if(root.audioManager.oAudio.status == 'pause'){
                root.audioManager.play();
                rotated();
            }else{
                root.audioManager.oAudio.pause();
                clearInterval(ro_timer);
            }
        })
    }

    function rotated () {
        ro_timer = setInterval(function () {
            $('.melody').css({'transform': 'rotateZ(' + deg + 'deg)'});
            deg += .5;
            deg = deg > 360 ? deg % 360 : deg;
        }, 20)

    }





}(window.jQuery, window.player || (window.player = {})))
















