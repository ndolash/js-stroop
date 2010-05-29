function StroopBattery(batteryName) {
	this.name=batteryName;
	this.results = [];
	this.stroops = [];
};
StroopBattery.prototype.name='';
StroopBattery.prototype.results;
StroopBattery.prototype.stroops;
StroopBattery.prototype.introId = "";
StroopBattery.prototype.onDone = function() {
};
StroopBattery.prototype.getResults = function() {
	return this.results;
};
StroopBattery.prototype.getName = function() { return this.name; }

StroopBattery.prototype.start = function() {
	var introTextId = this.introId;
	$('#stroopScreen').hide();
	$('#introScreen').empty().append($('#' + introTextId).clone().show())
			.show();
	var that = this;
	var bindEvent = 'keyup';
	var keyUpHandler = function(e) {
		if (e.keyCode != 13)
			return;
		e.stopImmediatePropagation();
		e.stopPropagation();
		e.preventDefault();
		$('body').unbind(bindEvent, that.keyUpHandler);
		$(window).unbind(bindEvent, that.keyUpHandler);
		that.run();
	};
	that.keyUpHandler = $.proxy(keyUpHandler, that);
	$('body').bind(bindEvent, that.keyUpHandler);
	$(window).bind(bindEvent, that.keyUpHandler);
};

StroopBattery.prototype.run = function() {
	$('#introScreen').hide();
	$('#content').show();
	$('#stroopScreen').show();

	var stroopArray = $.shuffle(this.stroops);
	var that = this;
	$.each(stroopArray, function(i, stroop) {
		stroop.onAnswer = function() {
			if (stroop.getQuestionAnswered() == window.questionToAsk) {
				stroop.stop();
				that.results.push( {
					name : stroop.getName(),
					results : stroop.getResults()
				});
				if ((i + 1) < stroopArray.length) {
					stroopArray[i + 1].start();
				} else {

					if (that.onDone)
						that.onDone();
					//console.dir(that.getResults());
				}
			}
		};
	});
	stroopArray[0].start();
};

StroopBattery.prototype.getResultDiv=function(){
	var result=this.getResults();
	var div=$('<div></div>');
	div.append($('<h1>'+this.getName()+"</h1>"));
	$.each(this.getResults(),function(i,result){
		div.append($('<h2>'+result.name+'</h2>'));
		var table=$('<table></table>');
		table.append($('<tr><td>Currect</td><td>Time</td></tr>'));
		$.each(result.results,function(i,answer){
			table.append('<tr><td>'+answer.answer+'</td><td>'+answer.responseTime+'</td></tr>');
		});
		div.append(table);
	});
	return div;
};