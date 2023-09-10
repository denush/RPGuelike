import { canvas, ctx } from "./canvas";

export function loop() {
  requestAnimationFrame(loop);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "dodgerblue";
  ctx.fillRect(100, 100, 100, 100);
}
