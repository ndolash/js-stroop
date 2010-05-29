(function($) {
	$.fn.shuffle = function() {
		return this.each(function() {
			var items = $(this).children();
			return (items.length) ? $(this).html($.shuffle(items)) : this;
		});
	};

	$.shuffle = function(arr) {
		for ( var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x)
			;
		return arr;
	};
})(jQuery);

var questionToAsk = 3;
var eColors = [ 'RED', 'BLUE', 'YELLOW', 'BLACK', 'GREEN', 'PINK' ];
var oStr = {};
oStr.colors = {
	"RED" : "אדום",
	"BLUE" : "כחול",
	"YELLOW" : "צהוב",
	"BLACK" : "שחור",
	"GREEN" : "ירוק",
	"PINK" : "ורוד"
};
oStr.colorAnswers = {
	"RED" : "T",
	"BLUE" : "F",
	"YELLOW" : "M",
	"BLACK" : "A",
	"GREEN" : "H",
	"PINK" : "U"
};

$(function() {
	var stroopBattery1 = new StroopBattery('Regular 1');
	stroopBattery1.introId = 'regularIntro';
	stroopBattery1.stroops.push(new NonMatchStroop());
	stroopBattery1.stroops.push(new MatchStroop());
	stroopBattery1.stroops.push(new NaturalStroop());

	var stroopBattery2 = new StroopBattery('Regular 2');
	stroopBattery2.introId = 'regularIntro';
	stroopBattery2.stroops.push(new NonMatchStroop());
	stroopBattery2.stroops.push(new MatchStroop());
	stroopBattery2.stroops.push(new NaturalStroop());

	stroopBattery1.onDone = function() {
		stroopBattery2.start();
	};
	stroopBattery2.onDone = function() {
		$('body').empty().append(stroopBattery1.getResultDiv()).append(
				stroopBattery2.getResultDiv());
	};
	stroopBattery1.start();

});