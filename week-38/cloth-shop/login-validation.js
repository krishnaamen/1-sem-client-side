export default function validatedForm(data) {
  // Validate the form, please.
  validateName(data.get("name"));
}

function validateName(name) {
  const result = name.length >= 2;

  if (result) {
    return true;
  } else {
    // An error happened, or, wrong input.
    const input = document.getElementById("name");
    input.classList.add("error");
    return false;
  }
}
