// Write your solution in this file!
var customerName = "bob"; //global variable 
//retains a reference to the outer scope in which it was declared.
//What matters for the scope chain is where the function is declared — not where it is invoked.
const leastFavoriteCustomer = 'still bob';
var bestCustomer;

function upperCaseCustomerName () {
    customerName = customerName.toUpperCase(); //uppercase this
    //need to return BOB
}

function setBestCustomer(){
    bestCustomer = 'not bob'
}

function overwriteBestCustomer(){
   bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer(){
     leastFavoriteCustomer = 'is it bob';
}