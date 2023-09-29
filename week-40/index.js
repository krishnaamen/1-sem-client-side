import { deleteClass, getAllClasses } from "./firebase-api.js";

window.addEventListener("load", async () => {
  const allClasses = await getAllClasses();

  const allClassesElements = allClasses.map((oneClass) => {
    return createClassElement(oneClass);
  });

  document.querySelector(".all-classes").append(...allClassesElements);
});

/**
 *
 * @param {*} oneClass: classYear, id, international, name, studyLine
 * @returns
 */
function createClassElement(oneClass) {
  console.log(oneClass);
  // Class name
  const h2 = document.createElement("h4");
  h2.innerHTML = oneClass.name;
  h2.id = oneClass.id;

  // Class studyline and year
  const p = document.createElement("p");
  p.innerHTML = `${oneClass.studyLine} - ${oneClass.classYear}`;

  // Delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "delete";

  deleteButton.addEventListener("click", async () => {
    const response = await deleteClass(oneClass.id);
    if (response.ok) {
      div.remove();
    }
  });

  // Update button
  const updateButton = document.createElement("a");
  updateButton.textContent = "update";
  updateButton.href = "update/?id=" + oneClass.id;

  // Button group div
  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("corner");
  buttonsDiv.append(deleteButton, updateButton);

  // Overall all div
  const div = document.createElement("div");
  div.classList.add("class-card");
  div.append(buttonsDiv, h2, p);

  return div;
}
