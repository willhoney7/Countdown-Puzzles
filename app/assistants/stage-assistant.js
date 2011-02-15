/*
This file is part of Countdown.

    Countdown is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 2 of the License, or
    (at your option) any later version.

    Countdown is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Countdown.  If not, see <http://www.gnu.org/licenses/>.
*/

function StageAssistant() {
}

StageAssistant.prototype.setup = function() {
    $$('body')[0].addClassName('palm-dark');
    Mojo.Controller.stageController.pushScene("main");
}

StageAssistant.prototype.handleCommand = function (event) {
    var currentScene = this.controller.activeScene();
 
    switch(event.type) {
        case Mojo.Event.command:
            switch (event.command) {   
                case Mojo.Menu.prefsCmd:
                    this.controller.pushScene('pref');
                    break;
                case 'do-puzzlemaker':
                    Mojo.Controller.stageController.pushScene({name: "game", disableSceneScroller:true}, {title: "Puzzlemaker"}, "puzzlemaker");
					break;
                case 'do-records':
                    Mojo.Controller.stageController.pushScene({name: "records"/*, disableSceneScroller:true*/});
					break;
                case 'do-pref':
					Mojo.Controller.stageController.pushScene("pref");
					break;
                case 'do-about':
					Mojo.Controller.stageController.pushScene("about");
					break;
                case 'do-help':
					Mojo.Controller.stageController.pushScene("help");
					break;
                case 'do-submissions':
                    Mojo.Controller.stageController.pushScene("submissions");
					break;
            }
        break;
    }
};