function NonMatchStroop() {
	var that = new MatchStroop();
	that.name = "Non Match";
	that.getNextQuestion = function() {
		that.startTime();
		var colorIdx = Math.round(Math.random() * (eColors.length - 1));
		var colorIdx2;
		do {
			colorIdx2 = Math.round(Math.random() * (eColors.length - 1));
		} while (colorIdx2 == colorIdx);
		color = eColors[colorIdx];
		var textColor = eColors[colorIdx2];
		that.color = color;
		cssMap = {
			"color" : color,
			"text-shadow" : "1px 1px 3px BLACK",
			"font-size" : "200px",
			"font-weight" : "bold",
			"font-family" : "arial"
		};
		return $('<div></div>').css(cssMap).html(oStr.colors[textColor]);
	};
	return that;
}