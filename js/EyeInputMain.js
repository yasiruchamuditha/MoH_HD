
// Define variables for form values
var BidV, TdateV, DnameV, monthsV, ETNameV, ETresultV, EarTNameV,EarTresultV, speciaclNV;
// Bid, Tdate, Dname, months, ETName, ETresult, EarTName,EarTresult, speciaclN

// Function to read form values
function readForm() {
  BidV = document.getElementById("Bid").value;
  TdateV = document.getElementById("Tdate").value;
  DnameV = document.getElementById("Dname").value;
  monthsV = document.getElementById("months").value;
  ETNameV = document.getElementById("ETName").value;
  ETresultV = document.getElementById("ETresult").value;
  EarTNameV = document.getElementById("EarTName").value;
  EarTresultV = document.getElementById("EarTresult").value;
  speciaclNV = document.getElementById("speciaclN").value;
   
    console.log(BidV, TdateV, DnameV, monthsV, ETNameV, ETresultV, EarTNameV,EarTresultV, speciaclNV);
    
}



  // Function to validate form fields
  function validateForm1() {
    // Reset error messages
    // document.getElementById("BidE").textContent = "";

     // Get form values
    //  const Bid = document.getElementById("InputEmail1").value;

    var Bid = document.getElementById("Bid").value;
    var Tdate = document.getElementById("Tdate").value;
    var Dname = document.getElementById("Dname").value;
    var months = document.getElementById("months").value;
    var ETName = document.getElementById("ETName").value;
    var ETresult = document.getElementById("ETresult").value;
    var EarTName = document.getElementById("EarTName").value;
    var EarTresult = document.getElementById("EarTresult").value;
    var speciaclN = document.getElementById("speciaclN").value;
    
       // Validate email
       if (!Bid || !Bid.includes("")) {
        document.getElementById("BidE").textContent = "Please enter baby's id";
        return false;
    }
      if (!Dname || !Dname.includes("")) {
        document.getElementById("DnameE").textContent = "Please enter doctor's name";
        return false;
    }
      if (!months || !months.includes("")) {
        document.getElementById("monthsE").textContent = "Please enter baby's age(Months)";
        return false;
    }
      if (!ETName || !ETName.includes("")) {
        document.getElementById("ETNameE").textContent = "Please enter eye test's name";
        return false;
      }
      if (!ETresult || !ETresult.includes("")) {
        document.getElementById("ETresultE").textContent = "Please enter test result";
        return false;
      }
      if (!EarTName || !EarTName.includes("")) {
        document.getElementById("EarTNameE").textContent = "Please enter ear test's name";
        return false;
      }
      if (!EarTresult || !EarTresult.includes("")) {
        document.getElementById("EarTresultE").textContent = "Please enter ear test result";
        return false;
      }
      if (!speciaclN || !speciaclN.includes("")) {
        document.getElementById("speciaclNE").textContent = "If have a special notes othwerwise say none";
        return false;
      }
    // If all validations pass, return true
    return true;
  }

  // Function to validate form fields
  function validateForm2() {
    // Reset error messages
    // document.getElementById("BidE").textContent = "";

     // Get form values
    //  const Bid = document.getElementById("InputEmail1").value;

    var Bid = document.getElementById("Bid").value;
   
    var months = document.getElementById("months").value;
    
    
       // Validate email
       if (!Bid || !Bid.includes("")) {
        document.getElementById("BidE").textContent = "Please enter baby's id";
        return false;
    }
     
      if (!months || !months.includes("")) {
        document.getElementById("monthsE").textContent = "Please enter baby's age(Months)";
        return false;
    }
    // If all validations pass, return true
    return true;
  }



// Event listener for form submission
document.getElementById("insert").onclick = function () {
  if (validateForm1()) {
    readForm();

    
        firebase
            .database()
            // .ref("EyeAndEar/" + BidV + "/" + monthsV )
            .ref("Main/" + BidV + "/EyeAndEar" + "/" + monthsV)
            .set({
              Bid: BidV,
              Tdate: TdateV,
              Dname: DnameV,
              months: monthsV,
              ETName: ETNameV,
              ETresult: ETresultV,
              EarTName: EarTNameV,
              EarTresult: EarTresultV,
              speciaclN: speciaclNV,
                
            });

        alert("Data Inserted");
        clearFormFields();
    } };


// Function to clear form fields
function clearFormFields() {
    document.getElementById("Bid").value = "";
    document.getElementById("Tdate").value = "";
    document.getElementById("Dname").value = "";
    document.getElementById("months").value = "";
    document.getElementById("ETName").value = "";
    document.getElementById("ETresult").value = "";
    document.getElementById("EarTName").value = "";
    document.getElementById("EarTresult").value = "";
    document.getElementById("speciaclN").value = "";
   
}



document.getElementById("read").onclick = function () {
  if (validateForm2()) {
    readForm();

  firebase
    .database()
    // .ref("EyeAndEar/" + BidV + "/" + monthsV )
    .ref("Main/" + BidV + "/EyeAndEar" + "/" + monthsV)
    .on("value", function (snap) {
      document.getElementById("Bid").value = snap.val().Bid;
      document.getElementById("Tdate").value = snap.val().Tdate;
      document.getElementById("Dname").value = snap.val().Dname;

      document.getElementById("months").value = snap.val().months;
    document.getElementById("ETName").value = snap.val().ETName;
    document.getElementById("ETresult").value = snap.val().ETresult;
    document.getElementById("EarTName").value = snap.val().EarTName;
    document.getElementById("EarTresult").value = snap.val().EarTresult;
    document.getElementById("speciaclN").value = snap.val().speciaclN;
    
      
    });
}};



document.getElementById("update").onclick = function () {
  if (validateForm1()) {
    readForm();

  firebase
    .database()
    // .ref("EyeAndEar/" + BidV + "/" + monthsV )
    .ref("Main/" + BidV + "/EyeAndEar" + "/" + monthsV)
    .update({
      //   rollNo: rollV,
              // Bid: BidV,
              Tdate: TdateV,
              Dname: DnameV,
              // months: monthsV,
              ETName: ETNameV,
              ETresult: ETresultV,
              EarTName: EarTNameV,
              EarTresult: EarTresultV,
              speciaclN: speciaclNV,
                
    });

  alert("Data Update");
  document.getElementById("Bid").value = "";
  document.getElementById("Tdate").value = "";
  document.getElementById("Dname").value = "";
  document.getElementById("months").value = "";
  document.getElementById("ETName").value = "";
  document.getElementById("ETresult").value = "";
  document.getElementById("EarTName").value = "";
  document.getElementById("EarTresult").value = "";
  document.getElementById("speciaclN").value = "";

}};



document.getElementById("delete").onclick = function () {
  if (validateForm2()) {
    readForm();
  firebase
    .database()
    // .ref("EyeAndEar/" + BidV + "/" + monthsV )
    .ref("Main/" + BidV + "/EyeAndEar" + "/" + monthsV)
    .remove();
  alert("Data Deleted");
  document.getElementById("Bid").value = "";
    document.getElementById("Tdate").value = "";
    document.getElementById("Dname").value = "";
    document.getElementById("months").value = "";
    document.getElementById("ETName").value = "";
    document.getElementById("ETresult").value = "";
    document.getElementById("EarTName").value = "";
    document.getElementById("EarTresult").value = "";
    document.getElementById("speciaclN").value = "";

}};
