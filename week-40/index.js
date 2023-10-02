import createClassElement from "./create-class-element.js";
import { getAllClasses } from "./api/firebase-api.js";
import { userAuthValidation } from "./api/auth-proxy.js";

window.addEventListener("load", async () => {
  const userObject = userAuthValidation();
  let user;

  if (userObject) {
    user = JSON.parse(userObject);
  } else {
    window.location.href = "/week-40/login";
  }

  const allClasses = await getAllClasses();

  const allClassesElements = allClasses.map((oneClass) => {
    return createClassElement(oneClass, user.role);
  });

  document.querySelector(".all-classes").append(...allClassesElements);
});
