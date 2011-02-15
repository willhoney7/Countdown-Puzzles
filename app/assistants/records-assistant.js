var score = 0;

function RecordsAssistant() {}

RecordsAssistant.prototype.setup = function() {
   this.stats = new Cookie();
   this.stats.initialize();
       
    $('master').hide();
    $('masterw').hide();
    $('masterwl').hide();
    $('masterl').hide();
   
    $('gamesplayed').innerHTML = this.stats.getB() + this.stats.getEB()+ this.stats.getI()+ this.stats.getC() +this.stats.getE()+ this.stats.getM();
    $('b').innerHTML = this.stats.getB();
    $('eb').innerHTML = this.stats.getEB();
    $('i').innerHTML = this.stats.getI();
    $('c').innerHTML = this.stats.getC();
    $('e').innerHTML = this.stats.getE();
    if (this.stats.getMaster() == true){
        $('master').show();
        $('m').innerHTML = this.stats.getM();
    }
    
    $('gamesbeaten').innerHTML = this.stats.getBw() + this.stats.getEBw()+ this.stats.getIw()+ this.stats.getCw() +this.stats.getEw()+ this.stats.getMw();
    $('bw').innerHTML = this.stats.getBw();
    $('ebw').innerHTML = this.stats.getEBw();
    $('iw').innerHTML = this.stats.getIw();
    $('cw').innerHTML = this.stats.getCw();
    $('ew').innerHTML = this.stats.getEw();
    if (this.stats.getMaster() == true){
        $('masterw').show();
        $('mw').innerHTML = this.stats.getMw();
    }
    $('completion').innerHTML = Math.round(($('gamesbeaten').innerHTML / $('gamesplayed').innerHTML) * 100)+ '%'
    
    if ($('gamesplayed').innerHTML == 0)
    {
        $('completion').innerHTML = 'n/a'
    }
    
     $('gamesplayedl').innerHTML = this.stats.getBl() + this.stats.getEBl()+ this.stats.getIl()+ this.stats.getCl() +this.stats.getEl()+ this.stats.getMl();
    $('bl').innerHTML = this.stats.getBl();
    $('ebl').innerHTML = this.stats.getEBl();
    $('il').innerHTML = this.stats.getIl();
    $('cl').innerHTML = this.stats.getCl();
    $('el').innerHTML = this.stats.getEl();
    if (this.stats.getMasterl() == true){
        $('masterl').show();
        $('ml').innerHTML = this.stats.getMl();
    }
    
    $('gamesbeatenl').innerHTML = this.stats.getBwl() + this.stats.getEBwl()+ this.stats.getIwl()+ this.stats.getCwl() +this.stats.getEwl()+ this.stats.getMwl();
    $('bwl').innerHTML = this.stats.getBwl();
    $('ebwl').innerHTML = this.stats.getEBwl();
    $('iwl').innerHTML = this.stats.getIwl();
    $('cwl').innerHTML = this.stats.getCwl();
    $('ewl').innerHTML = this.stats.getEwl();
    if (this.stats.getMasterl() == true){
        $('masterwl').show();
        $('mwl').innerHTML = this.stats.getMwl();
    }
    $('completionl').innerHTML = Math.round(($('gamesbeatenl').innerHTML / $('gamesplayedl').innerHTML) * 100)+ '%'
    
    if ($('gamesplayedl').innerHTML == 0)
    {
        $('completionl').innerHTML = 'n/a'
    }
    score = 0;
    if ($('completionl').innerHTML != 'n/a'){
    score +=
      Math.round(
            (
               //((1*this.stats.getBw()) + (2*this.stats.getEBw())+ (3*this.stats.getIw())+ (4*this.stats.getCw()) +(5*this.stats.getEw())+ (10*this.stats.getMw())) * ($('gamesbeaten').innerHTML / $('gamesplayed').innerHTML)
                ((1*this.stats.getBwl()) + (2*this.stats.getEBwl())+ (3*this.stats.getIwl())+ (4*this.stats.getCwl()) +(5*this.stats.getEwl())+ (10*this.stats.getMwl())) * ($('gamesbeatenl').innerHTML / $('gamesplayedl').innerHTML)
               //+ (this.stats.getCompletion() * ( this.stats.getCompletion()/this.stats.getPuzzles())) * 20
              // + (this.stats.getGlobal() * 1000)
              // + (this.stats.getTied() * 100)
            ) * 1);
    }
    if ($('completion').innerHTML != 'n/a'){
      score +=
      Math.round(
            (
               ((1*this.stats.getBw()) + (2*this.stats.getEBw())+ (3*this.stats.getIw())+ (4*this.stats.getCw()) +(5*this.stats.getEw())+ (10*this.stats.getMw())) * ($('gamesbeaten').innerHTML / $('gamesplayed').innerHTML)
               //+ ((1*this.stats.getBwl()) + (2*this.stats.getEBwl())+ (3*this.stats.getIwl())+ (4*this.stats.getCwl()) +(5*this.stats.getEwl())+ (10*this.stats.getMwl())) * ($('gamesbeatenl').innerHTML / $('gamesplayedl').innerHTML)
            //   + (this.stats.getCompletion() * ( this.stats.getCompletion()/this.stats.getPuzzles())) * 20
              // + (this.stats.getGlobal() * 1000)
            //   + (this.stats.getTied() * 100)
            ) * 1);
    }
    if (this.stats.getPuzzles() != 0){
      score +=
      Math.round(
            (
               //((1*this.stats.getBw()) + (2*this.stats.getEBw())+ (3*this.stats.getIw())+ (4*this.stats.getCw()) +(5*this.stats.getEw())+ (10*this.stats.getMw())) * ($('gamesbeaten').innerHTML / $('gamesplayed').innerHTML)
              // ((1*this.stats.getBwl()) + (2*this.stats.getEBwl())+ (3*this.stats.getIwl())+ (4*this.stats.getCwl()) +(5*this.stats.getEwl())+ (10*this.stats.getMwl())) * ($('gamesbeatenl').innerHTML / $('gamesplayedl').innerHTML)
                (this.stats.getCompletion() * ( this.stats.getCompletion()/this.stats.getPuzzles())) * 10
              // + (this.stats.getGlobal() * 1000)
              // + (this.stats.getTied() * 100)
            ) * 1);
    }
    
    score +=
      Math.round(
            (
               //((1*this.stats.getBw()) + (2*this.stats.getEBw())+ (3*this.stats.getIw())+ (4*this.stats.getCw()) +(5*this.stats.getEw())+ (10*this.stats.getMw())) * ($('gamesbeaten').innerHTML / $('gamesplayed').innerHTML)
              // ((1*this.stats.getBwl()) + (2*this.stats.getEBwl())+ (3*this.stats.getIwl())+ (4*this.stats.getCwl()) +(5*this.stats.getEwl())+ (10*this.stats.getMwl())) * ($('gamesbeatenl').innerHTML / $('gamesplayedl').innerHTML)
               // (this.stats.getCompletion() * ( this.stats.getCompletion()/this.stats.getPuzzles())) * 20
               (this.stats.getGlobal() * 100)
              + (this.stats.getTied() * 30)
            ) * 1);
      
   $('score').innerHTML = score * 10;
    
    this.drawerPlayedModel = {myOpenProperty:false};
    this.controller.setupWidget('listDrawer', {property:'myOpenProperty', unstyled:true}, this.drawerPlayedModel);
    this.drawerPlayed = this.controller.get('listDrawer');
    Mojo.Event.listen(this.controller.get('played'), Mojo.Event.tap, this.toggleDrawer.bindAsEventListener(this));

    this.drawerBeatenModel = {myOpenProperty:false};
    this.controller.setupWidget('listDrawerBeaten', {property:'myOpenProperty', unstyled:true}, this.drawerBeatenModel);
    this.drawerBeaten = this.controller.get('listDrawerBeaten');
    Mojo.Event.listen(this.controller.get('beaten'), Mojo.Event.tap, this.toggleDrawerBeaten.bindAsEventListener(this));
    
    this.drawerPlayedlModel = {myOpenProperty:false};
    this.controller.setupWidget('listDrawerl', {property:'myOpenProperty', unstyled:true}, this.drawerPlayedlModel);
    this.drawerPlayedl = this.controller.get('listDrawerl');
    Mojo.Event.listen(this.controller.get('playedl'), Mojo.Event.tap, this.toggleDrawerl.bindAsEventListener(this));

    this.drawerBeatenlModel = {myOpenProperty:false};
    this.controller.setupWidget('listDrawerBeatenl', {property:'myOpenProperty', unstyled:true}, this.drawerBeatenlModel);
    this.drawerBeatenl = this.controller.get('listDrawerBeatenl');
    Mojo.Event.listen(this.controller.get('beatenl'), Mojo.Event.tap, this.toggleDrawerBeatenl.bindAsEventListener(this));

    this.buttonAttributesMain = {};
    this.controller.setupWidget("MainButton", this.buttonAttributesMain);
    Mojo.Event.listen(this.controller.get('MainButton'), Mojo.Event.tap, this.handleButtonPressMain.bind(this));

   this.appMenuModel = {
	visible: true,
	items: [
    	{ label: "PuzzleMaker",        command: 'do-submissions' },	
		{ label: "About",   	       command: 'do-about' },		
    	{ label: "Help",   	       command: 'do-help' },		
    	]
    };

    this.controller.setupWidget(Mojo.Menu.appMenu, {omitDefaultItems: true}, this.appMenuModel);
    
//NEED to add in stuff for records for master section....
    /* if ($('gamesbeaten').innerHTML >= 1000 && this.stats.getMaster() != true){
        CountdownPOD.master = true;
         this.controller.showAlertDialog({
	    onChoose: function(value) {},
	    title: $L("Master Difficulty Unlocked for Classic Mode!"),
	    //message: $L("Go play it now!"),
	    choices:[
	         {label:$L('Ok'), value:"yes", type:'primary'},     
	    ]
	    });    
    }
    if ($('gamesbeatenl').innerHTML >= 1000 && this.stats.getMasterl() != true){
        CountdownPOD.masterl = true;
         this.controller.showAlertDialog({
	    onChoose: function(value) {},
	    title: $L("Master Difficulty Unlocked for Lights Out Mode!"),
	    //message: $L("Go play it now!"),
	    choices:[
	         {label:$L('Ok'), value:"yes", type:'primary'},     
	    ]
	    });    
    } */
}
RecordsAssistant.prototype.toggleDrawer = function(e){		
    this.drawerPlayed.mojo.toggleState();
}
RecordsAssistant.prototype.toggleDrawerBeaten = function(e){		
    this.drawerBeaten.mojo.toggleState();
}

RecordsAssistant.prototype.toggleDrawerl = function(e){		
    this.drawerPlayedl.mojo.toggleState();
}
RecordsAssistant.prototype.toggleDrawerBeatenl = function(e){		
    this.drawerBeatenl.mojo.toggleState();
}

RecordsAssistant.prototype.name = function(){
    var CustomDialogAssistant = Class.create({
		initialize: function(sceneAssistant, refresh) {
                        this.refresh = refresh;
			this.sceneAssistant = sceneAssistant;
			this.controller = sceneAssistant.controller;
		},
		setup : function(widget) {
                  this.cookie = new Cookie();
                    this.cookie.initialize();
                    var attributesTwo = {
			    hintText: "",
				textFieldName:	'name', 
				modelProperty:		'original', 
				multiline:		false,
				disabledProperty: 'disabled',
				focus: 			true, 
				modifierState: 	Mojo.Widget.capsLock,
				//autoResize: 	automatically grow or shrink the textbox horizontally,
				//autoResizeMax:	how large horizontally it can get
				//enterSubmits:	when used in conjunction with multline, if this is set, then enter will submit rather than newline
				limitResize: 	false, 
				holdToEnable:  false, 
				focusMode:		Mojo.Widget.focusSelectMode,
				changeOnKeyPress: true,
				textReplacement: false,
				maxLength: 30,
				requiresEnterKey: false
                    };
                    if(this.cookie.getName() == undefined || this.cookie.getName() == 'No_I_AM_OFFLINE'){
                    this.modelTwo = {
			'original' : 'Anonymous',
			disabled: false
                    };}
                    else {
                     this.modelTwo = {
			'original' : this.cookie.getName(),
			disabled: false
                    };
                    }

                    this.controller.setupWidget('textFieldTwo', attributesTwo, this.modelTwo);

                     this.propertyChanged = this.propertyChanged.bind(this)
                    Mojo.Event.listen(this.controller.get('textFieldTwo'), Mojo.Event.propertyChange, this.propertyChanged);
                    
                    this.cbattributes = {
		property: 'value'
		};
    
               if (this.cookie.getName() == 'No_I_AM_OFFLINE'){
               this.checkmodel = {
                     value: true,
                     disabled: false
                  };
               }
               else{
               this.checkmodel = {
                     value: false,
                     disabled: false
                  };
               }
               this.controller.setupWidget('check', this.cbattributes,this.checkmodel );
               this.checkCallback = this.checkPressed.bindAsEventListener(this);
               Mojo.Event.listen(this.controller.get('check'),Mojo.Event.propertyChange,this.checkCallback);
    

			this.widget=widget;
                        this.controller.get('sendButton').addEventListener(Mojo.Event.tap, this.handleSendButton.bindAsEventListener(this));
                    },
                    handleSendButton: function() {
                     if(this.checkmodel.value == false){
                        CountdownPrefs.name = this.modelTwo.original;
                     }
                     else{
                        CountdownPrefs.name = 'No_I_AM_OFFLINE';
                     }
                          this.widget.mojo.close();
                    },
                     propertyChanged: function(){},
                     
                     checkPressed: function(){
                        if (this.checkmodel.value == true){
                         CountdownPrefs.name = 'No_I_AM_OFFLINE';
                          this.widget.mojo.close();
                        }
                        else {
                         CountdownPrefs.name = this.modelTwo.original;
                        }
                        },
                     
                    deactivate: function(widget){
                         this.cookie.storeCookie();

                        this.refresh();
                    }
                });

                 var dialogModel={
                 	template: 'templates/mydialogname-scene',
                 	assistant: new CustomDialogAssistant(this, this.refreshName.bind(this)),
                     preventCancel: true
                     };
                this.controller.showDialog(dialogModel)
}

RecordsAssistant.prototype.refreshName = function(){
   if(this.stats.getName() != 'No_I_AM_OFFLINE' && this.stats.getName() != undefined){
   $('myscoreyo').innerHTML = CountdownPrefs.name;
   
   }
   if(score > 0 && this.stats.getName() != 'No_I_AM_OFFLINE' && this.stats.getName() != undefined){
    this.controller.serviceRequest('palm://com.palm.preferences/systemProperties', {
                method:"Get",
                parameters:{"key": "com.palm.properties.nduid" },
                onSuccess: function(response){
                    var request = new Ajax.Request("http://tibfib.com/apps/countdown/globalhighscore.php?DEVICEID="+response['com.palm.properties.nduid']+"&HIGHSCORE="+score*10+"&AUTHOR="+this.stats.getName(), {
                        method: 'get',
                        onSuccess: function(){},
                        onFailure: function(){}
                    });
                }.bind(this),
                onFailure: function(response){}.bind(this)
            });
   }
   if(this.stats.getName() == 'No_I_AM_OFFLINE'){
      this.controller.serviceRequest('palm://com.palm.preferences/systemProperties', {
                method:"Get",
                parameters:{"key": "com.palm.properties.nduid" },
                onSuccess: function(response){
                    var request = new Ajax.Request("http://tibfib.com/apps/countdown/deleteglobalhighscore.php?DEVICEID="+response['com.palm.properties.nduid'], {
                        method: 'get',
                        onSuccess: function(){},
                        onFailure: function(){}
                    });
                }.bind(this),
                onFailure: function(response){}.bind(this)
            });
   }
}

//Sets up default reset
RecordsAssistant.prototype.handleButtonPressMain = function(event){
        
    this.controller.showAlertDialog({
	    onChoose: function(value) {
                if (value == 'yes'){
            CountdownStats.b = 0;
            CountdownStats.eb = 0;
            CountdownStats.i = 0;
            CountdownStats.c = 0;
            CountdownStats.e = 0;
            CountdownStats.m = 0;
            CountdownStats.bw = 0;
            CountdownStats.ebw = 0;
            CountdownStats.iw  = 0;
            CountdownStats.cw = 0;
            CountdownStats.ew = 0;
            CountdownStats.mw = 0;
            
            CountdownStatsL.b = 0;
            CountdownStatsL.eb = 0;
            CountdownStatsL.i = 0;
            CountdownStatsL.c = 0;
            CountdownStatsL.e = 0;
            CountdownStatsL.m = 0;
            CountdownStatsL.bw = 0;
            CountdownStatsL.ebw = 0;
            CountdownStatsL.iw  = 0;
            CountdownStatsL.cw = 0;
            CountdownStatsL.ew = 0;
            CountdownStatsL.mw = 0;
            
        
            $('gamesplayed').innerHTML = 0;
            $('b').innerHTML = 0;
            $('eb').innerHTML = 0;
            $('i').innerHTML = 0;
            $('c').innerHTML = 0;
            $('e').innerHTML = 0;
    
            $('gamesbeaten').innerHTML = 0;
            $('bw').innerHTML = 0;
            $('ebw').innerHTML = 0;
            $('iw').innerHTML = 0;
            $('cw').innerHTML = 0;
            $('ew').innerHTML = 0;
    
            $('completion').innerHTML = 'n/a'
            
            $('gamesplayedl').innerHTML = 0;
            $('bl').innerHTML = 0;
            $('ebl').innerHTML = 0;
            $('il').innerHTML = 0;
            $('cl').innerHTML = 0;
            $('el').innerHTML = 0;
    
            $('gamesbeatenl').innerHTML = 0;
            $('bwl').innerHTML = 0;
            $('ebwl').innerHTML = 0;
            $('iwl').innerHTML = 0;
            $('cwl').innerHTML = 0;
            $('ewl').innerHTML = 0;
    
            $('completionl').innerHTML = 'n/a'
            
            $('score').innerHTML = 0;
            score = 0;
                  }  
                },
	    title: $L("Are you sure?"),
	    message: $L("This information can NOT be restored."),
	    choices:[
	         {label:$L('Yes, reset it'), value:"yes", type:'negative'},     
	         {label:$L("Nevermind"), value:"no", type:'dismiss'}    
	    ]
	    });    
       
}
RecordsAssistant.prototype.activate = function(event) {}
RecordsAssistant.prototype.deactivate = function(event) {
    this.stats.storeCookie();
}

RecordsAssistant.prototype.cleanup = function(event) {
    Mojo.Event.stopListening(this.controller.get('played'), Mojo.Event.tap, this.toggleDrawer.bindAsEventListener(this));
    Mojo.Event.stopListening(this.controller.get('beaten'), Mojo.Event.tap, this.toggleDrawerBeaten.bindAsEventListener(this));
    Mojo.Event.stopListening(this.controller.get('MainButton'), Mojo.Event.tap, this.handleButtonPressMain.bind(this));
}

RecordsAssistant.prototype.handleCommand = function(event) {
    if(event.type == Mojo.Event.command) {
	switch(event.command)
	    {
	    case 'local':
              //this.controller.get('mojo-scene-records-scene-scroller').mojo.revealBottom(); 
			  
			  $('global').hide()
              $('local').show();
	    break;
            case 'global':
               getGlobalHighscore();
		$('global').show()
               $('local').hide();	
	    break;

	    default:
		//Mojo.Controller.errorDialog("Got command "  == 0 && event.command);
	    break;
	    }
    }
}
