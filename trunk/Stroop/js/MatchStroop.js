function MatchStroop() {
	var that = new Stroop();
	that.name = "Match";
	that.color = null;
	that.getNextQuestion = function() {
		that.startTime();
		var colorIdx = Math.round(Math.random() * (eColors.length - 1));
		color = eColors[colorIdx];
		that.color = color;
		cssMap = {
			"color" : color,
			"text-shadow" : "1px 1px 3px BLACK",
			"font-size" : "200px",
			"font-weight" : "bold",
			"font-family" : "arial"
		};
		return $('<div></div>').css(cssMap).html(oStr.colors[color]);
	};
	that.checkAnswer = function(answer) {
		that.stopTime();
		return answer == oStr.colorAnswers[that.color].charCodeAt(0);
	};
	that.optionId="regularOption";
	that.instructionId="regularInstruction";

	return that;
};