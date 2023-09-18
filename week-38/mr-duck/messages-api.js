export async function getFromFirebase() {
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

export async function saveToFirebase(message) {
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
