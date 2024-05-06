const inputBox = document.querySelectorAll(".input");
const checked = document.querySelectorAll(".checkbox");
const progressBar = document.querySelector(".progress-value");
const noOfGoals = document.querySelector(".no-of-goals");
const tasks = [];
let bar = 0;

const getTasks = () => {
  console.log("inside getTask");
  inputBox.forEach((input) => tasks.push(input.value));
};

inputBox.forEach((input) => input.addEventListener("blur", getTasks));

const checkBarProgress = () => {
  bar = 0;
  inputBox.forEach((input) => {
    if (input.previousElementSibling.src.includes("Group")) bar++;
  });
};

checked.forEach((checkbox) =>
  checkbox.addEventListener("click", (e) => {
    const selectedId = e.target.nextElementSibling.id;
    const checkedElement = document.querySelector(`#${selectedId}`);
    if (checkedElement.value === "") return;
    if (checkedElement.previousElementSibling.src.includes("Ellipse")) {
      checkedElement.previousElementSibling.setAttribute(
        "src",
        "./images/Group 1.png"
      );
      checkedElement.style.color = "#48a300";
      checkedElement.style.textDecoration = "line-through";
    } else {
      checkedElement.previousElementSibling.setAttribute(
        "src",
        "./images/Ellipse 4.png"
      );
      checkedElement.style.color = "#000000";
      checkedElement.style.textDecoration = "none";
    }
    checkBarProgress();
    progressBar.firstElementChild.innerHTML = `${bar}/3 Completed`;
    progressBar.style.width = `${bar * 33}%`;
    noOfGoals.innerHTML = bar < 3 ? `Please set all the ${3 - bar} goals!` : "";
  })
);
