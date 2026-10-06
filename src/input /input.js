export function setupInput() {
  const input = {
    mouseX: window.innerWidth / 2
  };

  window.addEventListener("pointermove", (event) => {
    input.mouseX = event.clientX;
  });

  return input;
}