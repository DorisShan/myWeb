(function ($, root) {

    function audioManager () {
        this.oAudio = new Audio();
        this.oAudio.src = '../mayDay.mp3';
        this.status = 'pause';
        
    }

    audioManager.prototype = {
        // load: function () {
        //     this.oAudio.load();
        // },
        play: function () {
            this.status = 'play';
            this.oAudio.play();
            console.log(this.status);
        },
        pause: function () {
            this.status = 'pause';
            this.oAudio.pause();
            console.log(this.status);
        }
    }

    root.audioManager = new audioManager();
} (window.jQuery, window.player || (window.player = {})))