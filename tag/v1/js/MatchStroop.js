function MatchStroop() {
	var that = new Stroop();
	that.introId='regularIntro';
	that.colors = [ 'RED', 'BLUE', 'YELLOW', 'BLACK', 'GREEN', 'PINK' ];
	that.colorNames = {
		"RED" : "אדום",
		"BLUE" : "כחול",
		"YELLOW" : "צהוב",
		"BLACK" : "שחור",
		"GREEN" : "ירוק",
		"PINK" : "ורוד"
	};
	that.colorAnswers = {
		"RED" : "T",
		"BLUE" : "F",
		"YELLOW" : "M",
		"BLACK" : "A",
		"GREEN" : "H",
		"PINK" : "U"
	};
	that.name = "Match Stroop";
	that.color = null;
	that.getNextQuestion = function() {
		that.startTime();
		var colorIdx = Math.round(Math.random() * (that.colors.length - 1));
		color = that.colors[colorIdx];
		that.color = color;
		cssMap = {
			"color" : color,
			"text-shadow" : "1px 1px 3px BLACK",
			"font-size" : "200px",
			"font-weight" : "bold",
			"font-family" : "arial"
		};
		return $('<div></div>').css(cssMap).html(that.colorNames[color]);
	};
	that.checkAnswer = function(answer) {
		that.stopTime();
		return answer == that.colorAnswers[that.color].charCodeAt(0);
	};
	that.optionId = "regularOption";
	that.instructionId = "regularInstruction";

	return that;
};