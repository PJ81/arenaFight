import { PLAY } from "../eng/const.js";
import Keyboard from "../eng/keyboard.js";
import State from "./state.js";

export default class Menu extends State {

  constructor() {
    super();
    this.update = (dt: number) => { }
  }

  start(keyboard: Keyboard) {
    keyboard.addKey(32, () => {
      window.dispatchEvent(new CustomEvent("StateChange", {
        detail: {
          state: PLAY
        }
      }));
    });
  }

  draw(ctx: CanvasRenderingContext2D) {
    //
  }
}