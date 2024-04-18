// Define variables for form values
var CdateV, DnameV, DTimeV, speciaclNV;



// Function to read form values
function readForm() {

  CdateV = document.getElementById("Cdate").value;
  DnameV = document.getElementById("Dname").value;
  DTimeV = document.getElementById("DTime").value;
  speciaclNV = document.getElementById("speciaclN").value;


    console.log(CdateV, DnameV, DTimeV, speciaclNV);
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

 
  var Cdate = document.getElementById("Cdate").value;
  var Dname = document.getElementById("Dname").value;
  var DTime = document.getElementById("DTime").value;
  var speciaclN = document.getElementById("speciaclN").value;
  
     // Validate email
     if (!Cdate || !Cdate.includes("")) {
      document.getElementById("CdateE").textContent = "Please enter clinic date";
      return false;
  }
    if (!Dname || !Dname.includes("")) {
      document.getElementById("DnameE").textContent = "Please enter doctor's name";
      return false;
  }
    if (!DTime || !DTime.includes("")) {
      document.getElementById("DTimeE").textContent = "Please enter clinic time";
      return false;
  }
    if (!speciaclN || !speciaclN.includes("")) {
      document.getElementById("speciaclNE").textContent = "Please enter special notes or none ";
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

  var Cdate = document.getElementById("Cdate").value;
 
 
  
  
     // Validate email
     if (!Cdate || !Cdate.includes("")) {
      document.getElementById("CdateE").textContent = "Please enter clinic date";
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
        .ref("Dental/" + CdateV )
        .set({
         
            
            Dental_Surgery_date: CdateV,
            Doctor_name: DnameV,
            Dental_Surgery_time: DTimeV,
            Special_note: speciaclNV,
        });

    // alert("Data Inserted");
    insertData();
    clearFormFields();
}};
// CdateV, DnameV, DTimeV, speciaclNV;

// Function to clear form fields
function clearFormFields() {
    document.getElementById("Cdate").value = "";
    document.getElementById("Dname").value = "";
    document.getElementById("DTime").value = "";
    document.getElementById("speciaclN").value = "";
}


document.getElementById("read").onclick = function () {
  if (validateForm2()) {
    readForm();
    //Cname, Dname, Cdate, speciaclN

  firebase
    .database()
    .ref("Dental/" + CdateV )
    .on("value", function (snap) {

    document.getElementById("Cdate").value = snap.val().Dental_Surgery_date;
    document.getElementById("Dname").value = snap.val().Doctor_name;
    document.getElementById("DTime").value = snap.val().Dental_Surgery_time;
    document.getElementById("speciaclN").value = snap.val().Special_note;
    
      
    });
    readData();
}};



document.getElementById("update").onclick = function () {
  if (validateForm1()) {
    readForm();


  firebase
    .database()
    .ref("Dental/" + CdateV )
    .update({
     
      // Baby_id: BidV,
      // Clinic_date: CdateV,
      // Dental_Surgery_date: CdateV,
      Doctor_name: DnameV,
      Dental_Surgery_time: DTimeV,
      Special_note: speciaclNV,
    });

  // alert("Data Update");
  updateData();
  document.getElementById("Cdate").value = "";
    document.getElementById("Dname").value = "";
    document.getElementById("DTime").value = "";
    document.getElementById("speciaclN").value = "";

}};



document.getElementById("delete").onclick = function () {
  if (validateForm2()) {
    readForm();
    deleteData();

  firebase
    .database()
    .ref("Dental/" + CdateV )
    .remove();
  // alert("Data Deleted");
  document.getElementById("Cdate").value = "";
    document.getElementById("Dname").value = "";
    document.getElementById("DTime").value = "";
    document.getElementById("speciaclN").value = "";

}};