function StroopBattery(){
		this.results=[];
		this.stroops=[];
	};
	StroopBattery.prototype.results;
	StroopBattery.prototype.stroops;
	StroopBattery.prototype.introId="";
	StroopBattery.prototype.onDone=function(){};
	StroopBattery.prototype.getAnswers=function(){
		//TODO
	};
	StroopBattery.prototype.start=function(){
		var introTextId=this.introId;
		$('#stroopScreen').hide();
		$('#introScreen').empty().append($('#'+introTextId).clone().show()).show();
		var that=this;
		var keyPressHandler=function(e){
			if (e.keyCode!=13) return;
			console.dir(e);
			$('body').unbind('keypress',that.keyPressHandler);
			$(window).unbind('keypress',that.keyPressHandler);
			that.run();
		};
		that.keyPressHandler=$.proxy(keyPressHandler,that);
		$('body').keypress(that.keyPressHandler);
		$(window).keypress(that.keyPressHandler);
	};
	
	StroopBattery.prototype.run=function(){
		$('#introScreen').hide();
		$('#content').show();
		$('#stroopScreen').show();
		
		var stroopArray=$.shuffle(this.stroops);
		var showResults=function(){
			$('#word').html('Results:</br>');
			$.each(stroopArray,function(i,stroop){
				$('#word').append(stroop.getResultDiv());
			});
		};
		var that=this;
		$.each(stroopArray,function(i,stroop){
			stroop.onAnswer=function(){
				if (stroop.getQuestionAnswered()==5){
					stroop.stop();
					if ((i+1)<stroopArray.length) {
						that.results.push({name:stroop.getName(),results:stroop.getResults()});
						stroopArray[i+1].start();
					} else {
						if (that.onDone) that.onDone();
					}
				}
			};
		});
		stroopArray[0].start();
	};