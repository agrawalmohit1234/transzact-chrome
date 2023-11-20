/* List of global variables*/

var tranzact_host = "https://be.letstranzact.com/";
var token;

function start_initial_steps() {
  token = localStorage.getItem("auth_token");
  var email = localStorage.getItem("email_id");

  let url = tranzact_host + "main/login/api-token-refresh/";
  const data = {
    token: token,
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("log_in_block").style = "display: none";
      document.getElementById("log_out_block").style = "display: block";
      document.getElementById("logged_in_user_id").innerHTML = email;
      localStorage.setItem("auth_token", token);
      document.getElementById("success_msg").style = "display: block";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

document.getElementById("button_login_user").addEventListener("click", () => {
  start_initial_steps();
});
