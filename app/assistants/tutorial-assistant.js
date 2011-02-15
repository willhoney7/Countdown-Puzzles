function TutorialAssistant(lesson) {
    this.lesson = lesson;
}

TutorialAssistant.prototype.setup = function() {
    this.cookie = new Cookie();
    this.cookie.initialize();
   
    this.controller.setDefaultTransition(Mojo.Transition.zoomFade);
	
				CountdownPrefs.tutorial = true;

    
	this.appMenuModel = {
	visible: true,
	items: [
    	{ label: "Records",   command: 'do-records' },	
    	{ label: "PuzzleMaker",        command: 'do-submissions' },	
		{ label: "About",   	       command: 'do-about' },		
    	{ label: "Help",   	       command: 'do-help' },		
    	]
    };

    this.controller.setupWidget(Mojo.Menu.appMenu, {omitDefaultItems: true}, this.appMenuModel);
	
	
    this.attributes = {
           spacerHeight: 0,
           menuClass: 'no-fade'
    }
   
	
    this.categoryMenuModel ={
        label: $L('Category'),
        items: [
                {label: $L('Page 1'), command:'1'}, 
		{label: $L('Page 2'), command:'2' }, 
		{label: $L('Page 3'), command:'3'}, 
                {label: $L('Page 4'), command:'4'},
                {label: $L('Page 5'), command:'5'}, 
		{label: $L('Page 6'), command:'6' }, 
		{label: $L('Page 7'), command:'7'}, 
                {label: $L('Page 8'), command:'8'},
                {label: $L('Page 9'), command:'9' }, 
		//{label: $L('Page 10'), command:'10'},
	    ]};
	
    this.controller.setupWidget('category-menu', undefined, this.categoryMenuModel);	
			      
    if(this.lesson == 0){
    $('tutorial').innerHTML ="<div class='palm-page-header multi-line'>\
    <div class='palm-page-header-wrapper'>\
        <div class='title left'>Tutorial </div>\
    </div></div>\
    <div style='padding-top: 5px' class='palm-body-text'>\
        Welcome to Countdown Puzzles, a free puzzle game for webOS. To learn how to play, you can either watch the youtube video or play through the tutorial.\
    </div>\
    <br/><div id='pixi' palm-info-text></div>\
    <br/>\
        <a href='http://www.youtube.com/watch?v=A4Sw52S6k5g'><button id='video' class='palm-button'>&nbsp;&nbsp;&nbsp;&nbsp;Watch Video&nbsp;&nbsp;&nbsp;&nbsp;</button></a>\
    <button id='start' class='palm-button'>Start Tutorial</button>"
        this.handlestart = this.start.bindAsEventListener(this);
        Mojo.Event.listen(this.controller.get('start'), Mojo.Event.tap, this.handlestart)
    }
    
    if(this.lesson == 0 && this.controller.window.innerHeight < 450){
        $('pixi').innerHTML ='The interactive tutorial is not at this time Pixi-compatible, try the video'
    }
    if(this.lesson == 1){
        
        $('tutorial').innerHTML =
    "<table width='320px' id='xx'>\
    <tr>\
        <td id='a'>0</td>\
        <td id='b'>0</td>\
        <td id='c'>0</td>\
        <td id='d'>0</td>\
        <td id='e'>0</td>\
        <td id='f'>0</td>\
    </tr>\
     <tr>\
        <td id='g'>0</td>\
        <td id='h'>0</td>\
        <td id='i'>0</td>\
        <td id='j'>0</td>\
        <td id='k'>0</td>\
        <td id='l'>0</td>\
    </tr>\
      <tr>\
        <td id='m'>0</td>\
        <td id='n'>0</td>\
        <td id='o'>0</td>\
        <td id='p'>0</td>\
        <td id='q'>0</td>\
        <td id='r'>0</td>\
    </tr>\
    <tr>\
        <td id='s'>0</td>\
        <td id='t'>0</td>\
        <td id='u'>0</td>\
        <td id='v'>0</td>\
        <td id='w'>0</td>\
        <td id='x'>0</td>\
    </tr>\
    <tr>\
        <td id='y'>0</td>\
        <td id='z'>0</td>\
        <td id='aa'>0</td>\
        <td id='ab'>0</td>\
        <td id='ac'>0</td>\
        <td id='ad'>0</td>\
    </tr>\
    <tr>\
        <td id='ae'>0</td>\
        <td id='af'>0</td>\
        <td id='ag'>0</td>\
        <td id='ah'>0</td>\
        <td id='ai'>0</td>\
        <td id='aj'>0</td>\
    </tr>\
    </table>\
    <div class='palm-body-title'>The Point of the game is to make all squares into zeroes. So it looks like this.</div>\
    <div id='update' class='palm-body-text'><br/>Click \"Next\"</div>"
        
	this.storyMenuModel = {
		visible: true,
		items: [
		{},
		{items: [{label: "("+this.lesson+"/9)",  submenu:'category-menu'},	{icon: 'forward', command: 'next'},]},
		]
	}	
	this.controller.setupWidget(Mojo.Menu.commandMenu, this.attributes, this.storyMenuModel);
        
    }
    
    if(this.lesson == 2){
    $('tutorial').innerHTML =
    "<table width='320px' id='xx'>\
    <tr>\
        <td id='a'>0</td>\
        <td id='b'>0</td>\
        <td id='c'>0</td>\
        <td id='d'>0</td>\
        <td id='e'>0</td>\
        <td id='f'>0</td>\
    </tr>\
    <tr>\
        <td id='g'>0</td>\
        <td id='h'>0</td>\
        <td id='i'>0</td>\
        <td id='j'>1</td>\
        <td id='k'>0</td>\
        <td id='l'>0</td>\
    </tr>\
    <tr>\
        <td id='m'>0</td>\
        <td id='n'>0</td>\
        <td id='o'>2</td>\
        <td id='p'>1</td>\
        <td id='q'>1</td>\
        <td id='r'>0</td>\
    </tr>\
    <tr>\
        <td id='s'>0</td>\
        <td id='t'>1</td>\
        <td id='u'>1</td>\
        <td id='v'>2</td>\
        <td id='w'>0</td>\
        <td id='x'>0</td>\
    </tr>\
    <tr>\
        <td id='y'>0</td>\
        <td id='z'>0</td>\
        <td id='aa'>1</td>\
        <td id='ab'>0</td>\
        <td id='ac'>0</td>\
        <td id='ad'>0</td>\
    </tr>\
    <tr>\
        <td id='ae'>0</td>\
        <td id='af'>0</td>\
        <td id='ag'>0</td>\
        <td id='ah'>0</td>\
        <td id='ai'>0</td>\
        <td id='aj'>0</td>\
    </tr>\
    </table>\
    <div class='palm-body-title'>Each time you click on a square, the number decreases by 1. 0's go back to 3.</div>\
    <div id='update' class='palm-body-text'>Click \"Next\"</div>"
        
    }
    if(this.lesson >= 2 && this.lesson != 5 && this.lesson != 9){

        this.storyMenuModel = {
		visible: true,
		items: [
		{},
		{items: [{icon: "back", command:'back'},{label: "("+this.lesson+"/9)",  submenu:'category-menu'},{icon: 'forward', command: 'next'},]},
		]
	}	
	this.controller.setupWidget(Mojo.Menu.commandMenu, this.attributes, this.storyMenuModel);
    }
    if(this.lesson == 3){
    $('tutorial').innerHTML =
    "<table width='320px' id='xx'>\
    <tr>\
        <td id='a'>0</td>\
        <td id='b'>0</td>\
        <td id='c'>0</td>\
        <td id='d'>0</td>\
        <td id='e'>0</td>\
        <td id='f'>0</td>\
    </tr>\
    <tr>\
        <td id='g'>0</td>\
        <td id='h'>0</td>\
        <td id='i'>0</td>\
        <td id='j'>0</td>\
        <td id='k'>0</td>\
        <td id='l'>0</td>\
    </tr>\
    <tr>\
        <td id='m'>0</td>\
        <td id='n'>0</td>\
        <td id='o'>1</td>\
        <td id='p'>0</td>\
        <td id='q'>0</td>\
        <td id='r'>0</td>\
    </tr>\
    <tr>\
        <td id='s'>0</td>\
        <td id='t'>1</td>\
        <td id='u'>1</td>\
        <td id='v'>1</td>\
        <td id='w'>0</td>\
        <td id='x'>0</td>\
    </tr>\
    <tr>\
        <td id='y'>0</td>\
        <td id='z'>0</td>\
        <td id='aa'>1</td>\
        <td id='ab'>0</td>\
        <td id='ac'>0</td>\
        <td id='ad'>0</td>\
    </tr>\
    <tr>\
        <td id='ae'>0</td>\
        <td id='af'>0</td>\
        <td id='ag'>0</td>\
        <td id='ah'>0</td>\
        <td id='ai'>0</td>\
        <td id='aj'>0</td>\
    </tr>\
    </table>\
	<div class='palm-body-title'>Each click affects the adjacent squares as well (a <span style='color: red'>+</span> shape)</div>\
        <div id='update' class='palm-body-text'><br/>Click \"Next\"</div>"
    }
    if(this.lesson == 4){
    $('tutorial').innerHTML =
    "<table width='320px' id='xx'>\
    <tr>\
        <td id='a'>0</td>\
        <td id='b'>0</td>\
        <td id='c'>0</td>\
        <td id='d'>0</td>\
        <td id='e'>0</td>\
        <td id='f'>0</td>\
    </tr>\
    <tr>\
        <td id='g'>0</td>\
        <td id='h'>0</td>\
        <td id='i'>0</td>\
        <td id='j'>1</td>\
        <td id='k'>0</td>\
        <td id='l'>0</td>\
    </tr>\
    <tr>\
        <td id='m'>0</td>\
        <td id='n'>0</td>\
        <td id='o'>2</td>\
        <td id='p'>1</td>\
        <td id='q'>1</td>\
        <td id='r'>0</td>\
    </tr>\
    <tr>\
        <td id='s'>0</td>\
        <td id='t'>1</td>\
        <td id='u'>1</td>\
        <td id='v'>2</td>\
        <td id='w'>0</td>\
        <td id='x'>0</td>\
    </tr>\
    <tr>\
        <td id='y'>0</td>\
        <td id='z'>0</td>\
        <td id='aa'>1</td>\
        <td id='ab'>0</td>\
        <td id='ac'>0</td>\
        <td id='ad'>0</td>\
    </tr>\
    <tr>\
        <td id='ae'>0</td>\
        <td id='af'>0</td>\
        <td id='ag'>0</td>\
        <td id='ah'>0</td>\
        <td id='ai'>0</td>\
        <td id='aj'>0</td>\
    </tr>\
    </table>\
	<div id='win' class='palm-body-title'>Try to solve the puzzle above.</div><br/>\
        <div id='update' class='palm-body-text'></div>"
    }
    
    if(this.lesson == 5){
    $('tutorial').innerHTML =
    "<table width='320px' id='xx'>\
    <tr>\
        <td id='a'>0</td>\
        <td id='b'>0</td>\
        <td id='c'>1</td>\
        <td id='d'>1</td>\
        <td id='e'>3</td>\
        <td id='f'>1</td>\
    </tr>\
    <tr>\
        <td id='g'>0</td>\
        <td id='h'>1</td>\
        <td id='i'>1</td>\
        <td id='j'>2</td>\
        <td id='k'>1</td>\
        <td id='l'>2</td>\
    </tr>\
    <tr>\
        <td id='m'>1</td>\
        <td id='n'>2</td>\
        <td id='o'>2</td>\
        <td id='p'>1</td>\
        <td id='q'>1</td>\
        <td id='r'>0</td>\
    </tr>\
    <tr>\
        <td id='s'>0</td>\
        <td id='t'>1</td>\
        <td id='u'>1</td>\
        <td id='v'>0</td>\
        <td id='w'>0</td>\
        <td id='x'>0</td>\
    </tr>\
    <tr>\
        <td id='y'>0</td>\
        <td id='z'>0</td>\
        <td id='aa'>0</td>\
        <td id='ab'>0</td>\
        <td id='ac'>0</td>\
        <td id='ad'>0</td>\
    </tr>\
    <tr>\
        <td id='ae'>0</td>\
        <td id='af'>0</td>\
        <td id='ag'>0</td>\
        <td id='ah'>0</td>\
        <td id='ai'>0</td>\
        <td id='aj'>0</td>\
    </tr>\
    </table>\
	<div id='win' class='palm-body-title'>Okay, now try this one.</div> <div id='update' class='palm-body-text'></div>"
        
         this.storyMenuModel = {
		visible: true,
		items: [
		{icon: 'refresh', command: 'refresh'},
		{items: [{icon: "back", command:'back'},{label: "("+this.lesson+"/9)", submenu:'category-menu'},{icon: 'forward', command: 'next'},]},
		]
	}	
	this.controller.setupWidget(Mojo.Menu.commandMenu, this.attributes, this.storyMenuModel);
    
    }
    
    if(this.lesson == 6){
    $('tutorial').innerHTML =
    "<div id='win' style='padding-top: 10px' class='palm-body-title'>There are three buttons you can use while playing a puzzle.</div><br/>\
    <center><img src='images/commandmenu.png'/></center>\
    <div class='palm-body-title'>Undo</div>\
    <div class='palm-body-text'>-Undoes your last move.</div>\
     <div class='palm-body-title'>Restart</div>\
    <div class='palm-body-text'>-Restarts your current puzzle.</div>\
    <div class='palm-body-title'>New</div>\
    <div class='palm-body-text'>-Starts a new game.</div>\
        <br/><br/><br/><div id='update' style='padding-top: 12px' class='palm-body-text'>Click \"Next\"</div>"
    }
    
    
    if(this.lesson == 7){
        //PuzzleMaker, Submissions, Puzzle of the Day Page
    $('tutorial').innerHTML =
    "<div id='win' style='padding-top: 10px' class='palm-body-title'></div><br/>\
    <div class='palm-body-title'>PuzzleMaker</div>\
    <div class='palm-body-text'>Create your own puzzles and save them so you canplay theme.</div>\
	<div class='palm-body-title'>Local Highscores</div>\
    <div class='palm-body-text'>The game keeps track of how many puzzles you have beaten and played. You can view this data in the highscores page.</div>\
     <br/><div id='update' style='padding-top: 12px' class='palm-body-text'>Click \"Next\"</div>"
    }
	/*    <div class='palm-body-title'>Submissions</div>\
    <div class='palm-body-text'>Rate puzzles made by other users for the Puzzle of the Day mode. Thumbs up for a recommendation. Thumbs down for a deletion! Found via the first page.</div>\
    <div class='palm-body-title'>Puzzle of the Day</div>\
    <div class='palm-body-text'>Play the featured, submitted puzzle of the day. The difficulty of each Puzzle of the Day is listed along with its title and author on the first page of this app.</div>\*/
    
    /*if(this.lesson == 8){
        //Highscores Page
    $('tutorial').innerHTML =
    "<br/>\
    <div class='palm-body-title'>Local Highscores</div>\
    <div class='palm-body-text'>The game keeps track of how many puzzles you have beaten and played. You can view this data in the highscores page.</div>\
    <div class='palm-body-title'>Puzzle of the Day Highscore*</div>\
    <div class='palm-body-text'>You can compete for a highscore for every Puzzle of the Day. The highscore is measured by the number of \"moves\" it takes to solve the puzzle.</div>\
    <div class='palm-body-title'>Global Highscores*</div>\
    <div class='palm-body-text'>All of your played data is gathered and via a super-secret algorithim, your score is calculated. This score is uploaded to our servers and you can compete with other players to see who is the best!</div>\
    <div id='update' style='padding-top: 12px' class='palm-body-text'>Click \"Next\"</div>"
    }
    */
    if(this.lesson == 8){
        //Highscores Page
		/*    <div style='padding-top: 12px' class='palm-body-title'>Options</div>\
    <div class='palm-body-text'>Via the options page found on the first page and in the app menu, you can decide how you want classic mode to look like.</div>\*/
    $('tutorial').innerHTML =
    "<br/><div class='palm-body-title'>Lights Out Mode</div>\
    <div class='palm-body-text'>Different than the classic mode, Lights Out features two positions for the squares, on or off. The object of Lights Out Mode is to \"turn off all the lights\".</div>\
    <div class='palm-body-title'>Favorites</div>\
    <div class='palm-body-text'>Almost every puzzle you play can be \"favorited\" and saved for later. \"Favorite\" puzzles in the application menu and view and play them via the \"Favorites\" button on main page of this app.</div>\
    <div id='update' class='palm-body-text'>Click \"Next\"</div>"
    }
    if(this.lesson == 9){
        //Highscores Page
    $('tutorial').innerHTML =
    "<br/>\
    <div class='palm-body-title'>Questions, Comments, Concerns?</div>\
    <div class='palm-body-text'>Feel free to contact us at <a href='mailto:tibfib1@gmail.com'>tibfib1@gmail.com</a> and let us know what you think! Otherwise, have fun with Countdown!</div>"
        this.storyMenuModel = {
		visible: true,
		items: [
		{},
		{items: [{icon: "back", command:'back'},{label: "("+this.lesson+"/9)",  submenu:'category-menu'}]},
		]
	}	
	this.controller.setupWidget(Mojo.Menu.commandMenu, this.attributes, this.storyMenuModel);
    }
    if(this.lesson >=1){
    this.handleTap = this.handleTap.bindAsEventListener(this);
    this.controller.listen(this.controller.window, Mojo.Event.tap, this.handleTap);
    
    this.color('a');this.color('b');this.color('c');this.color('d');this.color('e');this.color('f');this.color('g');this.color('h');this.color('i');this.color('j');this.color('k');this.color('l');this.color('m');this.color('n');this.color('o');this.color('p');this.color('q');this.color('r');this.color('s');this.color('t');this.color('u');this.color('v');this.color('w');this.color('x');this.color('y');this.color('z');this.color('aa');this.color('ab');this.color('ac');this.color('ad');this.color('ae');this.color('af');this.color('ag');this.color('ah');this.color('ai');this.color('aj');
    }
};

TutorialAssistant.prototype.start = function(event){
    Mojo.Controller.stageController.pushScene({name: "tutorial"/*, disableSceneScroller:true*/}, 1)
}

TutorialAssistant.prototype.handleTap= function(event){
	item = event.srcElement.id;
	if (item == 'a'){
	this.minus('a','b', 'g', 'xx', 'xx')
	}
	if (item == 'b'){
	this.minus('b','a','h','c', 'xx')
	}
	if (item == 'c'){
	this.minus('c','b','i','d', 'xx')
	}
	if (item == 'd'){
	this.minus('d','c','j','e', 'xx')
	}
	if (item == 'e'){
		this.minus('e','d','k','f', 'xx')
	}
	if (item == 'f'){
		this.minus('f','e','l', 'xx', 'xx')
	}
	if (item == 'g'){
		this.minus('g','a','h', 'm', 'xx')
	}
	if (item == 'h'){
		this.minus('h','g','i','b','n')
	}
	if (item == 'i'){
		this.minus('i','c','h','j', 'o')
	}
	if (item == 'j'){
		this.minus('j','d','i','k','p')
	}
	if (item == 'k'){
		this.minus('k','e','j','l', 'q')
	}
	if (item == 'l'){
		this.minus('l','k','f', 'r', 'xx')
	}
	if (item == 'm'){
		this.minus('m','g','n', 's', 'xx')
	}
	if (item == 'n'){
		this.minus('n','m','h','o','t')
	}
	if (item == 'o'){
		this.minus('o','n','i','p', 'u')
	}
        
	if (item == 'p'){
		this.minus('p','o','j','q','v')
              //  $('update').innerHTML = "You've almost got it!"
	}
        
	if (item == 'q'){
		this.minus('q','p','k','r', 'w')
	}
	if (item == 'r'){
		this.minus('r','l','q', 'x', 'xx')
	}
	if (item == 's'){
		this.minus('s','m','t', 'y', 'xx')
	}
	if (item == 't'){
		this.minus('t','s','n','u','z')
	}
	if (item == 'u'){
		this.minus('u','t','o','v', 'aa')
                //$('update').innerHTML = 'There you go!'
	}
	if (item == 'v'){
		this.minus('v','u','p','w','ab')
	}
	if (item == 'w'){
		this.minus('w','v','q','x', 'ac')
	}
	if (item == 'x'){
		this.minus('x','w','r', 'ad', 'xx')
	}
	if (item == 'y'){
		this.minus('y','s','z', 'ae', 'xx')
	}
	if (item == 'z'){
		this.minus('z','y','t','aa','af')
	}
	if (item == 'aa'){
		this.minus('aa','z','u','ab', 'ag')
	}
	if (item == 'ab'){
		this.minus('ab','aa','v','ac','ah')
	}
	if (item == 'ac'){
		this.minus('ac','ab','w','ad', 'ai')
	}
	if (item == 'ad'){
		this.minus('ad','ac','x', 'aj', 'xx')
	}
	if (item == 'ae'){
		this.minus('ae','y','af', 'xx', 'xx')
	}
	if (item == 'af'){
		this.minus('af','ae','z','ag','xx')
	}
	if (item == 'ag'){
		this.minus('ag','af','aa','ah', 'xx')
	}
	if (item == 'ah'){
		this.minus('ah','ag','ab','ai','xx')
	}
	if (item == 'ai'){
		this.minus('ai','ah','ac','aj', 'xx')
	}
	if (item == 'aj'){
		this.minus('aj','ai','ad', 'xx', 'xx')
	}
}

TutorialAssistant.prototype.minus= function(orig, sq1, sq2, sq3, sq4){
	first = orig;
	second = sq1;
	third = sq2;
	fourth = sq3;
	fifth = sq4;
	
	this.minusit(orig);
	this.minusit(sq1);
	this.minusit(sq2);
	this.minusit(sq3);
	this.minusit(sq4);
	
	
}

TutorialAssistant.prototype.minusit= function(orig){
	
	if ($(orig).innerHTML == 0){
		$(orig).innerHTML = 4;
	}
	if ($(orig).innerHTML == 1){
		$(orig).innerHTML = 0;
		if(this.cookie.getColor() == true){$(orig).style.backgroundImage = 'url(images/box.png)'}

	}
	if ($(orig).innerHTML == 2){
		$(orig).innerHTML = 1;
		if(this.cookie.getColor() == true){$(orig).style.backgroundImage = 'url(images/one.png)'}

	}
	if ($(orig).innerHTML == 3){
		$(orig).innerHTML = 2;
		if(this.cookie.getColor() == true){$(orig).style.backgroundImage = 'url(images/two.png)'}

	}
	if ($(orig).innerHTML == 4){
		$(orig).innerHTML = 3;
		if(this.cookie.getColor() == true){$(orig).style.backgroundImage = 'url(images/three.png)'}

	}

	
	if ($('a').innerHTML == 0 &&
	$('b').innerHTML  == 0 &&
	$('c').innerHTML  == 0 &&
	$('d').innerHTML  == 0 &&
	$('e').innerHTML  == 0 &&
	$('f').innerHTML  == 0 &&
	$('g').innerHTML  == 0 &&
	$('h').innerHTML  == 0 &&
	$('i').innerHTML  == 0 &&
        $('j').innerHTML  == 0 &&
	$('k').innerHTML  == 0 &&
	$('l').innerHTML  == 0 &&
	$('m').innerHTML  == 0 &&
	$('n').innerHTML  == 0 &&
	$('o').innerHTML  == 0 &&
	$('p').innerHTML  == 0 &&
	$('q').innerHTML  == 0 &&
	$('r').innerHTML  == 0 &&
	$('s').innerHTML  == 0 &&
	$('t').innerHTML  == 0 &&
	$('u').innerHTML  == 0 &&
	$('v').innerHTML  == 0 &&
	$('w').innerHTML  == 0 &&
	$('x').innerHTML  == 0 &&
	$('y').innerHTML  == 0 &&
	$('z').innerHTML  == 0 &&
	$('aa').innerHTML  == 0 &&
	$('ab').innerHTML  == 0 &&
	$('ac').innerHTML  == 0 &&
	$('ad').innerHTML  == 0 &&
	$('ae').innerHTML  == 0 &&
	$('af').innerHTML  == 0 &&
	$('ag').innerHTML  == 0 &&
	$('ah').innerHTML  == 0 &&
	$('ai').innerHTML  == 0 &&
	$('aj').innerHTML == 0){	        	
		
                if(this.lesson == 4){
                        $('win').innerHTML = 'Good job!';
                        $('update').innerHTML = 'Click "Next"';
                }
                if(this.lesson == 5){
                        $('win').innerHTML = 'You\'ve got it!';
                        $('update').innerHTML = 'Click "Next"';
                }
		//if(this.cookie.getColor() == true){
		//	this.color('a');this.color('b');this.color('c');this.color('d');this.color('e');this.color('f');this.color('g');this.color('h');this.color('i');this.color('j');this.color('k');this.color('l');this.color('m');this.color('n');this.color('o');this.color('p');this.color('q');this.color('r');this.color('s');this.color('t');this.color('u');this.color('v');this.color('w');this.color('x');this.color('y');this.color('z');this.color('aa');this.color('ab');this.color('ac');this.color('ad');this.color('ae');this.color('af');this.color('ag');this.color('ah');this.color('ai');this.color('aj');
		//}
	}
}

TutorialAssistant.prototype.color = function(point){
		
	if ($(point).innerHTML == '3'){
	    		$(point).style.backgroundImage = 'url(images/three.png)'
	}
	if ($(point).innerHTML == '2'){
	    		$(point).style.backgroundImage = 'url(images/two.png)'
	}
	if ($(point).innerHTML == '1'){
	    		$(point).style.backgroundImage = 'url(images/one.png)'
	}
	if ($(point).innerHTML == '0'){
	    		$(point).style.backgroundImage = 'url(images/box.png)'
	}	
}

TutorialAssistant.prototype.anticolor =  function(point){
	
	if ($(point).innerHTML == '3'){
	    		$(point).style.backgroundImage = 'url(images/box.png)'
	}
	if ($(point).innerHTML == '2'){
	    		$(point).style.backgroundImage = 'url(images/box.png)'
	}
	if ($(point).innerHTML == '1'){
	    		$(point).style.backgroundImage = 'url(images/box.png)'
	}
	if ($(point).innerHTML == '0'){
	    		$(point).style.backgroundImage = 'url(images/box.png)'
	}
	
}

TutorialAssistant.prototype.handleCommand = function(event) {
    if(event.type == Mojo.Event.command) {
	switch(event.command)
	    {
		case 'next':
                    Mojo.Controller.stageController.swapScene({name: "tutorial", transition: Mojo.Transition.crossFade}, this.lesson+1)
                break;
                case 'back':
                    Mojo.Controller.stageController.swapScene({name: "tutorial", transition: Mojo.Transition.crossFade}, this.lesson-1)
                break;
            case 'refresh':
                    Mojo.Controller.stageController.swapScene({name: "tutorial", transition: Mojo.Transition.none}, this.lesson)
                break;
             case '1':
                    Mojo.Controller.stageController.swapScene({name: "tutorial", transition: Mojo.Transition.crossFade}, 1)
                break;
             case '2':
                    Mojo.Controller.stageController.swapScene({name: "tutorial", transition: Mojo.Transition.crossFade}, 2)
                break;
            case '3':
                    Mojo.Controller.stageController.swapScene({name: "tutorial", transition: Mojo.Transition.crossFade}, 3)
                break;
             case '4':
                    Mojo.Controller.stageController.swapScene({name: "tutorial", transition: Mojo.Transition.crossFade}, 4)
                break;
            case '5':
                    Mojo.Controller.stageController.swapScene({name: "tutorial", transition: Mojo.Transition.crossFade}, 5)
                break;
             case '6':
                    Mojo.Controller.stageController.swapScene({name: "tutorial", transition: Mojo.Transition.crossFade}, 6)
                break;
            case '7':
                    Mojo.Controller.stageController.swapScene({name: "tutorial", transition: Mojo.Transition.crossFade}, 7)
                break;
             case '8':
                    Mojo.Controller.stageController.swapScene({name: "tutorial", transition: Mojo.Transition.crossFade}, 8)
                break;
            case '9':
                    Mojo.Controller.stageController.swapScene({name: "tutorial", transition: Mojo.Transition.crossFade}, 9)
                break;
             case '10':
                    Mojo.Controller.stageController.swapScene({name: "tutorial", transition: Mojo.Transition.crossFade}, 10)
                break;
            
	    default:
		//Mojo.Controller.errorDialog("Got command "  == 0 && event.command);
	    break;
	    }
    }
}

TutorialAssistant.prototype.activate = function(event) {
};

TutorialAssistant.prototype.deactivate = function(event) {
this.cookie.storeCookie();
};

TutorialAssistant.prototype.cleanup = function(event) {
    
    	Mojo.Event.stopListening(this.controller.window, Mojo.Event.tap, this.handleTap);
        
        Mojo.Event.stopListening(this.controller.get('start'), Mojo.Event.tap, this.handlestart)

};