const loginUserBtn = document.getElementById("button_login_user");

loginUserBtn.addEventListener("click", (e) => {
  e.preventDefault();

  var email = document.getElementById("input_email_id").value;
  var password = document.getElementById("input_password").value;

  const url = tranzact_host + "main/login/password-login/";

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {})
    .catch((error) => {
      console.log("Error:", error);
    });
});

document.getElementById("button_logout_user").addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.clear();
  location.reload();
});
