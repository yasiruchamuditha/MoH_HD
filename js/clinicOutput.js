// Define variables for form values
var CidV, CnameV,CTimeV, DnameV, CdateV, speciaclNV;


// Function to read form values
function readForm() {

  CdateV = document.getElementById("Cdate").value;
  // CnameV = document.getElementById("Cname").value;
  // CTimeV = document.getElementById("CTime").value;
  // DnameV = document.getElementById("Dname").value;
  // speciaclNV = document.getElementById("speciaclN").value;


    console.log(CdateV);
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
  // CdateV is assumed to be defined elsewhere

  firebase
      .database()
      .ref("Clinic/" + CdateV)
      .on("value", function (snap) {
          var table = document.createElement("table");
          table.innerHTML = `
              <tr>
                  // <th>Clinic Date</th>
                  <th>Clinic Name</th>
                  <th>Clinic Time</th>
                  <th>Doctor Name</th>
                  <th>Special Note</th>
              </tr>
              <tr>
                  // <td>${snap.val().Clinic_date}</td>
                  <td>${snap.val().Clinic_name}</td>
                  <td>${snap.val().Clinic_time}</td>
                  <td>${snap.val().Doctor_name}</td>
                  <td>${snap.val().Special_note}</td>
              </tr>`;
              
          // Assuming you have a div with id "tableContainer" where you want to append the table
          var tableContainer = document.getElementById("tableContainer");
          tableContainer.innerHTML = ""; // Clear previous content
          tableContainer.appendChild(table);
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

