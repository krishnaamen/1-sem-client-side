// All the code related to authentication of our users.

const authAPI =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDov5v-0OIqf3JbTINyc-yJdt4OX91sVdY";

/*
// For now, it is just a Mock.
This is the mocked version of the createLogin functionality:

const mockUserObject = {
  userId: 1,
  role: "student",
  token: "eyASDklnweinlkjsdfljsdflkjsfdflnksdkljn",
};

export async function createLogin(email, password, confirm) {
  // Do something
  return new Promise((resolve, reject) => {
    // We Mock some kind of server validation
    if (password !== confirm) {
      reject("Passwords don't match");
    } else {
      resolve({ ...mockUserObject, email });
    }
  });
}
*/

export async function createLogin(email, password, confirm) {
  const response = fetch(authAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true,
    }),
  });
  return response;
}

export async function login() {
  // Do something
}

export async function logout() {
  // Do something
}

// A function, to retrieve the stored user information.
export function userAuthValidation() {
  const userObject = localStorage.getItem("userObject");
  return userObject;
}
