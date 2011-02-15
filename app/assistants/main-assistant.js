function MainAssistant() {}
MainAssistant.prototype.setup = function() {
	this.cookie = new Cookie();
	this.cookie.initialize();

    this.versionId = Mojo.Controller.appInfo.version;
    this.appName = Mojo.Controller.appInfo.title;
    
	this.controller.serviceRequest('palm://com.palm.preferences/systemProperties', {
		method:"Get",
		parameters:{"key": "com.palm.properties.nduid" },
		onSuccess: function(response){
			var request = new Ajax.Request("http://tibfib.com/apps/countdown/register.php?APPID="+this.appName+"&DEVICEID="+response['com.palm.properties.nduid']+"&VERSION="+this.versionId, {
				method: 'get',
				evalJSON: 'force',
				onSuccess: function(){},
				onFailure: function(){}
			});
		}.bind(this),
		onFailure: function(response){}.bind(this)
	});   
    
	this.appMenuModel = {
		visible: true,
		items: [
    		{ label: "Records",   command: 'do-records' },	
			{ label: "PuzzleMaker",        command: 'do-puzzlemaker' },	
			{ label: "About",   	       command: 'do-about' },		
			{ label: "Help",   	       command: 'do-help' },	
    	]
    };
    this.controller.setupWidget(Mojo.Menu.appMenu, {omitDefaultItems: true}, this.appMenuModel);
    
	this.controller.setupWidget("classic-list", {
		itemTemplate: "main/list-item",
	    listTemplate: "main/list",
		hasNoWidgets: true,
	}, {
		listTitle: "Classic",
		items: [
			{title: "Beginner", value: 5},
			{title: "Eager Beaver", value: 10},
			{title: "Intermediate", value: 15},
			{title: "Challenger", value: 20},
			{title: "Expert", value: 25}
		]
	});
	this.controller.listen(this.controller.get("classic-list"), Mojo.Event.listTap, this.handleListTap = function(event){
		this.controller.stageController.pushScene({name: "game", disableSceneScroller: true}, event.item, "classic");
	}.bind(this));
	
	this.controller.setupWidget("lightsout-list", {
		itemTemplate: "main/list-item",
	    listTemplate: "main/list",
		hasNoWidgets: true,
	}, {
		listTitle: "Lights Out",
		items: [
			{title: "Beginner", value: 5},
			{title: "Eager Beaver", value: 10},
			{title: "Intermediate", value: 15},
			{title: "Challenger", value: 20},
			{title: "Expert", value: 25}
		]
	});
	this.controller.listen(this.controller.get("lightsout-list"), Mojo.Event.listTap, this.handleLightsoutListTap = function(event){
		this.controller.stageController.pushScene({name: "game", disableSceneScroller:true}, event.item, "lightsout");
	}.bind(this));
	
	this.resultList = [];
	this.controller.setupWidget("favorites-list", {
		itemTemplate: "main/list-item",
	    listTemplate: "main/list",
		hasNoWidgets: true,
		swipeToDelete: true
	}, this.listModel = {
		listTitle: "Favorites",
		items: this.resultList
	});
	this.controller.listen(this.controller.get("favorites-list"), Mojo.Event.listTap, this.handleFavoritesListTap = function(event){
		this.controller.stageController.pushScene({name: "game", disableSceneScroller:true}, event.item, "custom");
	}.bind(this));
	this.controller.listen(this.controller.get("favorites-list"), Mojo.Event.listDelete, this.handleFavoritesListDelete = function(event){
		this.db = openDatabase('COUNTDOWNPuzzles', '', 'User-Created Countdown Puzzles', 65536);
		var mytext = 'DELETE FROM favorites WHERE puzzle = "' + event.item.puzzle + '" AND number = "'+ event.item.number +'";'
			this.db.transaction( 
				(function (transaction) { 
					transaction.executeSql(mytext, []); 
				}).bind(this) 
			);
		this.queryData();

	}.bind(this));
	this.queryData();
	
    //Create the Favorites table
	this.db = openDatabase('COUNTDOWNPuzzles', '', 'User-Created Countdown Puzzles', 65536);
	var string = 'CREATE TABLE IF NOT EXISTS favorites (title TEXT NOT NULL, puzzle TEXT NOT NULL, number TEXT NOT NULL); GO;'
	this.db.transaction( 
		(function (transaction) { 
		//transaction.executeSql('DROP TABLE IF EXISTS table1; GO;', []); 
		   transaction.executeSql(string, []); 
		}).bind(this) 
	);
}

MainAssistant.prototype.activate = function(event) {
	this.queryData();
	
	if(this.cookie.getTutorial() != true) {    
			Mojo.Controller.stageController.pushScene("tutorial", 0);
			CountdownPrefs.tutorial = true;
	}
     /*  Need to Re add master mode! 
    if (this.cookie.getMaster() == true){
        $('master').innerHTML = '<div x-mojo-tap-highlight="momentary" class="palm-row last">\
                <div class="palm-row-wrapper" onclick=\'Mojo.Controller.stageController.pushScene({name: "main", disableSceneScroller:true}, 50, "Master")\'>\
			<div class="title left truncating-text">\
			    Master\
			</div>\
                </div>\
        </div>';
        
        $('expert').innerHTML = "<div class='palm-row' x-mojo-tap-highlight='momentary'>\
            <div class='palm-row-wrapper'>\
		    <div class='title left truncating-text'>\
			Expert\
                    </div>\
            </div>\
        </div>"
    }
    
    if (this.cookie.getMasterl() == true){
        $('masterl').innerHTML = '<div x-mojo-tap-highlight="momentary" class="palm-row last">\
                <div class="palm-row-wrapper" onclick=\'Mojo.Controller.stageController.pushScene({name: "lightsout", disableSceneScroller:true}, 50, "Master")\'>\
			<div class="title left truncating-text">\
			    Master\
			</div>\
                </div></div>';
    $('expertl').innerHTML = "<div class='palm-row' x-mojo-tap-highlight='momentary'>\
            <div class='palm-row-wrapper' id='lexpert' >\
		    <div class='title left truncating-text'>\
			Expert\
                    </div>\
            </div>\
        </div>"
    }*/   
}
MainAssistant.prototype.queryData = function(){
	this.db = openDatabase('COUNTDOWNPuzzles', '', 'User-Created Countdown Puzzles', 65536);
	var mytext = 'select * from favorites;'
    this.db.transaction( 
        (function (transaction) { 
            transaction.executeSql(mytext, [], this.queryDataHandler.bind(this)); 
        }).bind(this) 
    );
}

MainAssistant.prototype.queryDataHandler = function(transaction, results) { 
	var list = [];
	for (var i = 0; i < results.rows.length; i++) {
		var row = results.rows.item(i);			
		list.push({
			title: row['title'],
			puzzle: row['puzzle'],
			number: row['number']
		});
	}
	if (results.rows.length == 0){
		$('favorites-list').hide();
	}
	//update the list widget
	this.resultList.clear();
	Object.extend(this.resultList, list);
	this.controller.modelChanged(this.listModel, this);

}
MainAssistant.prototype.deactivate = function(event) {
	this.cookie.storeCookie();
}
MainAssistant.prototype.cleanup = function(event) {      
}