import { createLogin } from "../../api/auth-proxy.js";

const form = document.getElementById("create-login-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Get the data from the form.
  const data = new FormData(form);
  try {
    const response = await createLogin(
      data.get("email"),
      data.get("password"),
      data.get("confirm-password")
    );

    localStorage.setItem("userObject", JSON.stringify(response));

    console.log(response);
    // We are redirecting to index page
    window.location.href = "/week-40/";
  } catch (error) {
    console.log("error happened: ", error);
  }
});
