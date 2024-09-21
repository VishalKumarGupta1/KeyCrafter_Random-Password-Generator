let showpassword = document.querySelector(".password");
let range = document.querySelector(".range");
let Uppercase = document.querySelector("#Uppercase");
let Lowercase = document.querySelector("#Lowercase");
let Number = document.querySelector("#Number");
let symbol = document.querySelector("#symbol");
let btn = document.querySelector("#btn");
let copypass = document.querySelector(".fa-copy");

// click to copy password
copypass.addEventListener("click", () => {
    navigator.clipboard.writeText(showpassword.innerText);
    alert("Copied");
});
showpassword.addEventListener("click", () => {
    navigator.clipboard.writeText(showpassword.innerText);

});


const getpassword = () => {
    let length = range.value;
    let res
    let password = "";
    let result = "";

    if (Uppercase.checked == true) {
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        password = password + str;
    }
    if (Lowercase.checked == true) {
        let str = "abcdefghijklmnopqrstuvwxyz";
        password = password + str;
    }
    if (Number.checked == true) {
        let str = "0123456789";
        password = password + str;
    }
    if (symbol.checked == true) {
        let str = "!@#$%^&*()-_=+[]{}|\;:',.<>?/";
        password = password + str;
    }
    // console.log(password);
    // console.log(length);


    for (let i = 0; i < length; i++) {
        result = result + password[Math.floor(Math.random() * password.length)];

    }
    // console.log(result);
    showpassword.innerHTML = result;

    // check if user does not select at least one then show alert
    if (Uppercase.checked == false && Lowercase.checked == false && Number.checked == false && symbol.checked == false) {
        alert("Please Select at Least One");
        result = "";
        showpassword.innerHTML = result;
    }
};

// click to generate password
btn.addEventListener("click", getpassword);

// show the length of range
range.addEventListener('input', function () {
    document.querySelector(".value").textContent = `Length :  ${range.value}`;
});
