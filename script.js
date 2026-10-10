
console.log("Welcome to Dictus Portfolio!");

// 1. Welcome button
const heroButton = document.querySelector(".btn");

function showIntroduction() {
  alert(
    "Hi, I'm Dictus! I'm currently learning JavaScript."
  );
}

if (heroButton) {
  heroButton.addEventListener("click", function () {
    showIntroduction();
  });
}

// 2. Developer information
const developerName = "Dictus";
const currentSkill = "JavaScript";

console.log("Developer: " + developerName);
console.log("Currently learning: " + currentSkill);

// 3. Dark/light mode toggle
const themeButton = document.querySelector("#theme-toggle");

if (themeButton) {
  themeButton.textContent = "Switch to Light";

  themeButton.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
      themeButton.textContent = "Switch to Dark";
    } else {
      themeButton.textContent = "Switch to Light";
    }
  });
}

// 4. Next learning goal
const goalButton = document.querySelector("#goal-button");
const goalMessage = document.querySelector("#goal-message");

if (goalButton && goalMessage) {
  goalButton.addEventListener("click", function () {
    goalMessage.textContent =
      "My next goal is to master JavaScript and build useful digital products!";
  });
}

// 5. Skills array
const mySkills = [
  "HTML",
  "CSS",
  "JavaScript — Learning",
  "Git — Learning",
  "Responsive Design"
];

// Display skills on the webpage
const skillsList = document.querySelector("#skills-list");

if (skillsList) {
  skillsList.innerHTML = "";

  for (let i = 0; i < mySkills.length; i++) {
    const skillTag = document.createElement("span");

    skillTag.textContent = mySkills[i];

    skillsList.appendChild(skillTag);
  }
}

// Display skills in the browser console
for (let i = 0; i < mySkills.length; i++) {
  console.log("Skill: " + mySkills[i]);
}