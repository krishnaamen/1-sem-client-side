const sendButton = document.getElementById("send-button");
const inputField = document.querySelector("#input-field");
const messagesContainer = document.querySelector(".messages");
const nameInput = document.querySelector("#my-name");

function handleNameInput() {
  console.log("Hello from name input function");
  const myName = nameInput.value;

  const p = document.createElement("p");
  p.classList.add("duck");

  p.innerText = "Hello " + myName;
  p.title = newDateInRequestedFormat();

  // Append the new p element to the DOM.
  messagesContainer.appendChild(p);
}

nameInput.addEventListener("change", handleNameInput);

// Simplified version from last week
function handleClick() {
  // Get the user message
  const message = inputField.value;

  // Create new p element
  const newP = document.createElement("p");

  // Set the inner text of the new p element
  newP.innerText = message;
  newP.title = newDateInRequestedFormat();

  // Append the new p element to the DOM.
  messagesContainer.appendChild(newP);
}

sendButton.addEventListener("click", handleClick);

// Format: DD/MM/YYYY, hh:mm
function newDateInRequestedFormat() {
  const now = new Date();
  /*
  const date = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();
  */
  const toReturn = now.toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return toReturn;
}
