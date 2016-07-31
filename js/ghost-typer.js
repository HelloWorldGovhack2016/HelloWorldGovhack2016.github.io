// Based on a script by Lokesh Devnani at https://github.com/lokeshthegenius/ghost-typer
// see https://github.com/lokeshthegenius/ghost-typer/blob/master/LICENSE for tems of use.

(function($){
	$.fn.ghosttypeonce = function(options){
    	var settings = $.extend({},$.fn.ghosttypeonce.defaults,options);
        var elem = $(this);
        typing(0, false);
        return this;

        function typing(slicer) {
            setTimeout(function () {
                slicer += 1;
								if (settings.message[slicer] == '<') {
									while (settings.message[slicer] != '>') {
										slicer += 1
									}}
                elem.html(settings.message.slice(0, slicer));
                if (slicer == settings.message.length) {
                    if(settings.callback) setTimeout(settings.callback, settings.timePause);
                    return;
								} else {
									typing(slicer);
								}
            }, settings.timeWrite);
        }
    };
    $.fn.ghosttypeonce.defaults = {
            message: null,
            elem: null,
            timeWrite: 100,
						timePause: 200,
            callback: undefined
    };
})(jQuery);
