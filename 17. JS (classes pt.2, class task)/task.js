//Human class
class Human {
  constructor(name, surname, gender, nationality, age = 0) {
    this.name = name;
    this.surname = surname;
    this.gender = gender;
    this.nationality = nationality;
    this.age = age;
  }

  //methods
  getFullName() {
    return `${this.name} ${this.surname}`;
  }
  getBirthYear() {
    let currentYear = new Date().getFullYear();
    return currentYear - this.age;
  }
}

//User class
class User extends Human {
  //property
  isLogged = false;
  //constructor
  constructor(
    name,
    surname,
    gender,
    nationality,
    username,
    email,
    isAdmin,
    password,
    bio,
    age = 0
  ) {
    super(name, surname, gender, nationality, age);
    this.username = username;
    this.email = email;
    this.isAdmin = isAdmin;
    if (password.length > 5) this.password = password;
    else throw new Error("password length should be at least 5 chars");
    if (bio.length < 100) this.bio = bio;
    else throw new Error("bio length should be max 100 chars");
    this.isLogged = false;
  }

  //methods
  changePassword(currentPass, newPass) {
    if (currentPass === this.password && newPass.length > 5) {
      if (currentPass === newPass) {
        window.alert("current password is same with new password!");
        return `current password is same with new password!`;
      } else {
        this.password = newPass;
        window.alert("password successfully updated!");
        return { username: this.username, newPassword: newPass };
      }
    } else {
      window.alert("current password in incorrect!");
      return `current password in incorrect!`;
    }
  }
  changeEmail(usersArr, newEmail) {
    if (usersArr.some((user) => user.email === newEmail)) {
      window.alert("email already in use!");
      return `email already in use!`;
    } else {
      window.alert("email successfully updated!");
      this.email = newEmail;
    }
  }
}

let users = [
  new User(
    "John",
    "Doe",
    "Male",
    "American",
    "johndoe",
    "john.doe@example.com",
    false,
    "password123",
    "A bit about John.",
    30
  ),
  new User(
    "Jane",
    "Doe",
    "Female",
    "British",
    "janedoe",
    "jane.doe@example.com",
    true,
    "securepassword",
    "Jane's bio goes here.",
    28
  ),
  new User(
    "Alex",
    "Smith",
    "Non-binary",
    "Canadian",
    "alexsmith",
    "alex.smith@example.com",
    false,
    "alexspassword",
    "All about Alex.",
    35
  ),
  new User(
    "Emily",
    "Clark",
    "Female",
    "Australian",
    "emilyclark",
    "emily.clark@example.com",
    false,
    "emilyspassword",
    "Explorer and photographer.",
    26
  ),
  new User(
    "Michael",
    "Brown",
    "Male",
    "German",
    "michaelbrown",
    "michael.brown@example.com",
    true,
    "michaelspass",
    "Coffee enthusiast. Avid reader.",
    32
  ),
  new User(
    "Luis",
    "Gomez",
    "Male",
    "Spanish",
    "luisgomez",
    "luis.gomez@example.com",
    false,
    "luispassword",
    "Music lover, Guitar player.",
    29
  ),
  new User(
    "Sophia",
    "Lopez",
    "Female",
    "Mexican",
    "sophialopez",
    "sophia.lopez@example.com",
    true,
    "sophiaspassword",
    "Digital marketer and content creator.",
    31
  ),
];

//global functions
function sortUsersByUsername(arr) {
  return arr.sort((a, b) => a.username.localeCompare(b.username));
}
function filterByBirthYear(arr, year) {
  return arr.filter((user) => user.getBirthYear() > year);
}
function login(arr, username, password) {
  let found = arr.find((user) => user.username === username);
  if (found) {
    if (found.username === username && found.password === password) {
      if (arr.some((user) => user.isLogged)) {
        window.alert(`another user currently logged in`);
        return `another user currently logged in`;
      } else {
        window.alert(`user successfully logged in`);
        found.isLogged = true;
        return found;
      }
    } else {
      window.alert(`incorrect username or password`);
      return `incorrect username or password`;
    }
  } else {
    window.alert("no such user found");
    return `no such user found`;
  }
}
function logout(arr, username) {
  let found = arr.find((user) => user.username === username);
  if (found) {
    if (found.isLogged) {
      found.isLogged = false;
      window.alert(`user successfully logged out!`);
      return `user successfully logged out!`;
    } else {
      window.alert(`user did not logged in to log out!`);
      return `user did not logged in to log out!`;
    }
  } else {
    window.alert("no such user found");
    return `no such user found`;
  }
}
function createUser(arr, newUser) {
  arr.push(newUser);
  window.alert("user pushed to array!");
  return arr;
}
function deleteUser(arr, username) {
  let found = arr.find((user) => user.username === username);
  if (found) {
    let idx = arr.findIndex((user)=>user.username === username);
    arr.splice(idx,1);
    window.alert(`user deleted successfully!`);
    return `user deleted successfully!`;
  } else {
    window.alert("no such user found");
    return `no such user found`;
  }
}