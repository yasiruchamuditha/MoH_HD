// Define variables for form values
var BidV, bMonthsV;


// Function to read form values
function readForm() {
    BidV = document.getElementById("Bid").value;
    console.log(BidV);
}


function clearFormFields() {
    document.getElementById("Bid").value = "";
}



// document.getElementById("read").onclick = function () {
//     readForm();
  
//     firebase.database().ref("Main/" + BidV + "/ParentInfo").on("value", function (snap) {
//       var parentInfo = snap.val();
//       var cardContainer = document.getElementById("cardContainer");
      
//       // Create card element
//       var card = document.createElement("div");
//       card.classList.add("card");
  
//       // Populate card with parent info
//       var cardContent = `
//         <p>Bid: ${parentInfo.Bid}</p>
//         <p>Name: ${parentInfo.name}</p>
//         <p>Gender: ${parentInfo.gender}</p>
//         <p>Date of Birth: ${parentInfo.dateOfBirth}</p>
//         <p>Time of Birth: ${parentInfo.timeOfBirth}</p>
//         <p>Place of Birth: ${parentInfo.placeOfBirth}</p>
//         <p>Mother's Name: ${parentInfo.motherName}</p>
//         <p>Father's Name: ${parentInfo.fatherName}</p>
//         <p>Address: ${parentInfo.address}</p>
//         <p>Phone Number: ${parentInfo.phoneNumber}</p>
//         <p>Email: ${parentInfo.email}</p>
     
//       `;
  
//       card.innerHTML = cardContent;
//       cardContainer.appendChild(card);
//     });
//   };

// document.getElementById("read").onclick = function () {
//     readForm();
  
//     firebase.database().ref("Main/" + BidV + "/MedicalInfo").on("value", function (snap) {
//       var medicalInfo = snap.val();
//       var cardContainer = document.getElementById("cardContainer");
  
//       // Clear previous data
//       cardContainer.innerHTML = '';
  
//       // Create card element
//       var card = document.createElement("div");
//       card.classList.add("card");
  
//       // Populate card with medical information
//       card.innerHTML = `
//         <p>Bid: ${medicalInfo.Bid}</p>
//         <p>Name: ${medicalInfo.name}</p>
//         <p>Gender: ${medicalInfo.gender}</p>
//         <p>Date of Birth: ${medicalInfo.dateOfBirth}</p>
//         <p>Time of Birth: ${medicalInfo.timeOfBirth}</p>
//         <p>Birth Weight: ${medicalInfo.BirthWeight}</p>
//         <p>Length at Birth: ${medicalInfo.LengthAtBirth}</p>
//         <p>Apga Score: ${medicalInfo.ApgaScore}</p>
//         <p>Blood Type: ${medicalInfo.BloodType}</p>
//         <p>Immediate Health Concerns: ${medicalInfo.immediateHealthConcerns}</p>
//         <p>Record of Vaccinations: ${medicalInfo.RecordOfVaccinations}</p>
//         <p>Medical Procedures: ${medicalInfo.medicalProcedures}</p>
//       `;
  
//       cardContainer.appendChild(card);
//     });
//   };
  

document.getElementById("read").onclick = function () {
    readForm();
  
    firebase.database().ref("Main/" + BidV + "/ParentInfo").on("value", function (snap) {
      var parentInfo = snap.val();
      var cardContainer = document.getElementById("cardContainer");
      
      // Create card element
      var card = document.createElement("div");
    //   card.classList.add("card");
  
      // Populate card with parent info
      var cardContent = `
        <p>Name: ${parentInfo.name}</p>
        <p>Gender: ${parentInfo.gender}</p>
        <p>Place of Birth: ${parentInfo.placeOfBirth}</p>
        <p>Mother's Name: ${parentInfo.motherName}</p>
        <p>Father's Name: ${parentInfo.fatherName}</p>
        <p>Address: ${parentInfo.address}</p>
        <p>Phone Number: ${parentInfo.phoneNumber}</p>
        <p>Email: ${parentInfo.email}</p>
     
      `;
  
      card.innerHTML = cardContent;
      cardContainer.appendChild(card);
    });
//   };

//   document.getElementById("read").onclick = function () {
//     readForm();
  
    firebase.database().ref("Main/" + BidV + "/MedicalInfo").on("value", function (snap) {
      var medicalInfo = snap.val();
      var cardContainer = document.getElementById("cardContainer2");
  
      // Clear previous data
      cardContainer.innerHTML = '';
  
      // Create card element
      var card = document.createElement("div");
    //   card.classList.add("card");
  
      // Populate card with medical information
      card.innerHTML = `
      
        <p>Date of Birth: ${medicalInfo.dateOfBirth}</p>
        <p>Time of Birth: ${medicalInfo.timeOfBirth}</p>
        <p>Birth Weight: ${medicalInfo.BirthWeight}</p>
        <p>Length at Birth: ${medicalInfo.LengthAtBirth}</p>
        <p>Apga Score: ${medicalInfo.ApgaScore}</p>
        <p>Blood Type: ${medicalInfo.BloodType}</p>
        <p>Immediate Health Concerns: ${medicalInfo.immediateHealthConcerns}</p>
        <p>Record of Vaccinations: ${medicalInfo.RecordOfVaccinations}</p>
        <p>Medical Procedures: ${medicalInfo.medicalProcedures}</p>
      `;
  
      cardContainer.appendChild(card);
    });
//   };

//   document.getElementById("read").onclick = function () {
//     readForm();
    //Bid, Bname, bMonths, gender, Vname, Vdate, immediateHealth
    firebase
        .database()
        .ref("Main/" + BidV + "/Vaccinations") // Assuming BidV is defined elsewhere
        .on("value", function (snapshot) {
            snapshot.forEach(function(childSnapshot) {
                var bMonthsV = childSnapshot.key; // Assuming bMonthsV is the key for each vaccination
                var vaccinationDetails = childSnapshot.val();

                // Create HTML elements to display vaccination details
                var vaccinationDetailsHTML = document.createElement("div");
                // vaccinationDetailsHTML.innerHTML = `
                //     <p><strong>Vaccination Month:</strong> ${bMonthsV}</p>
                //     <p><strong>Baby ID:</strong> ${vaccinationDetails.Baby_id}</p>
                //     <p><strong>Baby Name:</strong> ${vaccinationDetails.Baby_name}</p>
                //     <p><strong>Baby Months:</strong> ${vaccinationDetails.Baby_months}</p>
                //     <p><strong>Gender:</strong> ${vaccinationDetails.Gender}</p>
                //     <p><strong>Vaccine Name:</strong> ${vaccinationDetails.Vaccine_name}</p>
                //     <p><strong>Vaccination Date:</strong> ${vaccinationDetails.Vaccination_date}</p>
                //     <p><strong>Immediate Health:</strong> ${vaccinationDetails.immediateHealth}</p>
                //     <hr>
                // `;
                vaccinationDetailsHTML.innerHTML = `
                <p><strong>Baby Months:</strong> ${vaccinationDetails.Baby_months}</p>
                <p><strong>Vaccine Name:</strong> ${vaccinationDetails.Vaccine_name}</p>
                <p><strong>Vaccination Date:</strong> ${vaccinationDetails.Vaccination_date}</p>
                <p><strong>Immediate Health:</strong> ${vaccinationDetails.immediateHealth}</p>
                <hr>
            `;

                // Append vaccination details HTML to the card with specified ID
                var card = document.getElementById("cardContainer3"); // Replace "yourCardID" with your actual card ID
                card.appendChild(vaccinationDetailsHTML);
            });
        });
// };
// document.getElementById("read").onclick = function () {
//     readForm();
    firebase
        .database()
        .ref("Main/" + BidV + "/Triposha") // Assuming BidV is defined elsewhere
        .on("value", function (snapshot) {
            snapshot.forEach(function(childSnapshot) {
                var bMonthsV = childSnapshot.key; // Assuming bMonthsV is the key for each Triposha entry
                var triposhaDetails = childSnapshot.val();

                // Create HTML elements to display Triposha details
                var triposhaDetailsHTML = document.createElement("div");
                // triposhaDetailsHTML.innerHTML = `
                //     <p><strong>Triposha Month:</strong> ${bMonthsV}</p>
                //     <p><strong>Baby ID:</strong> ${triposhaDetails.Baby_id}</p>
                //     <p><strong>Baby Name:</strong> ${triposhaDetails.Baby_name}</p>
                //     <p><strong>Baby Months:</strong> ${triposhaDetails.Baby_months}</p>
                //     <p><strong>Gender:</strong> ${triposhaDetails.Gender}</p>
                //     <p><strong>Number of Packets:</strong> ${triposhaDetails.Packets}</p>
                //     <p><strong>Triposha Date:</strong> ${triposhaDetails.Triposha_date}</p>
                //     <p><strong>Special Note:</strong> ${triposhaDetails.Special_note}</p>
                //     <hr>
                // `;
                triposhaDetailsHTML.innerHTML = `
                
                <p><strong>Baby Months:</strong> ${triposhaDetails.Baby_months}</p>
                <p><strong>Number of Packets:</strong> ${triposhaDetails.Packets}</p>
                <p><strong>Triposha Date:</strong> ${triposhaDetails.Triposha_date}</p>
                <p><strong>Special Note:</strong> ${triposhaDetails.Special_note}</p>
                <hr>
            `;

                // Append Triposha details HTML to the card with specified ID
                var card = document.getElementById("cardContainer4"); // Replace "yourCardID" with your actual card ID
                card.appendChild(triposhaDetailsHTML);
            });
        });
// };
// document.getElementById("read").onclick = function () {
//     readForm();
  
    firebase.database().ref("Clinic").on("value", function (snapshot) {
      var cardContainer = document.getElementById("cardContainer5");
  
      // Clear previous data
      cardContainer.innerHTML = '';
  
      // Iterate over each child of the Clinic node
      snapshot.forEach(function(childSnapshot) {
        var clinicInfo = childSnapshot.val();
  
        // Create card element for each clinic entry
        var card = document.createElement("div");
        // card.classList.add("card");
  
        // Populate card with clinic information
        // card.innerHTML = `
        //   <p>Clinic Date: ${clinicInfo.Clinic_date}</p>
        //   <p>Clinic Name: ${clinicInfo.Clinic_name}</p>
        //   <p>Clinic Time: ${clinicInfo.Clinic_time}</p>
        //   <p>Doctor Name: ${clinicInfo.Doctor_name}</p>
        //   <p>Special Note: ${clinicInfo.Special_note}</p>
        // `;
        card.innerHTML = `
        <p>Clinic Date: ${clinicInfo.Clinic_date}</p>
        <p>Clinic Name: ${clinicInfo.Clinic_name}</p>
        <p>Clinic Time: ${clinicInfo.Clinic_time}</p>
        
      `;
  
        cardContainer.appendChild(card);
      });
    });
//   };
// document.getElementById("read").onclick = function () {
//     readForm();
  
    firebase.database().ref("Dental").on("value", function (snapshot) {
      var cardContainer = document.getElementById("cardContainer6");
  
      // Clear previous data
      cardContainer.innerHTML = '';
  
      // Iterate over each child of the Dental node
      snapshot.forEach(function(childSnapshot) {
        var appointmentData = childSnapshot.val();
  
        // Create card element for each appointment entry
        var card = document.createElement("div");
        // card.classList.add("card");
  
        // Populate card with appointment data
        card.innerHTML = `
          <p>Doctor Name: ${appointmentData.Doctor_name}</p>
          <p>Dental Surgery Time: ${appointmentData.Dental_Surgery_time}</p>
          <p>Special Note: ${appointmentData.Special_note}</p>
        `;
  
        cardContainer.appendChild(card);
      });
    });
//   };
// document.getElementById("read").onclick = function () {
//     readForm();
    firebase
        .database()
        .ref("Main/" + BidV + "/Laboratory") // Assuming BidV is defined elsewhere
        .on("value", function (snapshot) {
            snapshot.forEach(function(childSnapshot) {
                var TdateV = childSnapshot.key; // Assuming TdateV is the key for each laboratory entry
                var labDetails = childSnapshot.val();

                // Create HTML elements to display laboratory details
                var labDetailsHTML = document.createElement("div");
                // labDetailsHTML.innerHTML = `
                //     <p><strong>Test Date:</strong> ${labDetails.Test_date}</p>
                //     <p><strong>Baby ID:</strong> ${labDetails.Baby_id}</p>
                //     <p><strong>Baby Name:</strong> ${labDetails.Baby_name}</p>
                //     <p><strong>Parent Name:</strong> ${labDetails.Parent_name}</p>
                //     <p><strong>Contact Number:</strong> ${labDetails.Contact_number}</p>
                //     <p><strong>Email:</strong> ${labDetails.Email}</p>
                //     <p><strong>Test Name:</strong> ${labDetails.Test_name}</p>
                //     <p><strong>Test Result:</strong> ${labDetails.Test_result}</p>
                //     <p><strong>Special Note:</strong> ${labDetails.Special_note}</p>
                //     <hr>
                // `;
                labDetailsHTML.innerHTML = `
                <p><strong>Test Date:</strong> ${labDetails.Test_date}</p>
                <p><strong>Test Name:</strong> ${labDetails.Test_name}</p>
                <p><strong>Test Result:</strong> ${labDetails.Test_result}</p>
                <p><strong>Special Note:</strong> ${labDetails.Special_note}</p>
                <hr>
            `;

                // Append laboratory details HTML to the card with specified ID
                var card = document.getElementById("cardContainer7"); // Replace "yourCardID" with your actual card ID
                card.appendChild(labDetailsHTML);
            });
        });
// };

// document.getElementById("read").onclick = function () {
//     readForm();
    firebase
        .database()
        .ref("Main/" + BidV + "/EyeAndEar") // Assuming BidV is defined elsewhere
        .on("value", function (snapshot) {
            snapshot.forEach(function(childSnapshot) {
                var monthsV = childSnapshot.key; // Assuming monthsV is the key for each EyeAndEar entry
                var eyeAndEarDetails = childSnapshot.val();

                // Create HTML elements to display EyeAndEar details
                var eyeAndEarDetailsHTML = document.createElement("div");
                // eyeAndEarDetailsHTML.innerHTML = `
                //     <p><strong>Baby ID:</strong> ${eyeAndEarDetails.Bid}</p>
                //     <p><strong>Test Date:</strong> ${eyeAndEarDetails.Tdate}</p>
                //     <p><strong>Doctor Name:</strong> ${eyeAndEarDetails.Dname}</p>
                //     <p><strong>Months:</strong> ${eyeAndEarDetails.months}</p>
                //     <p><strong>Eye Test Name:</strong> ${eyeAndEarDetails.ETName}</p>
                //     <p><strong>Eye Test Result:</strong> ${eyeAndEarDetails.ETresult}</p>
                //     <p><strong>Ear Test Name:</strong> ${eyeAndEarDetails.EarTName}</p>
                //     <p><strong>Ear Test Result:</strong> ${eyeAndEarDetails.EarTresult}</p>
                //     <p><strong>Special Note:</strong> ${eyeAndEarDetails.speciaclN}</p>
                //     <hr>
                // `;

                eyeAndEarDetailsHTML.innerHTML = `
             
                <p><strong>Test Date:</strong> ${eyeAndEarDetails.Tdate}</p>
                <p><strong>Doctor Name:</strong> ${eyeAndEarDetails.Dname}</p>
                <p><strong>Eye Test Name:</strong> ${eyeAndEarDetails.ETName}</p>
                <p><strong>Eye Test Result:</strong> ${eyeAndEarDetails.ETresult}</p>
                <p><strong>Ear Test Name:</strong> ${eyeAndEarDetails.EarTName}</p>
                <p><strong>Ear Test Result:</strong> ${eyeAndEarDetails.EarTresult}</p>
                <p><strong>Special Note:</strong> ${eyeAndEarDetails.speciaclN}</p>
                <hr>
            `;

                // Append EyeAndEar details HTML to the card with specified ID
                var card = document.getElementById("cardContainer8"); // Replace "yourCardID" with your actual card ID
                card.appendChild(eyeAndEarDetailsHTML);
            });
        });
};
