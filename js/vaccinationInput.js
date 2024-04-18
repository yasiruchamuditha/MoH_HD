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

// Event listener for form submission
document.getElementById("insert").onclick = function () {
    readForm();

    firebase
        .database()
        .ref("Vaccinations/" + BidV + "/" + bMonthsV + "/" + VnameV)
        .set({
         
            Baby_id: BidV,
            Baby_name: BnameV,
            Baby_months: bMonthsV,
            Gender: genderV,
            Vaccine_name: VnameV,
            Vaccination_date: VdateV,
            immediateHealth: immediateHealthV,
        });

    alert("Data Inserted");
    clearFormFields();
}
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
    readForm();
    //Bid, Bname, bMonths, gender, Vname, Vdate, immediateHealth
  firebase
    .database()
    .ref("Vaccinations/" + BidV + "/" + bMonthsV)
    .on("value", function (snap) {
    document.getElementById("Bid").value = snap.val().Baby_id;
    document.getElementById("Bname").value = snap.val().Baby_name;
    document.getElementById("bMonths").value = snap.val().Baby_months;

    document.getElementById("gender").value = snap.val().Gender;
    document.getElementById("Vname").value = snap.val().Vaccine_name;
    document.getElementById("Vdate").value = snap.val().Vaccination_date;
    document.getElementById("immediateHealth").value = snap.val().immediateHealth;
    
      
    });
};



document.getElementById("update").onclick = function () {
    readForm();

  firebase
    .database()
    .ref("Vaccinations/" + BidV + "/" + bMonthsV)
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

  alert("Data Update");
  document.getElementById("Bid").value = "";
  document.getElementById("Bname").value = "";
  document.getElementById("bMonths").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("Vname").value = "";
  document.getElementById("Vdate").value = "";
  document.getElementById("immediateHealth").value = "";

};



document.getElementById("delete").onclick = function () {
  readForm();

  firebase
    .database()
    .ref("Vaccinations/" + BidV + "/" + bMonthsV)
    .remove();
  alert("Data Deleted");
  document.getElementById("Bid").value = "";
  document.getElementById("Bname").value = "";
  document.getElementById("bMonths").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("Vname").value = "";
  document.getElementById("Vdate").value = "";
  document.getElementById("immediateHealth").value = "";

};

