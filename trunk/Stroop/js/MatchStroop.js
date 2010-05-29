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
	that.str.instruction = "��� ���\� �� ���� ������� ���� ���� ���� ����";
	that.str.options = '<span class="colorDesc"><span class="colorLetter">�</span><span style="color:yellow">���</span></span>'
			+ '<span class="colorDesc"><span class="colorLetter">�</span><span style="color:green">���</span></span>'
			+ '<span class="colorDesc"><span class="colorLetter">�</span><span style="color:pink">���</span></span>'
			+ '<span class="colorDesc"><span class="colorLetter">�</span><span style="color:blue">���</span></span>'
			+ '<span class="colorDesc"><span class="colorLetter">�</span><span style="color:black">���</span></span>'
			+ '<span class="colorDesc"><span class="colorLetter">�</span><span style="color:red">���</span></span>';
	return that;
};