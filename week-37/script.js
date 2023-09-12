const sendButton = document.getElementById("send-button");
const inputField = document.querySelector("#input-field");
const messagesContainer = document.querySelector(".messages");
const nameInput = document.querySelector("#my-name");
const forceButton = document.querySelector("#force");
const sendForm = document.querySelector("#send-form");

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
async function handleClick(event) {
  event.preventDefault();
  // Get the user message
  const message = inputField.value;
  const timestamp = newDateInRequestedFormat();

  const obj = {
    message,
    timestamp,
  };

  const response = await saveToFirebase(obj);

  if (response.ok) {
    const body = await response.json();
    // Create new p element
    const newP = document.createElement("p");

    // Set the inner text of the new p element
    newP.innerText = message;
    newP.title = newDateInRequestedFormat();
    newP.id = body.name;

    // Append the new p element to the DOM.
    messagesContainer.appendChild(newP);
  } else {
    alert("Sorry, my site is not working. Come back later.");
  }
}

async function saveToFirebase(message) {
  const response = await fetch(
    "https://web-1st-semester-default-rtdb.europe-west1.firebasedatabase.app/mr-duck/mtnl.json",
    {
      method: "POST",
      body: JSON.stringify(message),
    }
  );
  console.log(response);
  return response;
}

async function getFromFirebase() {
  const response = await fetch(
    "https://web-1st-semester-default-rtdb.europe-west1.firebasedatabase.app/mr-duck/mtnl.json"
  );
  console.log(response);

  const body = await response.json();
  console.log(body);

  const toArray = Object.values(body);
  console.log(toArray);
  return toArray;
}

sendForm.addEventListener("submit", handleClick);

function toHtmlElements(inputs) {
  // Goal: Transforms Array of Objects into Array of HTML Elements.
  const elements = inputs.map((input) => {
    const p = document.createElement("p");
    p.innerHTML = input.message;
    p.title = input.timestamp;
    return p;
  });
  return elements;
}

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

function bruteForcingDateFormat() {
  const now = new Date();

  const date = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();
  const hour = now.getHours();
  const minutes = now.getMinutes();

  const datePart = `${date}/${month}/${year}`;
  const timePart = `${hour}:${minutes}`;

  return datePart + ", " + timePart;
}

async function handleForce() {
  // 1 todo: Get the joke
  const response = await fetch("https://v2.jokeapi.dev/joke/Any", {
    method: "GET",
  });

  const body = await response.json();

  console.log(body);

  const type = body.type;

  if (type == "twopart") {
    const setup = body.setup;
    const delivery = body.delivery;

    const pSetup = document.createElement("p");
    pSetup.innerText = setup;
    pSetup.classList.add("duck");
    messagesContainer.appendChild(pSetup);

    const pDelivery = document.createElement("p");
    pDelivery.innerText = delivery;
    pDelivery.classList.add("duck");
    messagesContainer.appendChild(pDelivery);
  } else {
    const joke = body.joke;

    const pJoke = document.createElement("p");
    pJoke.innerText = joke;
    pJoke.classList.add("duck");
    messagesContainer.appendChild(pJoke);
  }
}

forceButton.addEventListener("click", handleForce);

window.addEventListener("load", async () => {
  const array = await getFromFirebase();

  const elements = toHtmlElements(array);
  console.log(elements);

  messagesContainer.append(...elements);
});

const imageToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (e) => reject(e);
  });

function base64ToImage(base64) {
  var image = new Image();
  image.src = base64;
  return image;
}

const imageInput = document.querySelector("#image-upload");
const saveImage = document.querySelector("#save-image");

saveImage.addEventListener("click", async () => {
  console.log(imageInput);
  const test = imageInput.files[0];
  console.log(test);
  const base64 = await imageToBase64(test);

  const response = await fetch(
    "https://web-1st-semester-default-rtdb.europe-west1.firebasedatabase.app/images/mtnl.json",
    {
      method: "PUT",
      body: JSON.stringify(base64),
    }
  );
  const body = await response.json();
  console.log(response);
  console.log(body);
});

window.addEventListener("load", async () => {
  const response = await fetch(
    "https://web-1st-semester-default-rtdb.europe-west1.firebasedatabase.app/images/mtnl.json"
  );
  const body = await response.json();
  console.log(body);
  const imageElement = base64ToImage(body);
  document.body.append(imageElement);
});
