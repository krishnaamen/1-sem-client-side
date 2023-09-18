import validatedForm from "./login-validation.js";

const form = document.getElementById("login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);

  const name = data.get("name");
  console.log(name);

  if (validatedForm(data)) {
    createLogin();
  }
});

function createLogin() {
  console.log("login created");
}
