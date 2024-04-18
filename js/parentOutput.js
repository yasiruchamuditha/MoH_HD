
// Define variables for form values
var BidV;

// Function to read form values
function readForm() {
  BidV = document.getElementById("Bid").value;
    // nameV = document.getElementById("name").value;
    // genderV = document.getElementById("gender").value;
    // dobV = document.getElementById("dob").value;
    // tobV = document.getElementById("tob").value;
    // pobV = document.getElementById("pob").value;
    // mothernameV = document.getElementById("mothername").value;
    // fathernameV = document.getElementById("fathername").value;
    // addressV = document.getElementById("address").value;
    // pnumberV = document.getElementById("pnumber").value;
    // emailV = document.getElementById("email").value;
    // MOccupationV = document.getElementById("MOccupation").value;
    // FOccupationV = document.getElementById("FOccupation").value;
    // console.log(rollV, nameV, genderV, dobV, tobV, pobV, mothernameV, fathernameV, addressV, pnumberV, emailV, MOccupationV, FOccupationV);
    console.log(BidV);
    
}

// Event listener for form submission
// document.getElementById("insert").onclick = function () {
//     readForm();

    
//         firebase
//             .database()
//             .ref("Parents/" + rollV)
//             .set({
//                 rollNo: rollV,
//                 name: nameV,
//                 gender: genderV,
//                 dateOfBirth: dobV,
//                 timeOfBirth: tobV,
//                 placeOfBirth: pobV,
//                 motherName: mothernameV,
//                 fatherName: fathernameV,
//                 address: addressV,
//                 phoneNumber: pnumberV,
//                 email: emailV,
//                 motherOccupation: MOccupationV,
//                 fatherOccupation: FOccupationV,
//             });

//         alert("Data Inserted");
//         clearFormFields();
//     } 


// // Function to clear form fields
// function clearFormFields() {
//     document.getElementById("roll").value = "";
//     document.getElementById("name").value = "";
//     document.getElementById("gender").value = "";
//     document.getElementById("dob").value = "";
//     document.getElementById("tob").value = "";
//     document.getElementById("pob").value = "";
//     document.getElementById("mothername").value = "";
//     document.getElementById("fathername").value = "";
//     document.getElementById("address").value = "";
//     document.getElementById("pnumber").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("MOccupation").value = "";
//     document.getElementById("FOccupation").value = "";
// }



// document.getElementById("read").onclick = function () {
//     readForm();

//   firebase
//     .database()
//     .ref("Parents/" + BidV)
//     .on("value", function (snap) {
//       document.getElementById("Bid").value = snap.val().rollNo;
//       document.getElementById("name").value = snap.val().name;
//       document.getElementById("gender").value = snap.val().gender;

//       document.getElementById("dob").value = snap.val().dateOfBirth;
//     document.getElementById("tob").value = snap.val().timeOfBirth;
//     document.getElementById("pob").value = snap.val().placeOfBirth;
//     document.getElementById("mothername").value = snap.val().motherName;
//     document.getElementById("fathername").value = snap.val().fatherName;
//     document.getElementById("address").value = snap.val().address;
//     document.getElementById("pnumber").value = snap.val().phoneNumber;
//     document.getElementById("email").value = snap.val().email;
//     document.getElementById("MOccupation").value = snap.val().motherOccupation;
//     document.getElementById("FOccupation").value = snap.val().fatherOccupation;
      
//     });
// };




document.getElementById("read").onclick = function () {
  readForm();

  firebase
    .database()
    .ref("Parents/" + BidV)
    .on("value", function (snap) {
      var parentData = snap.val();
      var tableBody = document.getElementById("tableBody");

      // Clear previous data
      tableBody.innerHTML = '';

      // Populate table rows with parent data
      var newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td>${parentData.Bid}</td>
        <td>${parentData.name}</td>
        <td>${parentData.gender}</td>
        <td>${parentData.dateOfBirth}</td>

        <td>${parentData.timeOfBirth}</td>
        <td>${parentData.placeOfBirth}</td>
        <td>${parentData.motherName}</td>
        <td>${parentData.fatherName}</td>
        
        <td>${parentData.address}</td>
        <td>${parentData.phoneNumber}</td>
        <td>${parentData.email}</td>
        <td>${parentData.motherOccupation}</td>
        <td>${parentData.fatherOccupation}</td>
      `;
      tableBody.appendChild(newRow);
    });
};

document.getElementById("AllData").onclick = function () {
  // Assuming readForm() function is defined elsewhere
  readForm();

  // Firebase database reference
  var databaseRef = firebase.database().ref("Parents");

  // Reference the table body
  var tableBody = document.getElementById("tableBody");

  // Clear previous data
  tableBody.innerHTML = '';

  // Fetch data from Firebase
  databaseRef.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var parentData = childSnapshot.val();

      // Create a new row
      var newRow = document.createElement("tr");

      // Populate the row with parent data
      newRow.innerHTML = `
        <td>${parentData.Bid}</td>
        <td>${parentData.name}</td>
        <td>${parentData.gender}</td>
        <td>${parentData.dateOfBirth}</td>
        <td>${parentData.timeOfBirth}</td>
        <td>${parentData.placeOfBirth}</td>
        <td>${parentData.motherName}</td>
        <td>${parentData.fatherName}</td>
        <td>${parentData.address}</td>
        <td>${parentData.phoneNumber}</td>
        <td>${parentData.email}</td>
        <td>${parentData.motherOccupation}</td>
        <td>${parentData.fatherOccupation}</td>
      `;
      
      // Append the new row to the table body
      tableBody.appendChild(newRow);
    });
  });
};


// document.getElementById("update").onclick = function () {
//     readForm();

//   firebase
//     .database()
//     .ref("Parents/" + rollV)
//     .update({
//       //   rollNo: rollV,
//       name: nameV,
//       gender: genderV,
//       address: addressV,
//       dateOfBirth: dobV,
//     timeOfBirth: tobV,
//     placeOfBirth: pobV,
//     motherName: mothernameV,
//     fatherName: fathernameV,
//     address: addressV,
//     phoneNumber: pnumberV,
//     email: emailV,
//     motherOccupation: MOccupationV,
//     fatherOccupation: FOccupationV,
//     });

//   alert("Data Update");
//   document.getElementById("roll").value = "";
//   document.getElementById("name").value = "";
//   document.getElementById("gender").value = "";
  
//   document.getElementById("dob").value = "";
//   document.getElementById("tob").value = "";
//   document.getElementById("pob").value = "";
//   document.getElementById("mothername").value = "";
//   document.getElementById("fathername").value = "";
//   document.getElementById("address").value = "";
//   document.getElementById("pnumber").value = "";
//   document.getElementById("email").value = "";
//   document.getElementById("MOccupation").value = "";
//   document.getElementById("FOccupation").value = "";

// };



// document.getElementById("delete").onclick = function () {
//   readForm();

//   firebase
//     .database()
//     .ref("Parents/" + rollV)
//     .remove();
//   alert("Data Deleted");
//   document.getElementById("roll").value = "";
//   document.getElementById("name").value = "";
//   document.getElementById("gender").value = "";
//   document.getElementById("dob").value = "";
//   document.getElementById("tob").value = "";
//   document.getElementById("pob").value = "";
//   document.getElementById("mothername").value = "";
//   document.getElementById("fathername").value = "";
//   document.getElementById("address").value = "";
//   document.getElementById("pnumber").value = "";
//   document.getElementById("email").value = "";
//   document.getElementById("MOccupation").value = "";
//   document.getElementById("FOccupation").value = "";

// };
