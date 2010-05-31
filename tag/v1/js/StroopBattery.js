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
StroopBattery.prototype.getName = function() { return this.name; };

StroopBattery.prototype.start = function() {
	this.run();
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
		var table=$('<table border="1"></table>');
		table.append($('<tr style="font-weight:bold; background:gray"><td></td><td>Currect</td><td>Time</td></tr>'));
		var answers=0, timing=0, count=0;
		$.each(result.results,function(i,answer){
			table.append('<tr><td>'+(i+1)+'</td><td>'+answer.answer+'</td><td>'+answer.responseTime+'</td></tr>');
			if (answer.answer) answers++;
			timing +=answer.responseTime;
			count++;
		});
		var avr=Math.round(timing/count);
		table.append('<tr style="font-weight:bold"><td></td><td>'+answers+'</td><td>'+avr+'</td></tr>');
		div.append(table);
	});
	return div;
};
