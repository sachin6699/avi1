const changeBackground = () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
};
const button = document.querySelector(".learn-more");
button.addEventListener("click", changeBackground);
