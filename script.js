document.addEventListener("DOMContentLoaded", () => {
  const mensajes = document.querySelectorAll(".mensaje");
  let index = 0;

  setInterval(() => {
    mensajes[index].classList.remove("visible");
    index = (index + 1) % mensajes.length;
    mensajes[index].classList.add("visible");
  }, 7000);
});

