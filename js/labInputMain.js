// Define variables for form values
var TdateV, BidV, BnameV, PnameV, CNumberV, CemailV, TnameV, tResultV, speciaclNV;

// Bid, Bname, Pname, CNumber, Cemail, Tname, Tdate, tResult, speciaclN                                                     


// Function to read form values
function readForm() {
  TdateV = document.getElementById("Tdate").value;
  BidV = document.getElementById("Bid").value;
  BnameV = document.getElementById("Bname").value;
  PnameV = document.getElementById("Pname").value;
  CNumberV = document.getElementById("CNumber").value;
  CemailV = document.getElementById("Cemail").value;
  TnameV = document.getElementById("Tname").value;
  tResultV = document.getElementById("tResult").value;
  speciaclNV = document.getElementById("speciaclN").value;


    console.log(TdateV,BidV, BnameV, PnameV, CNumberV, CemailV, TnameV, TdateV, tResultV, speciaclNV);
}


  // Function to validate form fields
  function validateForm1() {
    // Reset error messages
    // document.getElementById("BidE").textContent = "";

     // Get form values
    //  const Bid = document.getElementById("InputEmail1").value;

    var Tdate = document.getElementById("Tdate").value;
    var Bid = document.getElementById("Bid").value;
    var Bname = document.getElementById("Bname").value;
    var Pname = document.getElementById("Pname").value;
    var CNumber = document.getElementById("CNumber").value;
    var Cemail = document.getElementById("Cemail").value;
    var Tname = document.getElementById("Tname").value;
    var tResult = document.getElementById("tResult").value;
    var speciaclN = document.getElementById("speciaclN").value;
    
       // Validate email
       if (!Bid || !Bid.includes("")) {
        document.getElementById("BidE").textContent = "Please enter baby's id";
        return false;
    }
      if (!Bname || !Bname.includes("")) {
        document.getElementById("BnameE").textContent = "Please enter baby's name";
        return false;
    }
      if (!Pname || !Pname.includes("")) {
        document.getElementById("PnameE").textContent = "Please enter baby's parent name";
        return false;
    }
      if (!CNumber || !CNumber.length<=10) {
        document.getElementById("CNumberE").textContent = "Please enter valid contact number";
        return false;
      }
      if (!Cemail || !Cemail.includes("@")) {
        document.getElementById("CemailE").textContent = "Please enter valid email address";
        return false;
      }
      if (!Tdate || !Tdate.includes("")) {
        document.getElementById("TdateE").textContent = "Please enter valid test date";
        return false;
      }
      if (!speciaclN || !speciaclN.includes("")) {
        document.getElementById("speciaclNE").textContent = "If have a special notes othwerwise say none";
        return false;
      }
      if (!Tname || !Tname.includes("")) {
        document.getElementById("TnameE").textContent = "Please enetr test name";
        return false;
      }
      if (!tResult || !tResult.includes("")) {
        document.getElementById("tResultE").textContent = "Please enter test result";
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
   
    var bMonths = document.getElementById("bMonths").value;
    
    
       // Validate email
       if (!Bid || !Bid.includes("")) {
        document.getElementById("BidE").textContent = "Please enter baby's id";
        return false;
    }
     
      if (!bMonths || !bMonths.includes("")) {
        document.getElementById("bMonthsE").textContent = "Please enter baby's age(Months)";
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
        // .ref("Laboratory/" + TdateV  + "/" + BidV)
        .ref("Main/" + BidV + "/Laboratory" + "/" + TdateV)
        .set({
         
            Test_date: TdateV,
            Baby_id: BidV,
            Baby_name: BnameV,
            Parent_name: PnameV,
            Contact_number: CNumberV,
            Email: CemailV,
            Test_name: TnameV,
            Test_result: tResultV,
            Special_note: speciaclNV,
        });

    alert("Data Inserted");
    clearFormFields();
}}
// Bid, Bname, Pname, CNumber, Cemail, Tname, Tdate, tResult, speciaclN                                                     

// Function to clear form fields
function clearFormFields() {
    document.getElementById("TdateV").value = "";
    document.getElementById("BidV").value = "";
    document.getElementById("BnameV").value = "";
    document.getElementById("PnameV").value = "";

    document.getElementById("CNumberV").value = "";
    document.getElementById("CemailV").value = "";
    document.getElementById("TnameV").value = "";
    document.getElementById("tResultV").value = "";
    document.getElementById("speciaclNV").value = "";
}


document.getElementById("read").onclick = function () {
  if (validateForm2()) {
    readForm();
    //TdateV, BidV, BnameV, PnameV, CNumberV, CemailV, TnameV, tResultV, speciaclNV;

  firebase
    .database()
    // .ref("Laboratory/" + TdateV  + "/" + BidV)
    .ref("Main/" + BidV + "/Laboratory" + "/" + TdateV)
    .on("value", function (snap) {

    document.getElementById("Tdate").value = snap.val().Test_date;
    document.getElementById("Bid").value = snap.val().Baby_id;
    document.getElementById("Bname").value = snap.val().Baby_name;
    

    document.getElementById("Pname").value = snap.val().Parent_name;
    document.getElementById("CNumber").value = snap.val().Contact_number;
    document.getElementById("Cemail").value = snap.val().Email;
    document.getElementById("Tname").value = snap.val().Test_name;

    document.getElementById("tResult").value = snap.val().Test_result;
    document.getElementById("speciaclN").value = snap.val().Special_note;

    
      
    });
}};



document.getElementById("update").onclick = function () {
  if (validateForm1()) {
    readForm();

  firebase
    .database()
    // .ref("Laboratory/" + TdateV  + "/" + BidV)
    .ref("Main/" + BidV + "/Laboratory" + "/" + TdateV)
    .update({
     
      // Test_date: TdateV,
      // Baby_id: BidV,
      Baby_name: BnameV,
      Parent_name: PnameV,
      Contact_number: CNumberV,
      Email: CemailV,
      Test_name: TnameV,
      Test_result: tResultV,
      Special_note: speciaclNV,
    });

  alert("Data Update");
    document.getElementById("TdateV").value = "";
    document.getElementById("BidV").value = "";
    document.getElementById("BnameV").value = "";
    document.getElementById("PnameV").value = "";

    document.getElementById("CNumberV").value = "";
    document.getElementById("CemailV").value = "";
    document.getElementById("TnameV").value = "";
    document.getElementById("tResultV").value = "";
    document.getElementById("speciaclNV").value = "";

}};



document.getElementById("delete").onclick = function () {
  if (validateForm2()) {
    readForm();

  firebase
    .database()
    // .ref("Laboratory/" + TdateV  + "/" + BidV)
    .ref("Main/" + BidV + "/Laboratory" + "/" + TdateV)
    .remove();
  alert("Data Deleted");
    document.getElementById("TdateV").value = "";
    document.getElementById("BidV").value = "";
    document.getElementById("BnameV").value = "";
    document.getElementById("PnameV").value = "";

    document.getElementById("CNumberV").value = "";
    document.getElementById("CemailV").value = "";
    document.getElementById("TnameV").value = "";
    document.getElementById("tResultV").value = "";
    document.getElementById("speciaclNV").value = "";

}};

