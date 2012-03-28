var SaveDialogAssistant = Class.create({
	initialize: function(sceneAssistant, puzzle) {
		this.sceneAssistant = sceneAssistant;
		this.puzzle = puzzle;
		this.controller = sceneAssistant.controller;
	},
	setup : function(widget) {
		this.controller.setupWidget('textField', {
			hintText: "Name...",
			maxLength: 30,
		}, {value: ""});
		
		this.widget = widget;
		this.controller.get('sendButton').addEventListener(Mojo.Event.tap, this.handleSendButton.bindAsEventListener(this));
		this.controller.get('closeButton').addEventListener(Mojo.Event.tap, this.handleCloseButton.bindAsEventListener(this));
	},
	handleCloseButton: function() {
		this.widget.mojo.close();
	},
	handleSendButton: function() {
		this.db = openDatabase('COUNTDOWNPuzzles', '', 'User-Created Countdown Puzzles', 65536);
		value = this.controller.get("textField").mojo.getValue();
		random = Math.round(Math.random()) * 100;
		var string = 'INSERT INTO favorites (title, puzzle, number) VALUES ("' + value + '","' + this.puzzle + '","' + random + '"); GO;'	
		this.db.transaction( 
				(function (transaction) { 
					transaction.executeSql(string, []); 
				}).bind(this) 
		);
		this.widget.mojo.close();

	}
});