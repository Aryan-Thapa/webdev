const randomValue = () => {
  return Math.floor(Math.random() * 16);
};
const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[randomValue()];
  }
  return color;
};

let colorChanger;
document.getElementById("startBtn").addEventListener("click", () => {
  if (colorChanger==null) {
    colorChanger = setInterval(() => {
      document.body.style.backgroundColor = randomColor();
    }, 1000);
  }
});

document.getElementById("stopBtn").addEventListener("click", () => {
  clearTimeout(colorChanger);
  colorChanger = null;
});
