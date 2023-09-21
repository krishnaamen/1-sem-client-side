document.getElementById("generate").addEventListener("click", () => {
  fetch(
    "https://web-1st-semester-default-rtdb.europe-west1.firebasedatabase.app/mr-duck/mtnl.json",
    {
      method: "POST",
      body: JSON.stringify("Hello again"),
    }
  );
});

document.getElementById("get").addEventListener("click", async () => {
  const response = await fetch(
    "https://web-1st-semester-default-rtdb.europe-west1.firebasedatabase.app/mr-duck/mtnl.json"
  );
  const body = await response.json();
  const arr = Object.values(body);
  console.log(arr);
});
