const validPin = 1234;

// Functions to get input values.

function getInputValueNumber (id) {

    const inputFieldValueNumber = parseInt(document.getElementById(id).value);

    return inputFieldValueNumber;

}


function getInputValue (id) {

    const inputFieldValue = document.getElementById(id).value;

    return inputFieldValue;

}


// function to get innerText

function getInnerText (id) {

    const elementValueNumber = parseInt(document.getElementById(id).innerText);

    return elementValueNumber;

}


function setInnerText (value) {

    const availableBalanceEle = document.getElementById("available-balance");

    availableBalanceEle.innerText = value;

}


// Function to toggle

function handleToggle (id) {

    const forms = document.getElementsByClassName("form")

    for (const form of forms) {
        form.style.display = "none"
    }

    document.getElementById(id).style.display = "block";

}

// Functions to toggle buttons

function handleButtonToggle (id) {
    const formBtns = document.getElementsByClassName("form-btn");

    for (const btns of formBtns) {

        btns.classList.remove("border-[#0874f2]", "bg-[#A0BCFA]");

        btns.classList.add("border-gray-300");

    }

    document.getElementById(id).classList.remove("border-gray-300");

    document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#A0BCFA]");
}


// Add Money Functionalities.

document.getElementById("add-money-btn").addEventListener("click", function (event) {
    event.preventDefault();
    
    const bank = getInputValue("bank");

    const accountNumber = getInputValue("acc-num");

    const amountAdded = getInputValueNumber("add-amount");

    const pinNumber = getInputValueNumber("add-pin");

    // Available Balance Functions.
    const availableBalance = getInnerText("available-balance");
    
    if (accountNumber.length < 11) {
        alert("Please provide valid account number");
        return;
    }

     if (pinNumber !== validPin) {
        alert("Please provide valid pin number");
        return;
     }

    const totalNewAvailableBalance = amountAdded + availableBalance;

    setInnerText(totalNewAvailableBalance);
})


// Cash Out Functionalities

document.getElementById("cash-out-btn").addEventListener("click", function (event) {
    event.preventDefault();

    const agentNumber = getInputValue("agent-num");

    const amountToWithdraw = getInputValueNumber("amount-with");

    const pinToWithdraw = getInputValueNumber("pin-num-with");

    const availableBalance = getInnerText("available-balance");

    if (agentNumber.length < 11) {
        alert("Please provide a valid number");
        return;
    }

    if (amountToWithdraw > availableBalance) {
        alert("You don't have enough balance to withdraw");
        return;
    }

    if (pinToWithdraw !== validPin) {
        alert("Pin is invalid");
        return;
    }

    const afterWithTotalNewAvailableBalance = availableBalance - amountToWithdraw;

    setInnerText(afterWithTotalNewAvailableBalance);

})


// Buttons Functionalities, toggling features

document.getElementById("add-btn").addEventListener("click", function () {

    handleToggle("add-money-parent");

    handleButtonToggle("add-btn");

});

document.getElementById("cash-btn").addEventListener("click", function () {
   
   handleToggle("cash-out-parent");

   handleButtonToggle("cash-btn");

});

document.getElementById("transfer-btn").addEventListener("click", function () {
    
    handleToggle("transfer-money-parent");

    handleButtonToggle("transfer-btn");
    
});