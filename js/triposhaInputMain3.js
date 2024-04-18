// Define variables for form values
var BidV, BnameV, bMonthsV, genderV, NpacketsV, TdateV, speciaclNV;

// Bid, Bname, bMonths, gender, Npackets, Tdate, speciaclN

// Function to read form values
function readForm() {
    BidV = document.getElementById("Bid").value;
    BnameV = document.getElementById("Bname").value;
    bMonthsV = document.getElementById("bMonths").value;
    genderV = document.getElementById("gender").value;

    NpacketsV = document.getElementById("Npackets").value;
    TdateV = document.getElementById("Tdate").value;
    speciaclNV = document.getElementById("speciaclN").value;


    console.log(BidV, BnameV, bMonthsV, genderV, NpacketsV, TdateV, speciaclNV);
}

//alert message started
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   // Function to simulate data insertion
   function insertData() {
    setTimeout(function() {
        showSuccessAlert();
    }, 500); // 500 milliseconds delay (1 second), replace with actual insertion process
}

// Function to show success alert
function showSuccessAlert() {
var successAlert = document.getElementById("successAlert");
successAlert.style.display = "block";

// Hide the alert after 3 seconds
setTimeout(function() {
    successAlert.style.display = "none";
}, 3000);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Function to simulate data insertion
function readData() {
setTimeout(function() {
    showReadAlert();
}, 500); // 500 milliseconds delay (1 second), replace with actual insertion process
}

// Function to show success alert
function showReadAlert() {
var successAlert = document.getElementById("readAlert");
successAlert.style.display = "block";

// Hide the alert after 3 seconds
setTimeout(function() {
successAlert.style.display = "none";
}, 3000);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Function to simulate data insertion
function updateData() {
setTimeout(function() {
    showUpdateAlert();
}, 500); // 500 milliseconds delay (1 second), replace with actual insertion process
}

// Function to show success alert
function showUpdateAlert() {
var successAlert = document.getElementById("updateAlert");
successAlert.style.display = "block";

// Hide the alert after 3 seconds
setTimeout(function() {
successAlert.style.display = "none";
}, 3000);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Function to simulate data insertion
function deleteData() {
setTimeout(function() {
    showDeleteAlert();
}, 500); // 500 milliseconds delay (1 second), replace with actual insertion process
}

// Function to show success alert
function showDeleteAlert() {
var successAlert = document.getElementById("deleteAlert");
successAlert.style.display = "block";

// Hide the alert after 3 seconds
setTimeout(function() {
successAlert.style.display = "none";
}, 3000);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//alert message ended
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  // Function to validate form fields
  function validateForm1() {
    // Reset error messages
    // document.getElementById("BidE").textContent = "";

     // Get form values
    //  const Bid = document.getElementById("InputEmail1").value;

    var Bid = document.getElementById("Bid").value;
    var Bname = document.getElementById("Bname").value;
    var bMonths = document.getElementById("bMonths").value;
    var gender = document.getElementById("gender").value;
    var Npackets = document.getElementById("Npackets").value;
    var Tdate = document.getElementById("Tdate").value;
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
      if (!bMonths || !bMonths.includes("")) {
        document.getElementById("bMonthsE").textContent = "Please enter baby's age(Months)";
        return false;
    }
      if (!gender || !gender.includes("")) {
        document.getElementById("genderE").textContent = "Please enter baby's gender";
        return false;
      }
      if (!Npackets || !Npackets.includes("")) {
        document.getElementById("NpacketsE").textContent = "Please enter how many triposha packects";
        return false;
      }
      if (!Tdate || !Tdate.includes("")) {
        document.getElementById("TdateE").textContent = "Please enter valid date";
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
          .ref("Main/" + BidV + "/Triposha" + "/" + bMonthsV)
          .set({
              Baby_id: BidV,
              Baby_name: BnameV,
              Baby_months: bMonthsV,
              Gender: genderV,
              Packets: NpacketsV,
              Triposha_date: TdateV,
              Special_note: speciaclNV,
          });

      // alert("Data Inserted");
      insertData();
      clearFormFields();
  }
}

// Bid, Bname, bMonths, gender, Npackets, Tdate, speciaclN
// Function to clear form fields
function clearFormFields() {
    document.getElementById("Bid").value = "";
    document.getElementById("Bname").value = "";
    document.getElementById("bMonths").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("Npackets").value = "";
    document.getElementById("Tdate").value = "";
    document.getElementById("speciaclN").value = "";
}


document.getElementById("read").onclick = function () {
  if (validateForm2()) {
    readForm();
   
    //Bid, Bname, bMonths, gender, Vname, Vdate, immediateHealth
  firebase
    .database()
    // .ref("Triposha/" + BidV + "/" + bMonthsV)
    .ref("Main/" + BidV + "/Triposha" + "/" + bMonthsV)
    .on("value", function (snap) {
    document.getElementById("Bid").value = snap.val().Baby_id;
    document.getElementById("Bname").value = snap.val().Baby_name;
    document.getElementById("bMonths").value = snap.val().Baby_months;

    document.getElementById("gender").value = snap.val().Gender;
    document.getElementById("Npackets").value = snap.val().Packets;
    document.getElementById("Tdate").value = snap.val().Triposha_date;
    document.getElementById("speciaclN").value = snap.val().Special_note;
    
      
    });
    readData();
}};



document.getElementById("update").onclick = function () {
  if (validateForm1()) {
    readForm();

  firebase
    .database()
    // .ref("Triposha/" + BidV + "/" + bMonthsV)
    .ref("Main/" + BidV + "/Triposha" + "/" + bMonthsV)
    .update({
     
      // Baby_id: BidV,
            Baby_name: BnameV,
            Baby_months: bMonthsV,
            Gender: genderV,
            Packets: NpacketsV,
            Triposha_date: TdateV,
            Special_note: speciaclNV,
    });

  // alert("Data Update");
  updateData();
  document.getElementById("Bid").value = "";
  document.getElementById("Bname").value = "";
  document.getElementById("bMonths").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("Npackets").value = "";
  document.getElementById("Tdate").value = "";
  document.getElementById("speciaclN").value = "";

}
}


document.getElementById("delete").onclick = function () {
  if (validateForm2()) {
    readForm();
    deleteData();
  firebase
    .database()
    // .ref("Triposha/" + BidV + "/" + bMonthsV)
    .ref("Main/" + BidV + "/Triposha" + "/" + bMonthsV)
    .remove();
  // alert("Data Deleted");
  document.getElementById("Bid").value = "";
  document.getElementById("Bname").value = "";
  document.getElementById("bMonths").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("Npackets").value = "";
  document.getElementById("Tdate").value = "";
  document.getElementById("speciaclN").value = "";

}};

