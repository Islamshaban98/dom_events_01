// - Add the necessary code to show the content related to tabs.
const buttons = document.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener(
    "click",
    Clicking.bind(this, "content-" + (i + 1))
  );
}

function Clicking(contenId) {
  let buttonContent;
  buttonContent = document.getElementsByClassName("content");
  for (let i = 0; i < buttonContent.length; i++) {
    buttonContent[i].style.display = "none";
  }
  document.getElementById(contenId).style.display = "block";
  let lists = document.getElementsByTagName("li");
  for (let i = 0; i < lists.length; i++) {
    lists[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
}
// - Count how many times the user opened the 2nd tab `TWO`.

const tabTwo = document.querySelector(
  "body > div.container > ul > li:nth-child(2) > button"
);
let count = 0;
tabTwo.addEventListener("click", function () {
  count += 1;
  document.querySelector(
    "body > div.container > h1"
  ).textContent = `Events ${count}`;
});

//   - Pressing keyboard keys 1 to 4 should do same  effect as clicking.
document.addEventListener("keypress", press);
function press(event) {
  let lists = document.getElementsByTagName("li");
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  switch (event.key) {
    case "1":
      Clicking("content-1");
      lists[0].className += " active";
      break;
    case "2":
      Clicking("content-2");
      count += 1;
      document.querySelector("body > div.container > h1").textContent = `Events ${count}`;
      lists[1].className += " active";
      break;
    case "3":
      Clicking("content-3");
      lists[2].className += " active";
      break;
    case "4":
      Clicking("content-4");
      lists[3].className += " active";
      break;
  }
}
