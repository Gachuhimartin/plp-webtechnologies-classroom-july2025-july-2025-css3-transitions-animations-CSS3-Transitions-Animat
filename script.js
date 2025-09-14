// 🎬 Part 2: Functions, Scope, Parameters, Return Values

// Example 1: Function with parameters + return value
function calculateTotal(quantity, price) {
  return quantity * price;
}

// Example 2: Demonstrating scope
let globalMessage = "Hello from the global scope!";

function showMessage() {
  let localMessage = "Hello from the local scope!";
  console.log(globalMessage); // ✅ accessible
  console.log(localMessage);  // ✅ only inside function
}

showMessage();

// Example 3: Reusable function to toggle animation
function toggleSpin(elementId) {
  const el = document.getElementById(elementId);
  el.classList.toggle("spin");
}

// 🎨 Part 3: Combining CSS + JS
document.getElementById("animateBtn").addEventListener("click", () => {
  toggleSpin("animateBox");
});

// Modal popup logic
const modal = document.getElementById("modal");
document.getElementById("showModalBtn").addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("show");
});

document.getElementById("closeModalBtn").addEventListener("click", () => {
  modal.classList.remove("show");
  setTimeout(() => modal.classList.add("hidden"), 500); // wait for animation
});

// Example of function with return values controlling logic
function shouldAnimate(userChoice) {
  return userChoice === "yes";
}

// Simulated decision:
if (shouldAnimate("yes")) {
  console.log("User chose to animate!");
}
