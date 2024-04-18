// Define variables for form values
var CidV, CnameV,CTimeV, DnameV, CdateV, speciaclNV;


// Function to read form values
function readForm() {

  // CdateV = document.getElementById("Cdate").value;
  // CnameV = document.getElementById("Cname").value;
  // CTimeV = document.getElementById("CTime").value;
  // DnameV = document.getElementById("Dname").value;
  // speciaclNV = document.getElementById("speciaclN").value;


    // console.log(CdateV);
}

// // Event listener for form submission
// document.getElementById("insert").onclick = function () {
//     readForm();

//     firebase
//         .database()
//         .ref("Clinic/" + CdateV )
//         .set({
         
            
//             Clinic_date: CdateV,
//             Clinic_name: CnameV,
//             Clinic_time: CTimeV,
//             Doctor_name: DnameV,
//             Special_note: speciaclNV,
//         });

//     alert("Data Inserted");
//     clearFormFields();
// }
// // Bid, Bname, bMonths, gender, Npackets, Tdate, speciaclN
// // Function to clear form fields
// function clearFormFields() {
//     document.getElementById("Cdate").value = "";
//     document.getElementById("Cname").value = "";
//     document.getElementById("CTime").value = "";
//     document.getElementById("Dname").value = "";
//     document.getElementById("speciaclN").value = "";
// }


// document.getElementById("read").onclick = function () {
//     readForm();
//     //Cname, Dname, Cdate, speciaclN

//   firebase
//     .database()
//     .ref("Clinic/" + CdateV )
//     .on("value", function (snap) {

//     document.getElementById("Cdate").textContent = snap.val().Clinic_date;
//     document.getElementById("Cname").textContent = snap.val().Clinic_name;
//     document.getElementById("CTime").textContent = snap.val().Clinic_time;
//     document.getElementById("Dname").textContent = snap.val().Doctor_name;
//     document.getElementById("speciaclN").textContent = snap.val().Special_note;
    
      
//     });
// };
document.getElementById("read").onclick = function () {
  readForm();

  firebase
      .database()
      .ref("Clinic")
      .on("value", function (snapshot) {
          var tableBody = document.getElementById("tableBody");
          tableBody.innerHTML = ""; // Clear previous content

          snapshot.forEach(function (childSnapshot) {
              // For each clinic, create a new row and populate it with clinic details
              var clinicData = childSnapshot.val();
              var newRow = document.createElement("tr");
              newRow.innerHTML = `
                  <td>${clinicData.Clinic_name}</td>
                  <td>${clinicData.Clinic_time}</td>
                  <td>${clinicData.Doctor_name}</td>
                  <td>${clinicData.Special_note}</td>
              `;
              tableBody.appendChild(newRow);
          });
      });
};




// document.getElementById("update").onclick = function () {
//     readForm();

//   firebase
//     .database()
//     .ref("Clinic/" + CdateV )
//     .update({
     
//       // Baby_id: BidV,
//       // Clinic_date: CdateV,
//       Clinic_name: CnameV,
//       Clinic_time: CTimeV,
//       Doctor_name: DnameV,
//       Special_note: speciaclNV,
//     });

//   alert("Data Update");
//   document.getElementById("Cdate").value = "";
//   document.getElementById("Cname").value = "";
//   document.getElementById("CTime").value = "";
//   document.getElementById("Dname").value = "";
//   document.getElementById("speciaclN").value = "";

// };



// document.getElementById("delete").onclick = function () {
//   readForm();

//   firebase
//     .database()
//     .ref("Clinic/" + CdateV )
//     .remove();
//   alert("Data Deleted");
//   document.getElementById("Cdate").value = "";
//   document.getElementById("Cname").value = "";
//   document.getElementById("CTime").value = "";
//   document.getElementById("Dname").value = "";
//   document.getElementById("speciaclN").value = "";

// };

