var Ticker = {
    init: function() {
        var $binding = $('.js-binding');
        var $ticker = $('.js-ticker');
        if ($binding.width() < $ticker.width()) {
            this.automove();
        }
    },
    automove: function() {
        var $ticker = $('.js-ticker');
        var tickerWidth = $ticker.width();

        var widthStep = 1; //pixels
        var time = 0.01; //seconds

        var widthLeft = tickerWidth;
        setInterval(function() {
            if (widthLeft > 0) {
                var currentOffset = Math.abs(parseInt($ticker.css('left')));
                $ticker.css('left', - (currentOffset + widthStep));
                widthLeft -= widthStep;
            } else {
                $ticker.css('left', 0);
                widthLeft = tickerWidth;
            }
        }, time * 1000);
    }
};

Ticker.init();