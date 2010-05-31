function EmotionalNeutralStroop() {
	var that = new MatchStroop();
	that.name = "Emotional Neutral";
	that.words = [ "תפקיד", "הגה", "גרביים", "כבשה", "חלום", "קיץ", "חלון",
			"מחברת", "מנורה", "דשא", "שמיים", "פרח", "ספר", "תיק", "ארון",
			"חתול", "מדבר", "מעיל", "קלמר", "משקפיים", "מילה", "חדר", "מרק",
			"בקבוק" ];

	that.getNextQuestion = function() {
		that.startTime();
		var colorIdx = Math.round(Math.random() * (that.colors.length - 1));
		var wordIdx=Math.round(Math.random()*(that.words.length-1));
		color = that.colors[colorIdx];
		that.color = color;
		cssMap = {
			"color" : color,
			"text-shadow" : "1px 1px 3px BLACK",
			"font-size" : "200px",
			"font-weight" : "bold",
			"font-family" : "arial"
		};
		return $('<div></div>').css(cssMap).html(that.words[wordIdx]);
	};
	return that;
};
