// Add Money Functionalities.

const validPin = 1234;

document.getElementById("add-money-btn").addEventListener("click", function (event) {
    event.preventDefault();
    
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("acc-num").value;
    const amountAdded = parseInt(document.getElementById("add-amount").value);
    const pinNumber = parseInt(document.getElementById("add-pin").value);

    // Available Balance Functions.
    const availableBalance = parseInt(document.getElementById("available-balance").innerText);
    
    if (accountNumber.length < 11) {
        alert("Please provide valid account number");
        return;
    }

     if (pinNumber !== validPin) {
        alert("Please provide valid pin number");
        return;
     }

    const totalNewAvailableBalance = amountAdded + availableBalance;

    document.getElementById("available-balance").innerText = totalNewAvailableBalance;
})


// Cash Out Functionalities

document.getElementById("cash-out-btn").addEventListener("click", function (event) {
    event.preventDefault();

    const agentNumber = document.getElementById("agent-num").value;
    const amountToWithdraw = parseInt(document.getElementById("amount-with").value);
    const pinToWithdraw = parseInt(document.getElementById("pin-num-with").value);

    const availableBalance = parseInt(document.getElementById("available-balance").innerText);

    if (agentNumber.length < 11) {
        alert("Please provide a valid number");
        return;
    }

    if (amountToWithdraw > availableBalance) {
        alert("You don't have enough money to withdraw");
        return;
    }

    if (pinToWithdraw !== validPin) {
        alert("Pin is invalid");
        return;
    }

    const afterWithTotalNewAvailableBalance = availableBalance - amountToWithdraw;

    document.getElementById("available-balance").innerText = afterWithTotalNewAvailableBalance;
    
})


// Buttons Functionalities, toggling features

document.getElementById("add-btn").addEventListener("click", function () {
    document.getElementById("cash-out-parent").style.display = "none";

    document.getElementById("add-money-parent").style.display = "block";
});

document.getElementById("cash-btn").addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none";

    document.getElementById("cash-out-parent").style.display = "block";
});