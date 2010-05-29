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
	that.str.instruction = "אנא הקש\י את האות המתאימה עבור הצבע שאתה רואה";
	that.str.options = '<span class="colorDesc"><span class="colorLetter">צ</span><span style="color:yellow">הוב</span></span>'
			+ '<span class="colorDesc"><span class="colorLetter">י</span><span style="color:green">רוק</span></span>'
			+ '<span class="colorDesc"><span class="colorLetter">ו</span><span style="color:pink">רוד</span></span>'
			+ '<span class="colorDesc"><span class="colorLetter">כ</span><span style="color:blue">חול</span></span>'
			+ '<span class="colorDesc"><span class="colorLetter">ש</span><span style="color:black">חור</span></span>'
			+ '<span class="colorDesc"><span class="colorLetter">א</span><span style="color:red">דום</span></span>';
	return that;
};