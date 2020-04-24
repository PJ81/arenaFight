import Keyboard from "../eng/keyboard.js";
import Player from "../entity/player.js";
import State from "./state.js";

export default class LilDung extends State {
  player: Player;

  constructor(ctx: CanvasRenderingContext2D) {
    super();
  }

  update(dt: number) {
    //
  }

  draw(ctx: CanvasRenderingContext2D) {
    //
  }

  start(keyboard: Keyboard) {
    //
  }
}