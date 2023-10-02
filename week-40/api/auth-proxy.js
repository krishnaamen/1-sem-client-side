// All the code related to authentication of our users.

// For now, it is just a Mock.

const mockUserObject = {
  userId: 1,
  role: "student",
  token: "eyASDklnweinlkjsdfljsdflkjsfdflnksdkljn",
};

/*
This is the mocked version of the createLogin functionality:

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
