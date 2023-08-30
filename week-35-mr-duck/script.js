const sendButton = document.getElementById("send-button");
const inputField = document.querySelector("#input-field");
const messagesContainer = document.querySelector(".messages");

function handleClick() {
  //console.log("hello");
  console.log(inputField.value);
  //methodOne()
  methodTwo();
}

function methodTwo() {
  const message = inputField.value;
  const newP = document.createElement("p");
  newP.innerText = message;
  messagesContainer.appendChild(newP);
}

function methodOne() {
  //Method 1:
  const message = inputField.value;
  const result = "<p>" + message + "</p>";
  const result2 = `<p>${message}</p>`;
  const currentHtml = messagesContainer.innerHTML;
  messagesContainer.innerHTML = currentHtml + result;
}

sendButton.addEventListener("click", handleClick);
