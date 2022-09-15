// const userName = document.querySelector("input[name='userName']");
// const userEmail = document.querySelector("input[name='userEmail']");

const form = document.getElementById("form");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

const alertUserName = document.getElementById("alertUserName");
const alertUserEmail = document.getElementById("alertUserEmail");
const alertSuccess = document.getElementById("alertSuccess");

const showAlertOk = () =>{
    alertSuccess.classList.remove("d-none");
    alertSuccess.textContent = "email is sended allready..!";
}
const showAlertError = (errors) =>{
    errors.forEach(element => {
      element.type.classList.remove("d-none");
      element.type.textContent = element.msg;    

    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    alertSuccess.classList.add("d-none");

    const errors = [];
    
    const regUserName = /^[a-zZ-Z ]*$/;
    const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
    

      if(!regUserName.test(userName.value) || !userName.value.trim()){
        userName.classList.add("is-invalid");
        errors.push({
            type: alertUserName,
            msg: " write only letters for name"
        });
      }else{
        userName.classList.remove("is-invalid");
        userName.classList.add("is-valid");
        alertUserName.classList.add("d-none");
      }  
      if(!regUserEmail.test(userEmail.value)|| !userEmail.value.trim()){
        userEmail.classList.add("is-invalid");
        errors.push({
            type: alertUserEmail,
            msg: " write a valid Email"
        });
 
      }else{
        userEmail.classList.remove("is-invalid");
        userEmail.classList.add("is-valid");
        alertUserEmail.classList.add("d-none");
      }
      if(errors.length !== 0){
        showAlertError(errors);
        return;
      }
      console.log("sended email!!!!!!")
    showAlertOk(); 
});