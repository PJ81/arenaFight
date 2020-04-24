
import { MENU } from "../eng/const.js";
import Keyboard from "../eng/keyboard.js";
import State from "./state.js";

export default class GameOver extends State {
  constructor() {
    super();
    this.update = (dt: number) => { }
  }

  start(keyboard: Keyboard) {
    keyboard.addKey(32, () => {
      window.dispatchEvent(new CustomEvent("StateChange", {
        detail: {
          state: MENU
        }
      }));
    });
  }

  draw(ctx: CanvasRenderingContext2D) {
    //
  }
}