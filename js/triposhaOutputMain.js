// Define variables for form values
// var BidV, BnameV, bMonthsV, genderV, NpacketsV, TdateV, speciaclNV;
var BidV;



// Function to read form values
function readForm() {
    BidV = document.getElementById("Bid").value;
    // BnameV = document.getElementById("Bname").value;
    // bMonthsV = document.getElementById("bMonths").value;
    // genderV = document.getElementById("gender").value;

    // NpacketsV = document.getElementById("Npackets").value;
    // TdateV = document.getElementById("Tdate").value;
    // speciaclNV = document.getElementById("speciaclN").value;


    // console.log(BidV, BnameV, bMonthsV, genderV, NpacketsV, TdateV, speciaclNV);
    console.log(BidV);
}
function clearFormFields() {
  document.getElementById("Bid").value = "";
}



// document.getElementById("read").onclick = function () {
//     readForm();
//     //Bid, Bname, bMonths, gender, Vname, Vdate, immediateHealth
//   firebase
//     .database()
//     .ref("Triposha/" + BidV + "/" + bMonthsV)
//     .on("value", function (snap) {
//     document.getElementById("Bid").textContent = snap.val().Baby_id;
//     document.getElementById("Bname").textContent = snap.val().Baby_name;
//     document.getElementById("bMonths").textContent = snap.val().Baby_months;

//     document.getElementById("gender").textContent = snap.val().Gender;
//     document.getElementById("Npackets").textContent = snap.val().Packets;
//     document.getElementById("Tdate").textContent = snap.val().Triposha_date;
//     document.getElementById("speciaclN").textContent = snap.val().Special_note;
    
      
//     });
// };
document.getElementById("read").onclick = function () {
  readForm();
  // BidV, bMonthsV are assumed to be defined elsewhere

  firebase.database().ref("Main/" + BidV + "/Triposha").on("value", function (snap) {
        try{
          // Get reference to table body
          var tableBody = document.getElementById("tableBody");

          // Clear table body before populating new data
          tableBody.innerHTML = "";

          // Get total number of records
          var totalRecords = snap.numChildren();

          // Output total number of records (for demonstration)
          console.log("Total Records:", totalRecords);

              // Loop through each child node
              snap.forEach(function(childSnapshot) {
                  // Create new table row
                  var newRow = document.createElement("tr");
  
                  // Populate the row with data cells
                  newRow.innerHTML = `
                      
                      <td>${childSnapshot.val().Baby_months}</td>
  
                      <td>${childSnapshot.val().Packets}</td>
                      <td>${childSnapshot.val().Triposha_date}</td>
                      <td>${childSnapshot.val().Special_note}</td>
                  `;
  
                  // Append the new row to the table body
                  tableBody.appendChild(newRow);
              });
          } catch (error) {
              console.error("Error while populating table:", error);
          }
      });
  };

 