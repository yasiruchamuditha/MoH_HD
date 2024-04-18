
// Define variables for form values
var BidV, nameV, genderV, dobV, tobV, pobV, mothernameV, fathernameV, addressV, pnumberV, emailV, MOccupationV, FOccupationV;

// Function to read form values
function readForm() {
    BidV = document.getElementById("Bid").value;
    nameV = document.getElementById("name").value;
    genderV = document.getElementById("gender").value;
    dobV = document.getElementById("dob").value;
    tobV = document.getElementById("tob").value;
    pobV = document.getElementById("pob").value;
    mothernameV = document.getElementById("mothername").value;
    fathernameV = document.getElementById("fathername").value;
    addressV = document.getElementById("address").value;
    pnumberV = document.getElementById("pnumber").value;
    emailV = document.getElementById("email").value;
    MOccupationV = document.getElementById("MOccupation").value;
    FOccupationV = document.getElementById("FOccupation").value;
    console.log(BidV, nameV, genderV, dobV, tobV, pobV, mothernameV, fathernameV, addressV, pnumberV, emailV, MOccupationV, FOccupationV);
    
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
    var name = document.getElementById("name").value;
    var gender = document.getElementById("gender").value;
    var dob = document.getElementById("dob").value;
    var tob = document.getElementById("tob").value;
    var pob = document.getElementById("pob").value;
    var mothername = document.getElementById("mothername").value;
    var fathername = document.getElementById("fathername").value;
    var address = document.getElementById("address").value;
    var pnumber = document.getElementById("pnumber").value;
    var email = document.getElementById("email").value;
    var MOccupation = document.getElementById("MOccupation").value;
    var FOccupation = document.getElementById("FOccupation").value;
    
       // Validate email
       if (!Bid || !Bid.includes("")) {
        document.getElementById("BidE").textContent = "Please enter baby's id";
        return false;
    }
      if (!name || !name.includes("")) {
        document.getElementById("nameE").textContent = "Please enter baby's name";
        return false;
    }
      if (!dob || !dob.includes("")) {
        document.getElementById("dobE").textContent = "Please enter baby's birthday";
        return false;
    }
      if (!gender || !gender.includes("")) {
        document.getElementById("genderE").textContent = "Please enter baby's gender";
        return false;
      }
      if (!tob || !tob.includes("")) {
        document.getElementById("tobE").textContent = "Please enter birth time";
        return false;
      }
      if (!pob || !pob.includes("")) {
        document.getElementById("pobE").textContent = "Please enter birth place";
        return false;
      }
      if (!mothername || !mothername.includes("")) {
        document.getElementById("mothernameE").textContent = "Please enter mother's name";
        return false;
      }

      if (!fathername || !fathername.includes("")) {
        document.getElementById("fathernameE").textContent = "Please enter father's name";
        return false;
    }
        if (!address || !address.includes("")) {
          document.getElementById("addressE").textContent = "Please enter address";
          return false;
      }
      if (!pnumber || !pnumber.length>9) {
        document.getElementById("pnumberE").textContent = "Please enter valid phone number";
        return false;
    }
      if (!email || !email.includes("@")) {
        document.getElementById("emailE").textContent = "Please enter valid email";
        return false;
      }
      if (!MOccupation || !MOccupation.includes("")) {
        document.getElementById("MOccupationE").textContent = "Please enter mother's occupation";
        return false;
      }
      if (!FOccupation || !FOccupation.includes("")) {
        document.getElementById("FOccupationE").textContent = "Please enter father's occupation";
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
   
   
    
    
       // Validate email
       if (!Bid || !Bid.includes("")) {
        document.getElementById("BidE").textContent = "Please enter baby's id";
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
            // .ref("Parents/" + BidV)
            // .ref("Main/" + BidV + "/MedicalInfo")
         .ref("Main/" + BidV + "/ParentInfo")
            .set({
                Bid: BidV,
                name: nameV,
                gender: genderV,
                dateOfBirth: dobV,
                timeOfBirth: tobV,
                placeOfBirth: pobV,
                motherName: mothernameV,
                fatherName: fathernameV,
                address: addressV,
                phoneNumber: pnumberV,
                email: emailV,
                motherOccupation: MOccupationV,
                fatherOccupation: FOccupationV,
            });

        // alert("Data Inserted");
        insertData();
        clearFormFields();
    } };


// Function to clear form fields
function clearFormFields() {
    document.getElementById("Bid").value = "";
    document.getElementById("name").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("tob").value = "";
    document.getElementById("pob").value = "";
    document.getElementById("mothername").value = "";
    document.getElementById("fathername").value = "";
    document.getElementById("address").value = "";
    document.getElementById("pnumber").value = "";
    document.getElementById("email").value = "";
    document.getElementById("MOccupation").value = "";
    document.getElementById("FOccupation").value = "";
}



document.getElementById("read").onclick = function () {
  if (validateForm2()) {
    readForm();

  firebase
    .database()
    // .ref("Parents/" + BidV)
    .ref("Main/" + BidV + "/ParentInfo")
    .on("value", function (snap) {
      document.getElementById("Bid").value = snap.val().Bid;
      document.getElementById("name").value = snap.val().name;
      document.getElementById("gender").value = snap.val().gender;

      document.getElementById("dob").value = snap.val().dateOfBirth;
    document.getElementById("tob").value = snap.val().timeOfBirth;
    document.getElementById("pob").value = snap.val().placeOfBirth;
    document.getElementById("mothername").value = snap.val().motherName;
    document.getElementById("fathername").value = snap.val().fatherName;
    document.getElementById("address").value = snap.val().address;
    document.getElementById("pnumber").value = snap.val().phoneNumber;
    document.getElementById("email").value = snap.val().email;
    document.getElementById("MOccupation").value = snap.val().motherOccupation;
    document.getElementById("FOccupation").value = snap.val().fatherOccupation;
      
    });
    readData();
}};



document.getElementById("update").onclick = function () {
  if (validateForm1()) {
    readForm();
  firebase
    .database()
    // .ref("Parents/" + BidV)
    .ref("Main/" + BidV + "/ParentInfo")
    .update({
      //   rollNo: rollV,
      name: nameV,
      gender: genderV,
      address: addressV,
      dateOfBirth: dobV,
    timeOfBirth: tobV,
    placeOfBirth: pobV,
    motherName: mothernameV,
    fatherName: fathernameV,
    address: addressV,
    phoneNumber: pnumberV,
    email: emailV,
    motherOccupation: MOccupationV,
    fatherOccupation: FOccupationV,
    });
    updateData();

  // alert("Data Update");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  
  document.getElementById("dob").value = "";
  document.getElementById("tob").value = "";
  document.getElementById("pob").value = "";
  document.getElementById("mothername").value = "";
  document.getElementById("fathername").value = "";
  document.getElementById("address").value = "";
  document.getElementById("pnumber").value = "";
  document.getElementById("email").value = "";
  document.getElementById("MOccupation").value = "";
  document.getElementById("FOccupation").value = "";

}};



document.getElementById("delete").onclick = function () {
  if (validateForm2()) {
    readForm();
    deleteData();
  firebase
    .database()
    // .ref("Parents/" + BidV)
    .ref("Main/" + BidV + "/ParentInfo")
    .remove();
  // alert("Data Deleted");
  document.getElementById("Bid").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("dob").value = "";
  document.getElementById("tob").value = "";
  document.getElementById("pob").value = "";
  document.getElementById("mothername").value = "";
  document.getElementById("fathername").value = "";
  document.getElementById("address").value = "";
  document.getElementById("pnumber").value = "";
  document.getElementById("email").value = "";
  document.getElementById("MOccupation").value = "";
  document.getElementById("FOccupation").value = "";

}};
