import { setupCanvas } from "./src/canvas/setupCanvas.js";
import { setupInput } from "./src/input/input.js";
import { startLoop } from "./src/canvas/loop.js";

const canvas = document.getElementById("canvas");

const ctx = setupCanvas(canvas);
const input = setupInput();

startLoop(ctx, input);