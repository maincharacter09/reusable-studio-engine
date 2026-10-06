export function setupCanvas(canvas) {
  const ctx = canvas.getContext("2d");

  function resize() {
    const pixelRatio = window.devicePixelRatio || 1;

    canvas.width = window.innerWidth * pixelRatio;
    canvas.height = window.innerHeight * pixelRatio;

    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  }

  resize();

  window.addEventListener("resize", resize);

  return ctx;
}