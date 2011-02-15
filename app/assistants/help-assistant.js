function HelpAssistant() {
	/* this is the creator function for your scene assistant object. It will be passed all the 
	   additional parameters (after the scene name) that were passed to pushScene. The reference
	   to the scene controller (this.controller) has not be established yet, so any initialization
	   that needs the scene controller should be done in the setup function below. */
}

HelpAssistant.prototype.setup = function() {
    this.handletap = this.handleTap.bindAsEventListener(this);
    this.controller.listen(this.controller.window, Mojo.Event.tap, this.handletap);
	
	this.appMenuModel = {
	visible: true,
	items: [
        { label: "Records",   command: 'do-records' },	
    	{ label: "PuzzleMaker",        command: 'do-puzzlemaker' },	
		{ label: "About",   	       command: 'do-about' },		
    	]
    };

    this.controller.setupWidget(Mojo.Menu.appMenu, {omitDefaultItems: true}, this.appMenuModel);
  
};

HelpAssistant.prototype.handleTap = function(event){
  keyTapped = event.srcElement.id
  if (keyTapped == 'starttutorial'){
       Mojo.Controller.stageController.pushScene("tutorial", 0)
  }
  if (keyTapped == 'readhowto'){
       Mojo.Controller.stageController.pushScene("howto")
  }
  if (keyTapped == 'support'){
            this.controller.serviceRequest("palm://com.palm.applicationManager", {
		  method: "open",
		  parameters:  {
		      id: 'com.palm.app.browser',
		      params: {
			    scene: 'page',
		          target: "http://tibfib.com/support/"
		      }
		  }
		});
            
//            this.controller.serviceRequest("palm://com.palm.applicationManager", {
//		  method: "open",
//		  parameters:  {
//		      id: 'com.palm.app.youtube',
//		      params: {
//			    scene: 'video',
//		          vid: "A4Sw52S6k5g",
//                            swapForHomeScene: false
//		      }
//		  }
//		});
    }
  if (keyTapped=='emailDev'){
		this.controller.serviceRequest('palm://com.palm.applicationManager', {
				method: 'open',
				parameters: {
					id: 'com.palm.app.email',
					params: {
						summary: 'Countdown Support',
						recipients: [{
							type: 'email',
							role: 1,
							value: 'tibfib1@gmail.com',
							contactDisplay: 'Tibfib'
						}]
					}
				}
			});
  }
}

HelpAssistant.prototype.activate = function(event) {
	/* put in event handlers here that should only be in effect when this scene is active. For
	   example, key handlers that are observing the document */
};

HelpAssistant.prototype.deactivate = function(event) {
	/* remove any event handlers you added in activate and do any other cleanup that should happen before
	   this scene is popped or another scene is pushed on top */
};

HelpAssistant.prototype.cleanup = function(event) {
	          Mojo.Event.stopListening(this.controller.window, Mojo.Event.tap, this.handletap); 

};
