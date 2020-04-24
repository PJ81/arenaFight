import { GMOR, MENU, PLAY } from "./eng/const.js";
import Game from "./eng/game.js";
import GameOver from "./sm/gameOver.js";
import LilDung from "./sm/ld.js";
import Menu from "./sm/menu.js";
import State from "./sm/state.js";

class MyGame extends Game {
  curState: State;
  game: State;
  over: State;
  menu: State;

  constructor() {
    super();
    this.game = new LilDung(this.ctx);
    this.menu = new Menu();
    this.over = new GameOver();

    window.addEventListener("StateChange", (e: CustomEvent) => {
      this.keyboard.clear();
      switch (e.detail.state) {
        case PLAY:
          this.curState = this.game;
          this.curState.start(this.keyboard)
          break;
        case MENU:
          this.curState = this.menu;
          this.curState.start(this.keyboard);
          break;
        case GMOR:
          this.curState = this.over;
          this.curState.start(this.keyboard);
          break;
      }
    });
  }

  update(dt: number) {
    this.curState.update(dt);
  }

  draw() {
    this.curState.draw(this.ctx);
  }
}

const g = new MyGame();
window.dispatchEvent(new CustomEvent("StateChange", {
  detail: {
    state: MENU
  }
}));

while (!g.curState) { }
g.loop();