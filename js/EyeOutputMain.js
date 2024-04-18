// Define variables for form values
// var BidV, BnameV, bMonthsV, genderV, VnameV, VdateV, immediateHealthV;
var BidV, bMonthsV;

// Bid, Bname, bMonths, gender, Vname, Vdate, immediateHealth

// Function to read form values
function readForm() {
    BidV = document.getElementById("Bid").value;
    // BnameV = document.getElementById("Bname").value;
    // bMonthsV = document.getElementById("bMonths").value;
    // genderV = document.getElementById("gender").value;
    // VnameV = document.getElementById("Vname").value;
    // VdateV = document.getElementById("Vdate").value;
    // immediateHealthV = document.getElementById("immediateHealth").value;


    // console.log(BidV, BnameV, bMonthsV, genderV, VnameV, VdateV, immediateHealthV);
    console.log(BidV);
}


function clearFormFields() {
    document.getElementById("Bid").value = "";
    // document.getElementById("Bname").value = "";
    // document.getElementById("bMonths").value = "";
    // document.getElementById("gender").value = "";
    // document.getElementById("Vname").value = "";
    // document.getElementById("Vdate").value = "";
    // document.getElementById("immediateHealth").value = "";
}


// document.getElementById("read").onclick = function () {
//     readForm();
//     //Bid, Bname, bMonths, gender, Vname, Vdate, immediateHealth
//   firebase
//     .database()
//     .ref("Vaccinations/" + BidV + "/" + bMonthsV)
//     .on("value", function (snap) {
//     document.getElementById("Bid").textContent = snap.val().Baby_id;
//     // document.getElementById("Bname").textContent = snap.val().Baby_name;
//     document.getElementById("bMonths").textContent = snap.val().Baby_months;

//     // document.getElementById("gender").textContent = snap.val().Gender;
//     // document.getElementById("Vname").textContent = snap.val().Vaccine_name;
//     // document.getElementById("Vdate").textContent = snap.val().Vaccination_date;
//     // document.getElementById("immediateHealth").textContent = snap.val().immediateHealth;
    
      
//     });
// };


// document.getElementById("read").onclick = function () {
//     readForm();
//     //Bid, Bname, bMonths, gender, Vname, Vdate, immediateHealth
//     // firebase.database().ref("Vaccinations/" + BidV + "/" + bMonthsV).on("value", function (snap) {
//         firebase.database().ref("Vaccinations/" + BidV ).on("value", function (snap) {
//         try {
//             // Get reference to table body
//             var tableBody = document.getElementById("tableBody");

//             // Create new table row
//             var newRow = document.createElement("tr");

//             // Populate the row with data cells
//             newRow.innerHTML = `
//                 <td>${snap.val().Baby_id}</td>
//                 <td>${snap.val().Baby_name}</td>
//                 <td>${snap.val().Baby_months}</td>
//                 <td>${snap.val().Gender}</td>
//                 <td>${snap.val().Vaccine_name}</td>
//                 <td>${snap.val().Vaccination_date}</td>
//                 <td>${snap.val().immediateHealth}</td>
//             `;

//             // Append the new row to the table body
//             tableBody.appendChild(newRow);
//         } catch (error) {
//             console.error("Error while populating table:", error);
//         }
//     });
// };

document.getElementById("read").onclick = function () {
    readForm();
    //Bid, Bname, bMonths, gender, Vname, Vdate, immediateHealth
    // firebase.database().ref("Vaccinations/" + BidV + "/" + bMonthsV).on("value", function (snap) {
        firebase.database().ref("Main/" + BidV + "/EyeAndEar").on("value", function (snap) {
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
                    
                    <td>${childSnapshot.val().Tdate}</td>

                    <td>${childSnapshot.val().Dname}</td>
                    <td>${childSnapshot.val().months}</td>
                    <td>${childSnapshot.val().ETName}</td>

                    <td>${childSnapshot.val().ETresult}</td>
                    <td>${childSnapshot.val().EarTName}</td>
                    <td>${childSnapshot.val().EarTresult}</td>
                    <td>${childSnapshot.val().speciaclN}</td>
                `;

                // Append the new row to the table body
                tableBody.appendChild(newRow);
            });
        } catch (error) {
            console.error("Error while populating table:", error);
        }
    });
};
