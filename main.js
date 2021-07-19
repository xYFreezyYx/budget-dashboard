let TRANSACTION_NAME_INPUT = document.querySelector("#new-transaction-name");
let TRANSACTION_AMOUNT_INPUT = document.querySelector("#new-transaction-amount");

updateTitle();

function updateTitle(){
let dashboardTitle = "Budget";
let dashboardFullTitle = dashboardTitle + " DashBoard";

document.querySelector("title").innerText = dashboardFullTitle;
document.querySelector("h1").innerText = dashboardTitle;
}

function SubmitTransaction(){
    let name = TRANSACTION_NAME_INPUT.value;
    let amount = TRANSACTION_AMOUNT_INPUT.value;

    if(name === "" && amount === ""){
        console.error("You need name and amount!");
    }else if(name === ""){
        console.error("You need a name!");
    }else if(amount === ""){
        console.error("You need amount!");
    }else{
        console.log("All good to go!");
    }

    createTransaction(name, amount);
}

let allTransactionNames = ["Groceries", "Subcriptions", "Rent"];
allTransactionNames.push("Transprot");
allTransactionNames.unshift("Entertainmeit");
let allTransactionAmounts = [20.10, 10.24, 4.99, 400, 100];
/*let allTransactionsForNameAndAmounts = "";*/

function getAllTransactions(){
    for(let i = 0; i < 5; i++){       
        /*allTransactionsForNameAndAmounts += [" " + allTransactionNames[i] + ": " + allTransactionAmounts[i]] + " ";*/
        console.log(allTransactionNames[i] + ": " + allTransactionAmounts[i]);
    }
}

getAllTransactions();

/*document.querySelector(".amount-and-name").innerText = allTransactionsForNameAndAmounts;*/

function createTransaction(nameInput, amountInput){
    let mainEle = document.createElement("div");
    let nameEle = document.createElement("h1");
    let amountEle = document.createElement("span"); 

    document.querySelector(".list-of-transactions").append(mainEle);
    mainEle.append(nameEle);
    mainEle.append(amountEle);

    nameEle.innerText = nameInput;
    amountEle.innerText = amountInput;

    mainEle.classList.add("transactions");
    //mainEle.style.backgroundColor = "red";
}