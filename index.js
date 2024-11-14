function proceed() {
    var userinput = document.getElementById("input").value;

    if (userinput == "") {
        alert("Please enter your pin")
    }
    else {
        document.getElementById("mainheading").innerHTML = "Please Select a transaction"
        document.getElementById("mainmessage").style.display = "none"
        document.getElementById("input").style.display = "none"
        document.getElementById("proceed").style.display = "none"
        document.getElementById("balance").style.display = "block"
        document.getElementById("Withdrawal").style.display = "block"
        document.getElementById("deposit").style.display = "block"
        document.getElementById("back").style.display = "block"
    

    }
}

function back() {
    document.getElementById("mainheading").style.display = "block"
    document.getElementById("mainmessage").style.display = "block"
    document.getElementById("mainheading").innerHTML = "Welcome to faysal bank ATM";
    document.getElementById("mainmessage").innerHTML = "Please enter your 4 digit pin to proceed";
    document.getElementById("proceed").style.display = "block"
    document.getElementById("input").style.display = "block"
    document.getElementById("balance").style.display = "none"
    document.getElementById("Withdrawal").style.display = "none"
    document.getElementById("deposit").style.display = "none"
    document.getElementById("back").style.display = "none"
    document.getElementById("balanceimage").style.display = "none"
    document.getElementById("deduct").style.display = "none"


}

function balance() {
    document.getElementById("mainheading").style.display = "none"
    document.getElementById("input").style.display = "none"
    document.getElementById("proceed").style.display = "none"
    document.getElementById("balanceimage").style.display = "block"
    document.getElementById("balance").style.display = "none"
    document.getElementById("Withdrawal").style.display = "none"
    document.getElementById("deposit").style.display = "none"
    document.getElementById("back").style.display = "block"
}

function withdrawal() {
    document.getElementById("mainheading").style.display = "none"
    document.getElementById("mainmessage").style.display = "block"
    document.getElementById("input").style.display = "block"
    document.getElementById("mainmessage").innerHTML = "Please Enter An amount to withdrawal"
    document.getElementById("input").style.display = "block"
    document.getElementById("input").maxlength = "30"
    document.getElementById("proceed").style.display = "none"
    document.getElementById("balance").style.display = "none"
    document.getElementById("Withdrawal").style.display = "none"
    document.getElementById("deposit").style.display = "none"
    document.getElementById("back").style.display = "block"
    document.getElementById("deduct").style.display = "block"
    document.getElementById("deduct").innerHTML = "proceed"


}

function deduct() {
    var userinput = document.getElementById("input").value;

    var subs = 480000 - userinput;
    if (userinput === "") {

        alert("please enter valid input")

    }
    else {
        document.getElementById("input").style.display = "none"

        document.getElementById("balance").style.display = "none"
        document.getElementById("Withdrawal").style.display = "none"
        document.getElementById("deposit").style.display = "none"
        var userinput = document.getElementById("input").value;
        var subs = 480000 - userinput;
        document.getElementById("deduct").style.display = "none"

        document.getElementById("mainmessage").style.display = "block"
        document.getElementById("mainmessage").style.textAlign = "Center"
        document.getElementById("mainmessage").innerHTML = "Account type : Current account <br> Account No : 28392928339488  <br> IBAN No : MKx8384bnysvU32230G <br> Card Type : MasterCard <br> Withdrawal Amount : " + userinput + '<br> Account balance : ' + subs
    }
}

function deposit() {
    document.getElementById("mainheading").style.display = "none"
    document.getElementById("mainmessage").style.display = "block"
    document.getElementById("input").style.display = "block"
    document.getElementById("mainmessage").innerHTML = "Please Enter An amount to deposit"
    document.getElementById("input").style.display = "block"
    document.getElementById("input").maxlength = "30"
    document.getElementById("proceed").style.display = "none"
    document.getElementById("balance").style.display = "none"
    document.getElementById("Withdrawal").style.display = "none"
    document.getElementById("deposit").style.display = "none"
    document.getElementById("back").style.display = "block"
    document.getElementById("add").style.display = "block"
    document.getElementById("add").innerHTML = "proceed"


}

function add() {

    if (userinput === "") {

        alert("please enter valid input")

    }
    else {
        document.getElementById("input").style.display = "none"

        document.getElementById("balance").style.display = "none"
        document.getElementById("Withdrawal").style.display = "none"
        document.getElementById("deposit").style.display = "none"
        var userinput = parseInt(document.getElementById("input").value)
        var subs = 480000 + userinput;
        document.getElementById("add").style.display = "none"

        document.getElementById("mainmessage").style.display = "block"
        document.getElementById("mainmessage").style.textAlign = "Center"
        document.getElementById("mainmessage").innerHTML = "Account type : Current account <br> Account No : 28392928339488  <br> IBAN No : MKx8384bnysvU32230G <br> Card Type : MasterCard <br> Deposit Amount : " + userinput + '<br> Account balance : ' + subs
    }
}