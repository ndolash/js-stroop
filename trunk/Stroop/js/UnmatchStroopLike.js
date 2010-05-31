function UnmatchStroopLike() {
	var that = new MatchStroopLike();
//	that.directions=['UP','DOWN','LEFT','RIGHT'];
//	that.directionsNames={'UP':'Up','DOWN':'Down','LEFT':'Left','RIGHT':'Right'};
//	that.directionsAnswer={'UP':'U','LEFT':'L','RIGHT':'R','DOWN':'D'};
//	that.optionId="alikeOption";
//	that.instructionId="alikeInstruction";
	
	that.name = "Unmatch Stroop Alike";
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
		
		
		
		var otherDirection;
		do {
			var dirIdx = Math.round(Math.random() * (that.directions.length - 1));
			otherDirection = that.directions[dirIdx];
		} while (otherDirection==direction);
		var dirCord=that.getDirCords(direction);
		var wordEl=$('<span>'+that.directionsNames[otherDirection]+'<span>').css('position','relative');
		directonalSpan.append(wordEl);
		
		wordEl.css({"top":dirCord.top,"left":dirCord.left});
		return $('<div></div>').append(directonalSpan);
		
	};
		
	return that;
}