


// Define variables for form values
var BidV, nameV, genderV, dobV, tobV, bwV, lbV, apgarSV, bloodTV , immediateHealthV,  vaccinationsIMMUV, medicalProceV;


// Function to read form values
function readForm() {
  BidV = document.getElementById("Bid").value;
    nameV = document.getElementById("name").value;
    genderV = document.getElementById("gender").value;
    dobV = document.getElementById("dob").value;
    tobV = document.getElementById("tob").value;
    bwV = document.getElementById("bw").value;
    lbV = document.getElementById("lb").value;
    apgarSV = document.getElementById("apgarS").value;
    bloodTV = document.getElementById("bloodT").value;
    immediateHealthV = document.getElementById("immediateHealth").value;
    vaccinationsIMMUV = document.getElementById("vaccinationsIMMU").value;
    medicalProceV = document.getElementById("medicalProce").value;
   
    console.log(BidV, nameV, genderV, dobV, tobV, bwV, lbV, apgarSV, bloodTV , immediateHealthV,  vaccinationsIMMUV, medicalProceV);
    
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
    var Bname = document.getElementById("name").value;
    var gender = document.getElementById("gender").value;
    var dob = document.getElementById("dob").value;
    var tob = document.getElementById("tob").value;
    var bw = document.getElementById("bw").value;
    var lb = document.getElementById("lb").value;
    var apgarS = document.getElementById("apgarS").value;
    var bloodT = document.getElementById("bloodT").value;
    var immediateHealth = document.getElementById("immediateHealth").value;
    var vaccinationsIMMU = document.getElementById("vaccinationsIMMU").value;
    var medicalProce = document.getElementById("medicalProce").value;
    
       // Validate email
       if (!Bid || !Bid.includes("")) {
        document.getElementById("BidE").textContent = "Please enter baby's id";
        return false;
    }
      if (!Bname || !Bname.includes("")) {
        document.getElementById("BnameE").textContent = "Please enter baby's name";
        return false;
    }
      if (!gender || !gender.includes("")) {
        document.getElementById("genderE").textContent = "Please enter baby's gender";
        return false;
      }
      if (!dob || !dob.includes("")) {
        document.getElementById("dobE").textContent = "Please enter baby's birthday";
        return false;
      }
      if (!tob || !tob.includes("")) {
        document.getElementById("tobE").textContent = "Please enter baby's birth time";
        return false;
      }
      if (!bw || !bw.includes("")) {
        document.getElementById("bwE").textContent = "Please enter baby's birth weight";
        return false;
      }
      if (!lb || !lb.includes("")) {
        document.getElementById("lbE").textContent = "Please enter baby's lenth of birth";
        return false;
      }
      if (!apgarS || !apgarS.includes("")) {
        document.getElementById("apgarSE").textContent = "Please enter baby's APGAR score";
        return false;
      }
      if (!bloodT || !bloodT.includes("")) {
        document.getElementById("bloodTE").textContent = "Please enter baby's blood type";
        return false;
      }
      if (!immediateHealth || !immediateHealth.includes("")) {
        document.getElementById("immediateHealthE").textContent = "Please fill this field";
        return false;
      }
      if (!vaccinationsIMMU || !vaccinationsIMMU.includes("")) {
        document.getElementById("vaccinationsIMMUE").textContent = "Please fill this field";
        return false;
      }
      if (!medicalProce || !medicalProce.includes("")) {
        document.getElementById("medicalProceE").textContent = "Please fill this field";
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
            // .ref("MOH/" + BidV)
            .ref("Main/" + BidV + "/MedicalInfo")
            .set({
                Bid: BidV,
                name: nameV,
                gender: genderV,
                dateOfBirth: dobV,

                timeOfBirth: tobV,
                BirthWeight: bwV,
                LengthAtBirth: lbV,
                ApgaScore: apgarSV,
                
                BloodType: bloodTV,
                immediateHealthConcerns: immediateHealthV,
                RecordOfVaccinations: vaccinationsIMMUV,
                medicalProcedures: medicalProceV,
                
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
    document.getElementById("bw").value = "";
    document.getElementById("lb").value = "";
    document.getElementById("apgarS").value = "";
    document.getElementById("bloodT").value = "";
    document.getElementById("immediateHealth").value = "";
    document.getElementById("vaccinationsIMMU").value = "";
    document.getElementById("medicalProce").value = "";
}



document.getElementById("read").onclick = function () {
  if (validateForm2()) {
    readForm();

  firebase
    .database()
    // .ref("MOH/" + BidV)
    .ref("Main/" + BidV + "/MedicalInfo")
    .on("value", function (snap) {
      document.getElementById("Bid").value = snap.val().Bid;
      document.getElementById("name").value = snap.val().name;
      document.getElementById("gender").value = snap.val().gender;

    document.getElementById("dob").value = snap.val().dateOfBirth;
    document.getElementById("tob").value = snap.val().timeOfBirth;

    document.getElementById("bw").value = snap.val().BirthWeight;
    document.getElementById("lb").value = snap.val().LengthAtBirth;
    document.getElementById("apgarS").value = snap.val().ApgaScore;
    document.getElementById("bloodT").value = snap.val().BloodType;
    document.getElementById("immediateHealth").value = snap.val().immediateHealthConcerns;
    document.getElementById("vaccinationsIMMU").value = snap.val().RecordOfVaccinations;
    document.getElementById("medicalProce").value = snap.val().medicalProcedures;
    
      
    });
    readData();
}};



document.getElementById("update").onclick = function () {
  if (validateForm1()) {
    readForm();

  firebase
    .database()
    // .ref("MOH/" + BidV)
    .ref("Main/" + BidV + "/MedicalInfo")
    .update({
      //   rollNo: rollV,
      name: nameV,
      gender: genderV,
      dateOfBirth: dobV,
      timeOfBirth: tobV,
      BirthWeight: bwV,
      LengthAtBirth: lbV,
      ApgaScore: apgarSV,
      BloodType: bloodTV,
      immediateHealthConcerns: immediateHealthV,
      RecordOfVaccinations: vaccinationsIMMUV,
      medicalProcedures: medicalProceV,
    });

    updateData();

  // alert("Data Update");
  document.getElementById("Bid").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("dob").value = "";
  document.getElementById("tob").value = "";
  document.getElementById("bw").value = "";
  document.getElementById("lb").value = "";
  document.getElementById("apgarS").value = "";
  document.getElementById("bloodT").value = "";
  document.getElementById("immediateHealth").value = "";
  document.getElementById("vaccinationsIMMU").value = "";
  document.getElementById("medicalProce").value = "";

}};



document.getElementById("delete").onclick = function () {
  if (validateForm2()) {
  readForm();
  deleteData();
  firebase
    .database()
    // .ref("MOH/" + BidV)
    .ref("Main/" + BidV + "/MedicalInfo")
    .remove();
  alert("Data Deleted");
  document.getElementById("Bid").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("dob").value = "";
  document.getElementById("tob").value = "";
  document.getElementById("bw").value = "";
  document.getElementById("lb").value = "";
  document.getElementById("apgarS").value = "";
  document.getElementById("bloodT").value = "";
  document.getElementById("immediateHealth").value = "";
  document.getElementById("vaccinationsIMMU").value = "";
  document.getElementById("medicalProce").value = "";

}};
