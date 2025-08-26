const validPin = 1234;

const coupon = "AS10";

const transactionData = [];

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

    if (amountAdded <= 0) {
        alert("Invalid Amount");
        return;
    }

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

    const data = {
        name:"Add Money",
        date:new Date().toLocaleTimeString()
    }

    transactionData.push(data);
});


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

    if (amountToWithdraw <= 0) {
        alert("Invalid Credentials");
        return;
    }

    if (pinToWithdraw !== validPin) {
        alert("Pin is invalid");
        return;
    }

    const afterWithTotalNewAvailableBalance = availableBalance - amountToWithdraw;

    setInnerText(afterWithTotalNewAvailableBalance);

    const data = {
        name:"Cash Out",
        date:new Date().toLocaleTimeString()
    }

    transactionData.push(data);

});


// Transfer Money Functionalities

document.getElementById("transfer-money-btn").addEventListener("click", function (event) {
    event.preventDefault();

    const userAccNum = getInputValue("transfer-user-num");

    const transferAmount = getInputValueNumber("transfer-amount");

    const transferPin = getInputValueNumber("transfer-pin");

    const availableBalance = getInnerText("available-balance");

    if (userAccNum.length < 11) {
        alert("Please provide a valid number");
        return;
    }

    if (transferAmount > availableBalance) {
        alert("You don't have enough balance to Transfer");
        return;
    }

    if (transferPin !== validPin) {
        alert("Pin is invalid");
        return;
    }

    const remainingBalance = availableBalance - transferAmount;

    setInnerText(remainingBalance);

    const data = {
        name:"Transfer Money",
        date:new Date().toLocaleTimeString()
    }

    transactionData.push(data);
})


// Get Bonus Functionalities

document.getElementById("get-bonus-btn").addEventListener("click", function (event) {
    event.preventDefault();

    const userCoupon = getInputValue("bonus");

    if (userCoupon.toUpperCase() === coupon) {
        alert("You got the Bonus.");
        return;
    } else {
        alert("Your coupon is expired.")
    }
    
});


// Pay Bills Functionalities

document.getElementById("pay-bill-btn").addEventListener("click", function (event) {
    event.preventDefault();

    const billerAccNum = getInputValue("pay-biller-num");

    const payAmount = getInputValueNumber("pay-amount");

    const payPin = getInputValueNumber("pay-pin");

    const availableBalance = getInnerText("available-balance");

    if (billerAccNum.length < 11) {
        alert("Please provide a valid number");
        return;
    }

    if (payAmount > availableBalance) {
        alert("You don't have enough balance to Pay the bill");
        return;
    }

    if (payPin !== validPin) {
        alert("Pin is invalid");
        return;
    }

    const remainingBalance = availableBalance - payAmount;

    setInnerText(remainingBalance);

    const data = {
        name:"Pay Bill",
        date:new Date().toLocaleTimeString()
    }

    transactionData.push(data);

});


// Transaction Related functions.

document.getElementById("transac-btn").addEventListener("click", function () {
    const transactionContainer = document.getElementById("transaction-container");

    transactionContainer.innerText = "";

    for (const data of transactionData) {
        const div = document.createElement("div")

        div.innerHTML = `
         <div class="bg-white rounded-xl p-3 flex justify-between items-center mt-3">
                    <div class="flex items-center">
                        <div class="bg-[#f4f5f7] p-3 rounded-full">
                            <img class="mx-auto" src="assets/transaction1.png" alt="Wallet Pic">
                        </div>
                        <div class="ml-3">
                            <h1 class="text-[#08080880] font-semibold text-xl">${data.name}</h1>
                            <p class="text-[#08080880]">${data.date}</p>
                        </div>
                    </div>
                    <i class="fa-solid fa-ellipsis-vertical text-2xl"></i>
        </div>
        `

        transactionContainer.appendChild(div);
    }
});


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


document.getElementById("get-btn").addEventListener("click", function () {
    
    handleToggle("get-bonus-parent");

    handleButtonToggle("get-btn");
    
});


document.getElementById("pay-btn").addEventListener("click", function () {
    
    handleToggle("pay-bills-parent");

    handleButtonToggle("pay-btn");
    
});


document.getElementById("transac-btn").addEventListener("click", function () {
    
    handleToggle("transaction-parent");

    handleButtonToggle("transac-btn");
    
});