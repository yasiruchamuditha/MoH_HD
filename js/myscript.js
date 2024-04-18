
// Define variables for form values
var BidV, nameV, genderV, dobV, tobV, pobV, mothernameV, fathernameV, addressV, pnumberV, emailV, MOccupationV, FOccupationV;

// Function to read form values
function readForm() {
  BidV = document.getElementById("Bid").value;
    nameV = document.getElementById("name").value;s
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
    console.log(rollV, nameV, genderV, dobV, tobV, pobV, mothernameV, fathernameV, addressV, pnumberV, emailV, MOccupationV, FOccupationV);
    
}

// Event listener for form submission
document.getElementById("insert").onclick = function () {
    readForm();

    
        firebase
            .database()
            .ref("Parents/" + BidV)
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

        alert("Data Inserted");
        clearFormFields();
    } 


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
    readForm();

  firebase
    .database()
    .ref("Parents/" + BidV)
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
};



document.getElementById("update").onclick = function () {
    readForm();

  firebase
    .database()
    .ref("Parents/" + BidV)
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

  alert("Data Update");
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

};



document.getElementById("delete").onclick = function () {
  readForm();

  firebase
    .database()
    .ref("Parents/" + BidV)
    .remove();
  alert("Data Deleted");
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

};
