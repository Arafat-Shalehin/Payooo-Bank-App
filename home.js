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


// Buttons Functionalities, toggling features

document.getElementById("add-btn").addEventListener("click", function () {
    document.getElementById("cash-out-parent").style.display = "none";

    document.getElementById("add-money-parent").style.display = "block";
});

document.getElementById("cash-out-btn").addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none";

    document.getElementById("cash-out-parent").style.display = "block";
});