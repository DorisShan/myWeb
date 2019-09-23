(function ($, root) {

    function audioManager () {
        this.oAudio = new Audio();
        this.oAudio.src = '../mayDay.mp3';
        this.oAudio.status = 'pause';
        
    }

    audioManager.prototype = {
        load: function () {
            this.oAudio.load();
        },
        play: function () {
            this.status = 'play';
            this.oAudio.play();
        },
        pause: function () {
            this.status = 'pause';
            this.oAudio.pause();
        }
    }

    root.audioManager = new audioManager();
} (window.jQuery, window.player || (window.player = {})))