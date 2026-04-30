function field() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let error = document.getElementById("error");

  if (username === "") {
    error.innerText = " Username is required!";
  }else if (username.length < 3) {
    error.innerText = " Username too short! Minimum 3 characters.";
  } else if (password === "") {
    error.innerText = " Password is required!";
  } else if (password.length < 6) {
    error.innerText = " Password too short! Minimum 6 characters.";
  } else {
    error.innerText = " Login Successful!✅";
  }
}