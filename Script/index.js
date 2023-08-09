
const btnEl=document.querySelector(".btn");

const inputEl=document.getElementById("Password");

const copyIcon=document.querySelector(".fa-copy");

const alertEl=document.querySelector(".alert-container");


btnEl.addEventListener("click",()=>{
    genaratePassword();
});

copyIcon.addEventListener("click",()=>{
    copyPassword();
    
    if(inputEl.value){
        alertEl.classList.remove("active");
        setTimeout(()=>{
            alertEl.classList.add("active");
        },2000)
    }
});


function genaratePassword(){
    const chars="0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const pswrdLength=14;
    let password="";
    for (let index = 0; index < pswrdLength; index++) {
        const randomNum=Math.floor(Math.random() * chars.length);
        password+=chars.substring(randomNum,randomNum+1);
    }

    inputEl.value=password;

    alertEl.innerText="Password Copied !";
}


function copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0,9999);
    navigator.clipboard.writeText(inputEl.value);
}
