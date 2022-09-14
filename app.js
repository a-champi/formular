const form = document.getElementById("form");

// const userName = document.getElementById("userName");
// const userEmail = document.getElementById("userEmail");

const userName = document.querySelector("input[name='userName']");
const userEmail = document.querySelector("input[name='userEmail']");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Username: ", userName.value);
    console.log("UserEmail: ", userEmail.value);
    

})