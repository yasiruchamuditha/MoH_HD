


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

// Event listener for form submission
document.getElementById("insert").onclick = function () {
    readForm();

    
        firebase
            .database()
            .ref("MOH/" + BidV)
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
    document.getElementById("bw").value = "";
    document.getElementById("lb").value = "";
    document.getElementById("apgarS").value = "";
    document.getElementById("bloodT").value = "";
    document.getElementById("immediateHealth").value = "";
    document.getElementById("vaccinationsIMMU").value = "";
    document.getElementById("medicalProce").value = "";
}



document.getElementById("read").onclick = function () {
    readForm();

  firebase
    .database()
    .ref("MOH/" + BidV)
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
};



document.getElementById("update").onclick = function () {
    readForm();

  firebase
    .database()
    .ref("MOH/" + BidV)
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

  alert("Data Update");
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

};



document.getElementById("delete").onclick = function () {
  readForm();

  firebase
    .database()
    .ref("MOH/" + BidV)
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

};
