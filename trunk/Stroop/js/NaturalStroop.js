function NaturalStroop() {
	var that = new MatchStroop();
	that.name = "Natural";
	that.getNextQuestion = function() {
		that.startTime();
		var colorIdx = Math.round(Math.random() * (that.colors.length - 1));
		var color = that.colors[colorIdx];
		that.color = color;
		var cssMap = {
			"color" : color,
			"text-shadow" : "1px 1px 3px BLACK",
			"font-size" : "200px",
			"font-weight" : "bold",
			"font-family" : "arial"
		};
		var retrangleMap = {
			"height" : "200px",
			"width" : "200px",
			"border" : "solid thin black",
			"background" : color,
			"padding-left" : "100px",
			"padding-right" : "100px"
		};

		var retrangle = $('<span></span>').css(retrangleMap);
		return $('<div></div>').css(cssMap).append(retrangle);
	};
	return that;

}