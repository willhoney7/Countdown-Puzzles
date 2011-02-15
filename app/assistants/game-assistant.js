function GameAssistant(item, type) {
	if(type == "custom"){
		this.custom = item.puzzle;
	} else if(type == "puzzlemaker"){
		this.difficulty = -1;
	}	
	else {
		this.custom = false
		this.difficulty = item.value;
	}
	this.type = type;
	this.title = item.title;
	this.setupMoves = [];
	this.moves = [];
	this.completedCount = 0;
}

GameAssistant.prototype.setup = function() {
	this.gameDiv = this.controller.get("game");
	this.controller.get("title").innerHTML = this.title;
	this.countDiv = this.controller.get("completedCount");
	
	this.newGame(this.custom);
	
	this.appMenuModel = {
		items: [
			{ label: "Favorite this Puzzle",        command: 'favorite' },
			{ label: "Records",   					command: 'do-records' },	
			{ label: "PuzzleMaker",     	   		command: 'do-puzzlemaker' },	
			{ label: "About",   	  			    command: 'do-about' },		
			{ label: "Help",   	      				command: 'do-help' },	
		]
    };
    this.controller.setupWidget(Mojo.Menu.appMenu, {omitDefaultItems: true}, this.appMenuModel);
	
	this.commandMenuModel= {
		visible: true,
		items: [
			//{label: 'hint', icon: "priority", command:'hint'},
			{},
			{items: [{label: 'undo', icon: "undo", command:'undo'},{label: 'refresh', icon: "refresh", command:'refresh'}, {icon: 'new', command: 'new'}]},
			{},
			//{label: 'solve', icon: "sync", command:'solve'}
		]
	};
	if(this.type === "custom"){
		this.commandMenuModel.items[1].items.pop();
	}
	if(this.type === "puzzlemaker"){
		this.commandMenuModel.items[1].items.splice(1, 1);
		
		this.commandMenuModel.items.push({
			icon: "play",
			command: "play"
		});
		this.commandMenuModel.items.unshift({
			icon: "save",
			command: "favorite"
		});
	}
	this.controller.setupWidget(Mojo.Menu.commandMenu, {menuClass: 'no-fade'}, this.commandMenuModel);
	
	if(this.controller.window.innerHeight  <= 400){
		$('header').hide();
		$('game').style.paddingTop= '0em';
	}else {
		$('game').style.paddingTop= '1em';	
	}
	this.resizeHandler = this.resized.bindAsEventListener(this);
	Mojo.Event.listen(this.controller.window, 'resize', this.resizeHandler, false);
	
	this.cookie = new Cookie();
	this.cookie.initialize();
	this.controller.listen("game", Mojo.Event.tap, this.handleTap = function(event){
		if(this.type === "puzzlemaker"){
			this.changeArea(parseInt(event.target.id), "+", true);
		}else {
			this.changeArea(parseInt(event.target.id), "-", true);
		}
		this.moves.push(parseInt(event.target.id));
		this.checkComplete();
	}.bind(this));
};
GameAssistant.prototype.setupGameVar = function(event) {
	this.game = [{num: 0, index: 0},{num: 0, index: 1},{num: 0, index: 2},{num: 0, index: 3},{num: 0, index: 4},{num: 0, index: 5},{num: 0, index: 6},{num: 0, index: 7},{num: 0, index: 8},{num: 0, index: 9},{num: 0, index: 10},{num: 0, index: 11},{num: 0, index: 12},{num: 0, index: 13},{num: 0, index: 14},{num: 0, index: 15},{num: 0, index: 16},{num: 0, index: 17},{num: 0, index: 18},{num: 0, index: 19},{num: 0, index: 20},{num: 0, index: 21},{num: 0, index: 22},{num: 0, index: 23},{num: 0, index: 24},{num: 0, index: 25},{num: 0, index: 26},{num: 0, index: 27},{num: 0, index: 28},{num: 0, index: 29},{num: 0, index: 30},{num: 0, index: 31},{num: 0, index: 32},{num: 0, index: 33},{num: 0, index: 34},{num: 0, index: 35}];
	this.moves = [];
}
GameAssistant.prototype.newGame = function(custom) {
	this.setupGameVar();
	if(!custom){
		this.setupMoves = [];
		for (var i = 0; i <= this.difficulty; i++){	
			number = Math.round(Math.random() * 35);
			this.changeArea(number, "+", false);
			this.setupMoves.push(number);
		}
		if(this.type === "classic"){
			if(this.difficulty == 5){
				CountdownStats.b++;
				}
			else if(this.difficulty == 10){
				CountdownStats.eb++;
				}
			else if(this.difficulty == 15){
				CountdownStats.i++;
				}
			else if(this.difficulty == 20){
				CountdownStats.c++;
				}
			else if(this.difficulty == 25){
				CountdownStats.e++;
				}
			else if(this.difficulty == 50){
				CountdownStats.m++;
			}
		}else if(this.type === "lightsout"){
			if(this.difficulty == 5){
				CountdownStatsL.b++;
				}
			else if(this.difficulty == 10){
				CountdownStatsL.eb++;
				}
			else if(this.difficulty == 15){
				CountdownStatsL.i++;
				}
			else if(this.difficulty == 20){
				CountdownStatsL.c++;
				}
			else if(this.difficulty == 25){
				CountdownStatsL.e++;
				}
			else if(this.difficulty == 50){
				CountdownStatsL.m++;
			}
		}
	} else {
		this.setupMoves = custom.split(",");
		for(var i = 0; i < this.setupMoves.length; i++){
			this.changeArea(parseInt(this.setupMoves[i]), "+", false);
		}
	}
	this.renderGame();
};
GameAssistant.prototype.changeArea = function(number, how, updateHTML) {
	if(how === "-"){
		var change = this.decreaseNum.bind(this);
	}else {
		var change = function(number){
			this.increaseNum(number, updateHTML);
		}.bind(this);
	}
	
	change(number);
	
	if(number % 6 !== 0){
		change(number-1); //left
	} 
	/*0  1  2  3  4  5
	  6  7  8  9 10 11
	 12 13 14 15 16 17 
	 18 19 20 21 22 23 
	 24 25 26 27 28 29 
	 30 31 32 33 34 35*/
	if((number-5) % 6 !== 0){
		change(number+1); //right
	}
	if(number > 5){
		change(number-6);//above
	}
	if(number < 30){
		change(number+6);//below
	}
	
};
GameAssistant.prototype.increaseNum = function(number, updateHTML) {
	if(this.type !== "lightsout"){
		if(this.game[number].num < 3){
			this.game[number].num++;
		}else {
			this.game[number].num = 0;
		}
	}else {
		if(this.game[number].num == 0){
			this.game[number].num = 1;
		}else {
			this.game[number].num = 0;
		}
	}
	if(updateHTML){
		this.controller.get(number.toString()).innerHTML = this.game[number].num;
		this.controller.get(number.toString()).className = "item " + "_"+this.game[number].num;
	}
};
GameAssistant.prototype.decreaseNum = function(number) {
	if(this.type !== "lightsout"){
		if(this.game[number].num > 0){
			this.game[number].num--;
		}else {
			this.game[number].num = 3;
		}
	}else {
		if(this.game[number].num == 1){
			this.game[number].num = 0;
		}else {
			this.game[number].num = 1;
		}
	}
	this.controller.get(number.toString()).innerHTML = this.game[number].num;
	this.controller.get(number.toString()).className = "item " + "_"+this.game[number].num;

};
GameAssistant.prototype.renderGame = function(event) {
	var content = Mojo.View.render({collection: this.game, formatters: {
		"class": function(value, model){
			if(model.num)
				return 	"_" + model.num;
		}
	}, template: 'game/game', separator: 'game/empty'});
	this.gameDiv.innerHTML = content;
};

GameAssistant.prototype.checkComplete = function(event) {
	for(var i = 0; i < this.game.length; i++){
		if(this.game[i].num > 0){
			break;
		}
		if(i === this.game.length-1){
			if(this.type === "classic"){
				setTimeout(function(){
					this.newGame();
					this.completedCount++;
					
					//have to use old method so users can keep their data. too lazy to create data mirgrater :)
					if(this.difficulty == 5){
						CountdownStats.bw++;
						}
					else if(this.difficulty == 10){
						CountdownStats.ebw++;
						}
					else if(this.difficulty == 15){
						CountdownStats.iw++;
						}
					else if(this.difficulty == 20){
						CountdownStats.cw++;
						}
					else if(this.difficulty == 25){
						CountdownStats.ew++;
						}
					else if(this.difficulty == 50){
						CountdownStats.mw++;
					}
					this.countDiv.innerHTML = this.completedCount;
				}.bind(this), 100);	
			} else if(this.type === "lightsout"){
				setTimeout(function(){
					this.newGame();
					this.completedCount++;
					
					//have to use old method so users can keep their data. too lazy to create data mirgrater :)
					if(this.difficulty == 5){
						CountdownStatsL.bw++;
						}
					else if(this.difficulty == 10){
						CountdownStatsL.ebw++;
						}
					else if(this.difficulty == 15){
						CountdownStatsL.iw++;
						}
					else if(this.difficulty == 20){
						CountdownStatsL.cw++;
						}
					else if(this.difficulty == 25){
						CountdownStatsL.ew++;
						}
					else if(this.difficulty == 50){
						CountdownStatsL.mw++;
					}
					this.countDiv.innerHTML = this.completedCount;
				}.bind(this), 100);	
			}else if(this.type === "custom"){
				this.countDiv.innerHTML = 1;					
				this.controller.get("scrim").show();
			}
		}
	}
};

GameAssistant.prototype.handleCommand = function(event) {
	if(event.type == Mojo.Event.command){
		switch(event.command){
			case 'favorite':
				var dialogModel={
                 	template: 'templates/mydialogsave-scene',
                 	assistant: new SaveDialogAssistant(this, this.setupMoves.toString()),
                    preventCancel: false
                };
				if(this.type === "puzzlemaker"){
					dialogModel.assistant = new SaveDialogAssistant(this, this.moves.toString());
				}
                this.controller.showDialog(dialogModel)
				break;
			case 'play':
				this.controller.stageController.pushScene({name: "game", disableSceneScroller: true}, {title: "Created Puzzle", puzzle: this.moves.toString()}, "custom");
				break;
			case 'undo':
				if(this.moves.length > 0){
					this.changeArea(this.moves[this.moves.length-1], "+", true);
					this.moves.pop();
				}
				this.controller.get("scrim").hide();
				break;
			case 'refresh':
				this.setupGameVar();
				for(var i = 0; i < this.setupMoves.length; i++){
					this.changeArea(parseInt(this.setupMoves[i]), "+", true);
				}
				this.controller.get("scrim").hide();
				break;
			case 'new':
				this.newGame();
				break;
		}
	}
};

GameAssistant.prototype.resized = function(event){
	if(this.controller.window.innerHeight < 450){		
		$('game').style.paddingTop= '0em';
	}

	if(this.controller.window.innerHeight > 450){	
		$('game').style.paddingTop= '1em';
	}

}

GameAssistant.prototype.activate = function(event) {};

GameAssistant.prototype.deactivate = function(event) {
	this.cookie.storeCookie();
};

GameAssistant.prototype.cleanup = function(event) {};