function HowtoAssistant() {
	/* this is the creator function for your scene assistant object. It will be passed all the 
	   additional parameters (after the scene name) that were passed to pushScene. The reference
	   to the scene controller (this.controller) has not be established yet, so any initialization
	   that needs the scene controller should be done in the setup function below. */
}

HowtoAssistant.prototype.setup = function() {
 
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
    
    this.buttonAttributesMain = {};
    this.controller.setupWidget("MainButton", this.buttonAttributesMain);
    Mojo.Event.listen(this.controller.get('MainButton'), Mojo.Event.tap, this.handleButtonPressMain.bind(this));
        
    this.drawerModel = {myOpenProperty:false};
    this.controller.setupWidget('drawer', {property:'myOpenProperty'/*, unstyled:true*/}, this.drawerModel);
    this.drawer = this.controller.get('drawer');
    Mojo.Event.listen(this.controller.get('drawer'), Mojo.Event.tap, this.toggleDrawer.bindAsEventListener(this));
   
}
HowtoAssistant.prototype.activate = function(event) {}
HowtoAssistant.prototype.toggleDrawer = function(e){		
    this.drawer.mojo.toggleState();
}
HowtoAssistant.prototype.deactivate = function(event) {}
HowtoAssistant.prototype.handleButtonPressMain = function(event){
	    this.drawer.mojo.toggleState();	
}
HowtoAssistant.prototype.cleanup = function(event) {}