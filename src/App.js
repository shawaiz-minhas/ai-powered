const words = ["Productivity", "Agents", "Workspace", "Workflows", "Workforce"];
let index = 0;
const textElement = document.getElementById("text");

function changeText() {
  textElement.classList.add("fade-out");

  // After the fade-out transition ends, change the text and apply fade-in
  setTimeout(() => {
    textElement.textContent = words[index];
    index = (index + 1) % words.length;

    textElement.classList.remove("fade-out");
    textElement.classList.add("fade-in");

    // After fade-in transition ends, remove fade-in class
    setTimeout(() => {
      textElement.classList.remove("fade-in");
    }, 1000); // This should match the SCSS transition duration
  }, 1000); // This should match the SCSS transition duration
}

// Change text every 3 seconds (3000 milliseconds)
setInterval(changeText, 3000);
