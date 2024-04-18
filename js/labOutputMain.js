// Define variables for form values
var TdateV, BidV, BnameV, PnameV, CNumberV, CemailV, TnameV, tResultV, speciaclNV;

// Bid, Bname, Pname, CNumber, Cemail, Tname, Tdate, tResult, speciaclN                                                     


// Function to read form values
function readForm() {
  // TdateV = document.getElementById("Tdate").value;
  BidV = document.getElementById("Bid").value;
  // BnameV = document.getElementById("Bname").value;
  // PnameV = document.getElementById("Pname").value;
  // CNumberV = document.getElementById("CNumber").value;
  // CemailV = document.getElementById("Cemail").value;
  // TnameV = document.getElementById("Tname").value;
  // tResultV = document.getElementById("tResult").value;
  // speciaclNV = document.getElementById("speciaclN").value;


    console.log(BidV);
}

// // Event listener for form submission
// document.getElementById("insert").onclick = function () {
//     readForm();

//     firebase
//         .database()
//         .ref("Laboratory/" + TdateV  + "/" + BidV)
//         .set({
         
//             Test_date: TdateV,
//             Baby_id: BidV,
//             Baby_name: BnameV,
//             Parent_name: PnameV,
//             Contact_number: CNumberV,
//             Email: CemailV,
//             Test_name: TnameV,
//             Test_result: tResultV,
//             Special_note: speciaclNV,
//         });

//     alert("Data Inserted");
//     clearFormFields();
// }
// // Bid, Bname, Pname, CNumber, Cemail, Tname, Tdate, tResult, speciaclN                                                     

// // Function to clear form fields
// function clearFormFields() {
//     document.getElementById("TdateV").value = "";
//     document.getElementById("BidV").value = "";
//     document.getElementById("BnameV").value = "";
//     document.getElementById("PnameV").value = "";

//     document.getElementById("CNumberV").value = "";
//     document.getElementById("CemailV").value = "";
//     document.getElementById("TnameV").value = "";
//     document.getElementById("tResultV").value = "";
//     document.getElementById("speciaclNV").value = "";
// }


// document.getElementById("read").onclick = function () {
//     readForm();
//     //TdateV, BidV, BnameV, PnameV, CNumberV, CemailV, TnameV, tResultV, speciaclNV;

//   firebase
//     .database()
//     .ref("Laboratory/" + TdateV  + "/" + BidV)
//     .on("value", function (snap) {

//     document.getElementById("Tdate").textContent = snap.val().Test_date;
//     document.getElementById("Bid").textContent = snap.val().Baby_id;
//     document.getElementById("Bname").textContent = snap.val().Baby_name;
    

//     document.getElementById("Pname").textContent = snap.val().Parent_name;
//     document.getElementById("CNumber").textContent = snap.val().Contact_number;
//     document.getElementById("Cemail").textContent = snap.val().Email;
//     document.getElementById("Tname").textContent = snap.val().Test_name;

//     document.getElementById("tResult").textContent = snap.val().Test_result;
//     document.getElementById("speciaclN").textContent = snap.val().Special_note;

    
      
//     });
// };
document.getElementById("read").onclick = function () {
    readForm();
    //Bid, Bname, bMonths, gender, Vname, Vdate, immediateHealth
    // firebase.database().ref("Vaccinations/" + BidV + "/" + bMonthsV).on("value", function (snap) {
        // .ref("Main/" + BidV + "/Vaccinations")
        firebase.database().ref("Main/" + BidV + "/Laboratory").on("value", function (snap) {
        try {
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
                
                <td>${childSnapshot.val().Test_date}</td>
                <td>${childSnapshot.val().Baby_id}</td>
                <td>${childSnapshot.val().Baby_name}</td>
                <td>${childSnapshot.val().Parent_name}</td>
                <td>${childSnapshot.val().Contact_number}</td>
                <td>${childSnapshot.val().Email}</td>
                <td>${childSnapshot.val().Test_name}</td>
                <td>${childSnapshot.val().Test_result}</td>
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



// document.getElementById("update").onclick = function () {
//     readForm();

//   firebase
//     .database()
//     .ref("Laboratory/" + TdateV  + "/" + BidV)
//     .update({
     
//       // Test_date: TdateV,
//       // Baby_id: BidV,
//       Baby_name: BnameV,
//       Parent_name: PnameV,
//       Contact_number: CNumberV,
//       Email: CemailV,
//       Test_name: TnameV,
//       Test_result: tResultV,
//       Special_note: speciaclNV,
//     });

//   alert("Data Update");
//     document.getElementById("TdateV").value = "";
//     document.getElementById("BidV").value = "";
//     document.getElementById("BnameV").value = "";
//     document.getElementById("PnameV").value = "";

//     document.getElementById("CNumberV").value = "";
//     document.getElementById("CemailV").value = "";
//     document.getElementById("TnameV").value = "";
//     document.getElementById("tResultV").value = "";
//     document.getElementById("speciaclNV").value = "";

// };



// document.getElementById("delete").onclick = function () {
//   readForm();

//   firebase
//     .database()
//     .ref("Laboratory/" + TdateV  + "/" + BidV)
//     .remove();
//   alert("Data Deleted");
//     document.getElementById("TdateV").value = "";
//     document.getElementById("BidV").value = "";
//     document.getElementById("BnameV").value = "";
//     document.getElementById("PnameV").value = "";

//     document.getElementById("CNumberV").value = "";
//     document.getElementById("CemailV").value = "";
//     document.getElementById("TnameV").value = "";
//     document.getElementById("tResultV").value = "";
//     document.getElementById("speciaclNV").value = "";

// };

