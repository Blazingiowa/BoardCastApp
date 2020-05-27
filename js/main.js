$(function () {
    $('.title').textillate({
        loop: true,
        minDisplayTime: 3000,
        initialDelay: 1000,
        autoStart: true,

        in: {
            effect: 'rotateInDownLeft',
            delayScale: 1.5,
            delay: 50,
            sync: false,
            shuffle: false
        },

        out: {
            effect: 'rollOut',
            delayScale: 1.5,
            delay: 50,
            sync: false,
            shuffle: false
        }
    });

    $('.desc').textillate({
        loop: true,
        minDisplayTime: 10000,
        initialDelay: 2000,
        autoStart: true,

        in: {
            effect: 'bounceInLeft',
            delayScale: 1.5,
            delay: 50,
            sync: false,
            shuffle: false
        },

        out: {
            effect: 'fadeOutLeftBig',
            delayScale: 1.5,
            delay: 50,
            sync: false,
            shuffle: false
        }
    });
});
