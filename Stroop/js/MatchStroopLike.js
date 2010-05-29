function MatchStroopLike() {
	var that = new Stroop();
	that.introId='alikeIntro';
	that.directions=['UP','DOWN','LEFT','RIGHT'];
	that.directionsNames={'UP':'Up למעלה','DOWN':'Down למטה','LEFT':'Left שמאל','RIGHT':'Right ימין'};
	that.directionsAnswer={'UP':'U','LEFT':'L','RIGHT':'R','DOWN':'D'};
	that.optionId="alikeOption";
	that.instructionId="alikeInstruction";
	
	
	that.getDirCords=function(direction){
		var left=0,top=0;
		switch (direction){
		case 'UP':
			left=0;
			top=0;
			break;
		case 'DOWN':
			left=0;
			top=160;
			break;
		case 'LEFT':
			left=-125;
			top=80;
			break;
		case 'RIGHT':
			left=125;
			top=80;
		};
		return {'left':left,'top':top};
	};
	
	that.name = "Match Stroop Alike";
	that.getNextQuestion = function() {
		that.startTime();
		
		var directonalSpanCss={
			"font-size":"24px",
			"font-family" : "arial",
			"font-weight":"bold",
			"color":"black",
			"height" : "200px",
			"width" : "200px",
			"border" : "solid thin black",
			"background" : "white",
			"padding-left" : "100px",
			"padding-right" : "100px",
			"margin-left":"auto",
			"margin-right":"auto"
		};
		var directonalSpan=$('<span></span>').css(directonalSpanCss).addClass('ui-helper-clearfix');
		var dirIdx = Math.round(Math.random() * (that.directions.length - 1));
		var direction = that.directions[dirIdx];
		that.direction=direction;
		
		var left=0;
		var top=0;
		var wordEl=$('<span>'+that.directionsNames[direction]+'</span>').css('position','relative');
		directonalSpan.append(wordEl);
		var dirCord=that.getDirCords(direction);
		wordEl.css({"top":dirCord.top,"left":dirCord.left});
		return $('<div></div>').append(directonalSpan);
	};
	that.checkAnswer = function(answer) {
		that.stopTime();
		return answer == that.directionsAnswer[that.direction].charCodeAt(0);
	};
	return that;
}