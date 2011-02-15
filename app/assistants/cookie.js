// Cookie Info
CountdownPrefs = {};
CountdownPrefs.color = true;
CountdownPrefs.custom = true;
CountdownPrefs.name = undefined;
CountdownPrefs.tutorial = false;

CountdownStats = {};
CountdownStats.games;
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

CountdownStatsL = {};
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

CountdownPOD = {};
CountdownPOD.global = 0;
CountdownPOD.tied = 0;
CountdownPOD.completion = 0;
CountdownPOD.puzzles = 0;
CountdownPOD.finished = false;
CountdownPOD.started = undefined;
CountdownPOD.master = false;
CountdownPOD.masterl = false;


function Cookie(){
}

Cookie.prototype.initialize = function()
{
    this.stats = new Mojo.Model.Cookie('cookie_countdownstats');
    this.statsl = new Mojo.Model.Cookie('cookie_countdownstatslightsout');
    this.pod = new Mojo.Model.Cookie('cookie_countdownpod');
    this.cookie = new Mojo.Model.Cookie('cookie_countdownpreferences');
    this.oldPrefs = this.cookie.get();
    if(this.oldPrefs)
    {
        // If current version, just update globals & prefs
        if(this.oldPrefs.versionString == CountdownPrefs.versionString)
        {
            CountdownPrefs.color = this.oldPrefs.color;
            CountdownPrefs.custom = this.oldPrefs.custom;
            CountdownPrefs.name = this.oldPrefs.name;
			CountdownPrefs.tutorial = this.oldPrefs.tutorial;
        }
        else
        {
            CountdownPrefs.color = true;
            CountdownPrefs.custom = true;
            CountdownPrefs.name = undefined;
			CountdownPrefs.tutorial = false;

        }
    }
    
    this.oldStats = this.stats.get();
    if(this.oldStats)
    {
         // If current version, just update globals & prefs
        if(this.oldStats.versionString == CountdownStats.versionString)
        {
            CountdownStats.games = this.oldStats.games;
            CountdownStats.b = this.oldStats.b;
            CountdownStats.eb = this.oldStats.eb;
            CountdownStats.i = this.oldStats.i;
            CountdownStats.c = this.oldStats.c
            CountdownStats.e = this.oldStats.e;
            CountdownStats.m = this.oldStats.m;
            
            CountdownStats.bw = this.oldStats.bw;
            CountdownStats.ebw = this.oldStats.ebw;
            CountdownStats.iw = this.oldStats.iw;
            CountdownStats.cw = this.oldStats.cw;
            CountdownStats.ew = this.oldStats.ew;
            CountdownStats.mw = this.oldStats.mw;

        }
        else
        {
            CountdownStats.games;
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
        }
    }
    
    this.oldStatsL = this.statsl.get();
    if(this.oldStatsL)
    {
         // If current version, just update globals & prefs
        if(this.oldStatsL.versionString == CountdownStatsL.versionString)
        {
            CountdownStatsL.b = this.oldStatsL.b;
            CountdownStatsL.eb = this.oldStatsL.eb;
            CountdownStatsL.i = this.oldStatsL.i;
            CountdownStatsL.c = this.oldStatsL.c
            CountdownStatsL.e = this.oldStatsL.e;
            CountdownStatsL.m = this.oldStatsL.m;
            
            CountdownStatsL.bw = this.oldStatsL.bw;
            CountdownStatsL.ebw = this.oldStatsL.ebw;
            CountdownStatsL.iw = this.oldStatsL.iw;
            CountdownStatsL.cw = this.oldStatsL.cw;
            CountdownStatsL.ew = this.oldStatsL.ew;
            CountdownStatsL.mw = this.oldStatsL.mw;

        }
        else
        {
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
        }
    }
    
    this.oldPOD = this.pod.get();
    if(this.oldPOD)
    {
         // If current version, just update globals & prefs
        if(this.oldPOD.versionString == CountdownPOD.versionString)
        {
            CountdownPOD.global = this.oldPOD.global;
            CountdownPOD.tied = this.oldPOD.tied;
            CountdownPOD.completion = this.oldPOD.completion;
            CountdownPOD.puzzles = this.oldPOD.puzzles;
            CountdownPOD.finished = this.oldPOD.finished;
            CountdownPOD.started = this.oldPOD.started;
            
            CountdownPOD.master = this.oldPOD.master;
            CountdownPOD.masterl = this.oldPOD.masterl;
        }
        else
        {
            CountdownPOD.global = 0;
            CountdownPOD.tied = 0;
            CountdownPOD.completion = 0;
            CountdownPOD.puzzles = 0;
            CountdownPOD.finished = false;
            CountdownPOD.started = undefined;
            
            CountdownPOD.master = false;
            CountdownPOD.masterl = false;
        }
    }
    
    this.storeCookie();
};

Cookie.prototype.getColor = function(){
    if (CountdownPrefs.color == undefined){
        return true;
    }
    else {
        return CountdownPrefs.color;
    }
}
Cookie.prototype.getCustom = function(){
    if (CountdownPrefs.custom == undefined){
        return true;
    }
    else {
        return CountdownPrefs.custom;
    }
}
Cookie.prototype.getName = function(){
        return CountdownPrefs.name;
   
}

Cookie.prototype.getTutorial = function(){
        return CountdownPrefs.tutorial;
    
}
Cookie.prototype.getB = function()
{ //Sets it up for first use
    if (CountdownStats.b == undefined){
        return 0;
    }
    else {
        return CountdownStats.b;
    }
};

Cookie.prototype.getEB = function()
{ //Sets it up for first use
    if (CountdownStats.eb == undefined){
        return 0;
    }
    else {
        return CountdownStats.eb;
    }
};
Cookie.prototype.getI = function()
{ //Sets it up for first use
    if (CountdownStats.i == undefined){
        return 0;
    }
    else {
        return CountdownStats.i;
    }
};
Cookie.prototype.getC = function()
{ //Sets it up for first use
    if (CountdownStats.c == undefined){
        return 0;
    }
    else {
        return CountdownStats.c;
    }
};

Cookie.prototype.getE = function()
{ //Sets it up for first use
    if (CountdownStats.e == undefined){
        return 0;
    }
    else {
        return CountdownStats.e;
    }
};
Cookie.prototype.getM = function()
{ //Sets it up for first use
    if (CountdownStats.m == undefined){
        return 0;
    }
    else {
        return CountdownStats.m;
    }
};

Cookie.prototype.getBw = function()
{ //Sets it up for first use
    if (CountdownStats.bw == undefined){
        return 0;
    }
    else {
        return CountdownStats.bw;
    }
};

Cookie.prototype.getEBw = function()
{ //Sets it up for first use
    if (CountdownStats.ebw == undefined){
        return 0;
    }
    else {
        return CountdownStats.ebw;
    }
};
Cookie.prototype.getIw = function()
{ //Sets it up for first use
    if (CountdownStats.iw  == undefined){
        return 0;
    }
    else {
        return CountdownStats.iw ;
    }
};
Cookie.prototype.getCw = function()
{ //Sets it up for first use
    if (CountdownStats.cw == undefined){
        return 0;
    }
    else {
        return CountdownStats.cw;
    }
};

Cookie.prototype.getEw = function()
{ //Sets it up for first use
    if (CountdownStats.ew == undefined){
        return 0;
    }
    else {
        return CountdownStats.ew;
    }
};
Cookie.prototype.getMw = function()
{ //Sets it up for first use
    if (CountdownStats.mw == undefined){
        return 0;
    }
    else {
        return CountdownStats.mw;
    }
};

Cookie.prototype.getBl = function()
{ //Sets it up for first use
    if (CountdownStatsL.b == undefined){
        return 0;
    }
    else {
        return CountdownStatsL.b;
    }
};

Cookie.prototype.getEBl = function()
{ //Sets it up for first use
    if (CountdownStatsL.eb == undefined){
        return 0;
    }
    else {
        return CountdownStatsL.eb;
    }
};
Cookie.prototype.getIl = function()
{ //Sets it up for first use
    if (CountdownStatsL.i == undefined){
        return 0;
    }
    else {
        return CountdownStatsL.i;
    }
};
Cookie.prototype.getCl = function()
{ //Sets it up for first use
    if (CountdownStatsL.c == undefined){
        return 0;
    }
    else {
        return CountdownStatsL.c;
    }
};

Cookie.prototype.getEl = function()
{ //Sets it up for first use
    if (CountdownStatsL.e == undefined){
        return 0;
    }
    else {
        return CountdownStatsL.e;
    }
};
Cookie.prototype.getMl = function()
{ //Sets it up for first use
    if (CountdownStatsL.m == undefined){
        return 0;
    }
    else {
        return CountdownStatsL.m;
    }
};

Cookie.prototype.getBwl = function()
{ //Sets it up for first use
    if (CountdownStatsL.bw == undefined){
        return 0;
    }
    else {
        return CountdownStatsL.bw;
    }
};

Cookie.prototype.getEBwl = function()
{ //Sets it up for first use
    if (CountdownStatsL.ebw == undefined){
        return 0;
    }
    else {
        return CountdownStatsL.ebw;
    }
};
Cookie.prototype.getIwl = function()
{ //Sets it up for first use
    if (CountdownStatsL.iw  == undefined){
        return 0;
    }
    else {
        return CountdownStatsL.iw ;
    }
};
Cookie.prototype.getCwl = function()
{ //Sets it up for first use
    if (CountdownStatsL.cw == undefined){
        return 0;
    }
    else {
        return CountdownStatsL.cw;
    }
};

Cookie.prototype.getEwl = function()
{ //Sets it up for first use
    if (CountdownStatsL.ew == undefined){
        return 0;
    }
    else {
        return CountdownStatsL.ew;
    }
};
Cookie.prototype.getMwl = function()
{ //Sets it up for first use
    if (CountdownStatsL.mw == undefined){
        return 0;
    }
    else {
        return CountdownStatsL.mw;
    }
};

Cookie.prototype.getGlobal = function()
{ //Sets it up for first use
    if (CountdownPOD.global == undefined){
        return 0;
    }
    else {
        return CountdownPOD.global;
    }
};

Cookie.prototype.getTied = function()
{ //Sets it up for first use
    if (CountdownPOD.tied == undefined){
        return 0;
    }
    else {
        return CountdownPOD.tied;
    }
};

Cookie.prototype.getCompletion = function()
{ //Sets it up for first use
    if (CountdownPOD.completion == undefined){
        return 0;
    }
    else {
        return CountdownPOD.completion;
    }
};

Cookie.prototype.getPuzzles = function()
{ //Sets it up for first use
    if (CountdownPOD.puzzles == undefined){
        return 0;
    }
    else {
        return CountdownPOD.puzzles;
    }
};

Cookie.prototype.getCompletion = function()
{ //Sets it up for first use
    if (CountdownPOD.completion == undefined){
        return 0;
    }
    else {
        return CountdownPOD.completion;
    }
};

Cookie.prototype.getFinished = function()
{ //Sets it up for first use
    if (CountdownPOD.finished == undefined){
        return false;
    }
    else {
        return CountdownPOD.finished;
    }
};

Cookie.prototype.getStarted = function()
{ //Sets it up for first use
    if (CountdownPOD.started == undefined){
        return undefined;
    }
    else {
        return CountdownPOD.started;
    }
};

Cookie.prototype.getMaster = function()
{ //Sets it up for first use
    if (CountdownPOD.master == undefined){
        return false;
    }
    else {
        return CountdownPOD.master;
    }
};

Cookie.prototype.getMasterl = function()
{ //Sets it up for first use
    if (CountdownPOD.masterl == undefined){
        return false;
    }
    else {
        return CountdownPOD.masterl;
    }
};
Cookie.prototype.storeCookie = function()
{
    this.cookie.put(
        {
        color: CountdownPrefs.color,
        custom: CountdownPrefs.custom,
        name: CountdownPrefs.name,
		tutorial: CountdownPrefs.tutorial

        }
    );
    this.stats.put(
        {
        games: CountdownStats.games,
        b: CountdownStats.b,
        eb: CountdownStats.eb,
        i: CountdownStats.i ,
        c: CountdownStats.c,
        e: CountdownStats.e,
        m: CountdownStats.m,
        bw: CountdownStats.bw,
        ebw: CountdownStats.ebw,
        iw: CountdownStats.iw ,
        cw: CountdownStats.cw,
        ew: CountdownStats.ew,
        mw: CountdownStats.mw
        }
    );
    this.statsl.put(
        {
        games: CountdownStatsL.games,
        b: CountdownStatsL.b,
        eb: CountdownStatsL.eb,
        i: CountdownStatsL.i ,
        c: CountdownStatsL.c,
        e: CountdownStatsL.e,
        m: CountdownStatsL.m,
        bw: CountdownStatsL.bw,
        ebw: CountdownStatsL.ebw,
        iw: CountdownStatsL.iw ,
        cw: CountdownStatsL.cw,
        ew: CountdownStatsL.ew,
        mw: CountdownStatsL.mw
        }
    );
    
    this.pod.put(
        {
        global: CountdownPOD.global,
        tied: CountdownPOD.tied,
        completion: CountdownPOD.completion,
        puzzles: CountdownPOD.puzzles,
        finished: CountdownPOD.finished,
        started: CountdownPOD.started,
        master: CountdownPOD.master,
        masterl: CountdownPOD.masterl
        }
    );
};