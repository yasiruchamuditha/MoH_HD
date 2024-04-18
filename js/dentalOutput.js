// Define variables for form values
var CdateV, DnameV, DTimeV, speciaclNV;



// Function to read form values
function readForm() {

  CdateV = document.getElementById("Cdate").value;
  // DnameV = document.getElementById("Dname").value;
  // DTimeV = document.getElementById("DTime").value;
  // speciaclNV = document.getElementById("speciaclN").value;


    console.log(CdateV);
}

// Event listener for form submission
// document.getElementById("insert").onclick = function () {
//     readForm();

//     firebase
//         .database()
//         .ref("Dental/" + CdateV )
//         .set({
         
            
//             Dental_Surgery_date: CdateV,
//             Doctor_name: DnameV,
//             Dental_Surgery_time: DTimeV,
//             Special_note: speciaclNV,
//         });

//     alert("Data Inserted");
//     clearFormFields();
// }
// CdateV, DnameV, DTimeV, speciaclNV;

// Function to clear form fields
// function clearFormFields() {
//     document.getElementById("Cdate").value = "";
//     document.getElementById("Dname").value = "";
//     document.getElementById("DTime").value = "";
//     document.getElementById("speciaclN").value = "";
// }


// document.getElementById("read").onclick = function () {
//     readForm();
//     //Cname, Dname, Cdate, speciaclN

//   firebase
//     .database()
//     .ref("Dental/" + CdateV )
//     .on("value", function (snap) {

//     document.getElementById("Cdate").value = snap.val().Dental_Surgery_date;
//     document.getElementById("Dname").value = snap.val().Doctor_name;
//     document.getElementById("DTime").value = snap.val().Dental_Surgery_time;
//     document.getElementById("speciaclN").value = snap.val().Special_note;
    
      
//     });
// };


// document.getElementById("read").onclick = function () {
//   readForm();

//   firebase
//       .database()
//       .ref("Dental/" + CdateV)
//       .on("value", function (snap) {
//           document.getElementById("Cdate").textContent = snap.val().Dental_Surgery_date;
//           document.getElementById("Dname").textContent = snap.val().Doctor_name;
//           document.getElementById("DTime").textContent = snap.val().Dental_Surgery_time;
//           document.getElementById("speciaclN").textContent = snap.val().Special_note;
//       });
// };


document.getElementById("read").onclick = function () {
  readForm();

  firebase
    .database()
    .ref("Dental/" + CdateV)
    .on("value", function (snap) {
      var appointmentData = snap.val();
      var tableBody = document.getElementById("tableBody");

      // Clear previous data
      tableBody.innerHTML = '';

      // Populate table rows with appointment data
      var newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td>${appointmentData.Dental_Surgery_date}</td>
        <td>${appointmentData.Doctor_name}</td>
        <td>${appointmentData.Dental_Surgery_time}</td>
        <td>${appointmentData.Special_note}</td>
      `;
      tableBody.appendChild(newRow);
    });
};



// document.getElementById("update").onclick = function () {
//     readForm();

//   firebase
//     .database()
//     .ref("Dental/" + CdateV )
//     .update({
     
//       // Baby_id: BidV,
//       // Clinic_date: CdateV,
//       // Dental_Surgery_date: CdateV,
//       Doctor_name: DnameV,
//       Dental_Surgery_time: DTimeV,
//       Special_note: speciaclNV,
//     });

//   alert("Data Update");
//   document.getElementById("Cdate").value = "";
//     document.getElementById("Dname").value = "";
//     document.getElementById("DTime").value = "";
//     document.getElementById("speciaclN").value = "";

// };



// document.getElementById("delete").onclick = function () {
//   readForm();

//   firebase
//     .database()
//     .ref("Dental/" + CdateV )
//     .remove();
//   alert("Data Deleted");
//   document.getElementById("Cdate").value = "";
//     document.getElementById("Dname").value = "";
//     document.getElementById("DTime").value = "";
//     document.getElementById("speciaclN").value = "";

// };
