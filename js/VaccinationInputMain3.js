// Define variables for form values
var BidV, BnameV, bMonthsV, genderV, VnameV, VdateV, immediateHealthV;

// Bid, Bname, bMonths, gender, Vname, Vdate, immediateHealth

// Function to read form values
function readForm() {
    BidV = document.getElementById("Bid").value;
    BnameV = document.getElementById("Bname").value;
    bMonthsV = document.getElementById("bMonths").value;
    genderV = document.getElementById("gender").value;
    VnameV = document.getElementById("Vname").value;
    VdateV = document.getElementById("Vdate").value;
    immediateHealthV = document.getElementById("immediateHealth").value;


    console.log(BidV, BnameV, bMonthsV, genderV, VnameV, VdateV, immediateHealthV);
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
    var Vname = document.getElementById("Vname").value;
    var Vdate = document.getElementById("Vdate").value;
    var immediateHealth = document.getElementById("immediateHealth").value;
    
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
      if (!Vname || !Vname.includes("")) {
        document.getElementById("VnameE").textContent = "Please enter vaccine name";
        return false;
      }
      if (!Vdate || !Vdate.includes("")) {
        document.getElementById("VdateE").textContent = "Please enter valid date";
        return false;
      }
      if (!immediateHealth || !immediateHealth.includes("")) {
        document.getElementById("immediateHealthE").textContent = "Please fill this field";
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
        //  .ref("Vaccinations/" + BidV + "/" + bMonthsV)
        .ref("Main/" + BidV + "/Vaccinations" + "/" + bMonthsV)
        .set({
         
            Baby_id: BidV,
            Baby_name: BnameV,
            Baby_months: bMonthsV,
            Gender: genderV,
            Vaccine_name: VnameV,
            Vaccination_date: VdateV,
            immediateHealth: immediateHealthV,
        });

    // alert("Data Inserted");
    insertData();
    clearFormFields();
}};
// Bid, Bname, bMonths, gender, Vname, Vdate, immediateHealth
// Function to clear form fields
function clearFormFields() {
    document.getElementById("Bid").value = "";
    document.getElementById("Bname").value = "";
    document.getElementById("bMonths").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("Vname").value = "";
    document.getElementById("Vdate").value = "";
    document.getElementById("immediateHealth").value = "";
}


document.getElementById("read").onclick = function () {
  if (validateForm2()) {
    readForm();
    //Bid, Bname, bMonths, gender, Vname, Vdate, immediateHealth
  firebase
    .database()
    // .ref("Vaccinations/" + BidV + "/" + bMonthsV)
    .ref("Main/" + BidV + "/Vaccinations" + "/" + bMonthsV)
    .on("value", function (snap) {
    document.getElementById("Bid").value = snap.val().Baby_id;
    document.getElementById("Bname").value = snap.val().Baby_name;
    document.getElementById("bMonths").value = snap.val().Baby_months;

    document.getElementById("gender").value = snap.val().Gender;
    document.getElementById("Vname").value = snap.val().Vaccine_name;
    document.getElementById("Vdate").value = snap.val().Vaccination_date;
    document.getElementById("immediateHealth").value = snap.val().immediateHealth;
    
      
    });
    readData();
}};



document.getElementById("update").onclick = function () {
  if (validateForm1()) {
    readForm();
  firebase
    .database()
    // .ref("Vaccinations/" + BidV + "/" + bMonthsV)
    .ref("Main/" + BidV + "/Vaccinations" + "/" + bMonthsV)
    .update({
      //   rollNo: rollV,
      //Baby_id: BidV,
      Baby_name: BnameV,
      Baby_months: bMonthsV,
      Gender: genderV,
      Vaccine_name: VnameV,
      Vaccination_date: VdateV,
      immediateHealth: immediateHealthV,
    });
    updateData();
  // alert("Data Update");
  document.getElementById("Bid").value = "";
  document.getElementById("Bname").value = "";
  document.getElementById("bMonths").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("Vname").value = "";
  document.getElementById("Vdate").value = "";
  document.getElementById("immediateHealth").value = "";

}};



document.getElementById("delete").onclick = function () {
  if (validateForm2()) {
    readForm();
    deleteData();

  firebase
    .database()
    // .ref("Vaccinations/" + BidV + "/" + bMonthsV)
    .ref("Main/" + BidV + "/Vaccinations" + "/" + bMonthsV)
    .remove();
  // alert("Data Deleted");
  document.getElementById("Bid").value = "";
  document.getElementById("Bname").value = "";
  document.getElementById("bMonths").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("Vname").value = "";
  document.getElementById("Vdate").value = "";
  document.getElementById("immediateHealth").value = "";

}};

