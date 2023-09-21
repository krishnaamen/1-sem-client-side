# CSS error show/hide

```css
.error {
  border: 1px solid red;
}

error-message {
  visibility: hidden;
}

input.error + error-message {
  visibility: visible;
}
```

# Clone template

```js
function getTemplateClone() {
  // get the template from HTML
  const template = document.getElementById("template");

  // Clone template
  const clone = document.importNode(template.content, true);
  return clone;
}
```

```js
const nameInput = document.getElementById("name");

nameInput.addEventListener("change", () => {
  const validated = validateNameInput();
  if (validated) {
    nameInput.classList.remove("error");
  } else {
    nameInput.classList.add("error");
  }
  console.log(validated);
});

function validateNameInput() {
  const input = nameInput.value;

  if (input.length <= 0) {
    // String is empty.
    console.log("empty");
    return false;
  }

  return true;
}

document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validateNameInput()) {
    return false;
  }

  console.log("submitted");
});
```
