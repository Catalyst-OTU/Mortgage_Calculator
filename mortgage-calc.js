// The code


// The formula: c=((r*p) / (1-(Math.pow((1+r), (-n))))
// @param p float Amount borrowed
// @param r interest as a percentage
// @param n term in years
function calculateMortgage(p, r, n) {

     
// convert this percentage to a decimal
r=percentToDecimal(r)


//convert years to months
    n = yearsToMonths(n);


    var pmt = (r*p) / (1-Math.pow((1+r), (-n)));
   return parseFloat(pmt.toFixed(2));
}

function percentToDecimal(percent){
  return (percent/12)/100;
}

function yearsToMonths(year){
     return year * 12;
}

function postPayments(payment) {
 var htmlEl = document.getElementById("outMonthly");

    htmlEl.innerText = "$" + payment;
}

var btn = document.getElementById("btnCalculator");
btn.onclick = function() {
     var cost = document.getElementById("inCost").value;

     if(cost == "") {
          alert("Please enter a cost amount");
          returnfalse;
     }

     if (cost< -0) {
          alert("Invalid cost");
          return false;
     }

     var downPayment = document.getElementById("inDown").value;
     var interest = document.getElementById("inAPR").value;
     var term = document.getElementById("inPeriod").value;


var amountBorrowed = cost - downPayment;

   var pmt = calculateMortgage(amountBorrowed, interest, term);

   postPayments(pmt);
};