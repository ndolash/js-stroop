function Stroop(){};
	Stroop.prototype.started=false;
	Stroop.prototype.instructionId="";
	Stroop.prototype.optionId="";
	Stroop.prototype.name="";
	Stroop.prototype.questionAnswered=0;
	Stroop.prototype.questionTimestamp=0;
	Stroop.prototype.resultTime=0;
	//Stroop.prototype.str={instruction:"",options:""};
	Stroop.prototype.results=[];
	Stroop.prototype.getName=function(){return this.name; };
	Stroop.prototype.getResults=function(){return this.results; };
	Stroop.prototype.getQuestionAnswered=function(){ return this.questionAnswered;};
	
	// abstracts
	Stroop.prototype.getNextQuestion=function(){};
	Stroop.prototype.checkAnswer=function(answer){};
	
	// functions
	Stroop.prototype.startTime=function(){ 
		this.questionTimestamp=new Date().getTime();
	};
	Stroop.prototype.stopTime=function(){ 
		this.resultTime=(new Date().getTime())-this.questionTimestamp; 
	};
	Stroop.prototype.getResponseTime=function(){ 
		return this.resultTime;
	};
	Stroop.prototype.showNextQuestion=function(){
		var that=this;
		$('#word').fadeOut('fast',function(){
				pressed=false;
				var el=that.getNextQuestion();
				$('#word').empty().append(el).show();
		});
	};
	Stroop.prototype.getResultDiv=function(){
		var totalTime=0;
		var right=0;
		var total=0;
		$.each(this.results,function(i,result){
			totalTime+=result.responseTime;
			if (result.answer) right++; 
			total++;
		});
		totalTime=totalTime/total;
		return $("<div>"+this.name+": "+right+" out of "+total+" were right, with average time of "+totalTime+" ms to answer</div>");
	};
	Stroop.prototype.start=function(){
		if (this.started) return;
		$('#output').append($('<div>Starting '+this.getName()+'</div>')).scrollTop(50000);
		$('#word').show();
		this.started=true;
		var pressed=false;
		var that=this;
		that.results=[];
		var keyDownHandler=function(e){
			// ignore irrelevant keys
			if (e.which<58) return;
			if (pressed) return;

			var answer=that.checkAnswer(e.which);
			that.results.push({"answer":answer,"responseTime":that.getResponseTime()});

			that.questionAnswered++;
			pressed=true;
			var result=$("<div>"+that.questionAnswered+". Responded in "+that.getResponseTime()+"ms, with answer "+(answer?'correct':'incorrect')+'</div>');
			$('#output').append(result).scrollTop(50000);
			
			if (that.onAnswer) $.proxy(that.onAnswer,that)();
		};
		var keyUpHandler=function(e){
			if (!pressed) return;
			pressed=false;
			that.showNextQuestion();
		};
		that.keyUpHandler=$.proxy(keyUpHandler,that);
		that.keyDownHandler=$.proxy(keyDownHandler,that);
		$('#instruction').empty().append($("#"+that.instructionId).clone());
		$('#options').empty().append($("#"+that.optionId).clone());
		
		$('body').keydown(that.keyDownHandler);
		$(window).keydown(that.keyDownHandler);
		$('body').keyup(that.keyUpHandler);
		$(window).keyup(that.keyUpHandler);
		$('#word').focus();
		that.showNextQuestion();
	};
	Stroop.prototype.stop=function(){
		$('body').unbind('keydown',this.keyDownHandler);
		$(window).unbind('keydown',this.keyDownHandler);
		$('body').unbind('keyup',this.keyUpHandler);
		$(window).unbind('keyup',this.keyUpHandler);

		this.started=false;
	};
	