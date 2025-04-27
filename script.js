const button = document.getElementById("alertButton");

const heading = document.createElement("h3");
heading.textContent = "You haven't clicked the button yet!";
heading.style.color = "#555";
heading.style.marginTop = "20px";

document.querySelector(".container section").appendChild(heading);

button.addEventListener("click", function() {
  alert("👋 Hello! Thanks for visiting my webpage!");
  button.textContent = "You Clicked Me! 🎉";
  heading.textContent = "Thanks for clicking the button!";
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
});

function getRandomColor() {
  const colors = ["#FFADAD", "#FFD6A5", "#FDFFB6", "#CAFFBF", "#9BF6FF", "#A0C4FF", "#BDB2FF"];
  return colors[Math.floor(Math.random() * colors.length)];
}
