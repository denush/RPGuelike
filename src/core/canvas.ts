const canvas = document.getElementById("canvas-primary") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

canvas.width = 800;
canvas.height = 600;

canvas.style.border = "1px solid black";

export { canvas, ctx };
