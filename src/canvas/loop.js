export function startLoop(ctx, input) {
  let time = 0;

  function loop() {
    time += 0.03;

    const width = window.innerWidth;
    const height = window.innerHeight;

    ctx.clearRect(0, 0, width, height);

    // Mouse position controls the circle
    const mouseAmount = input.mouseX / width;

    // Easy-to-change settings
    const minRadius = 40;
    const maxRadius = 160;
    const glowSize = 55;

    // Calculate the circle size
    const baseRadius =
      minRadius + mouseAmount * (maxRadius - minRadius);

    // Make the circle pulse
    const pulse =
      Math.sin(time * (1 + mouseAmount * 5)) * 12;

    const radius = baseRadius + pulse;

    const centerX = width / 2;
    const centerY = height / 2;

    // Draw the glowing circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);

    ctx.shadowBlur = glowSize;
    ctx.shadowColor = "brown";

    ctx.strokeStyle = "white";
    ctx.lineWidth = 5;
    ctx.stroke();

    // Reset the glow
    ctx.shadowBlur = 0;

    requestAnimationFrame(loop);
  }

  loop();
}