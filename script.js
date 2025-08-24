// Login BTN Functionality

document.getElementById("login-btn").addEventListener("click", function (event) {
    event.preventDefault();

    const mobileNumber = 11223344556;
    const pinNumber = 2233;

    const mobileNumberValue = document.getElementById("phone-number").value;
    const mobileNumberValueConverted = parseInt(mobileNumberValue);
    
    const pinNumberValue = document.getElementById("user-pass").value;
    const pinNumberValueConverted = parseInt(pinNumberValue);

    if (mobileNumberValueConverted === mobileNumber && 
        pinNumberValueConverted === pinNumber) {

        window.location.href="./home.html"

    }
    else {
        alert("Invalid Credentials");
    }
});