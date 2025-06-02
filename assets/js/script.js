document.addEventListener("DOMContentLoaded", () => {
  const teacherForm = document.getElementById("teacherSignupForm");
  if (teacherForm) {
    teacherForm.addEventListener("submit", function (e) {
      let valid = true;

      // Clear previous errors
      [
        "tnameErr",
        "temailErr",
        "tphoneErr",
        "tgenderErr",
        "tdobErr",
        "teduErr",
        "tsubjectErr",
        "tprofileErr",
        "tdocumentErr",
        "tbioErr",
        "tpasswordErr",
        "tconfirmpasswordErr",
      ].forEach((id) => {
        document.getElementById(id).innerHTML = "";
      });

      // Name validation
      if (document.getElementById("tname").value.trim() === "") {
        document.getElementById("tnameErr").innerHTML = "Name is required";
        valid = false;
      }

      // Email validation simple regex
      const emailVal = document.getElementById("temail").value.trim();
      if (emailVal === "" || !/^\S+@\S+\.\S+$/.test(emailVal)) {
        document.getElementById("temailErr").innerHTML =
          "Valid email is required";
        valid = false;
      }

      // Phone validation (numbers only, length 10-15)
      const phoneVal = document.getElementById("tphone").value.trim();
      if (phoneVal === "" || !/^\d{10,15}$/.test(phoneVal)) {
        document.getElementById("tphoneErr").innerHTML =
          "Valid phone is required";
        valid = false;
      }

      // Gender
      if (document.getElementById("tgender").value === "") {
        document.getElementById("tgenderErr").innerHTML =
          "Please select gender";
        valid = false;
      }

      // DOB
      if (document.getElementById("tdob").value === "") {
        document.getElementById("tdobErr").innerHTML =
          "Date of Birth is required";
        valid = false;
      }

      // Educational Qualification
      if (document.getElementById("tedu").value.trim() === "") {
        document.getElementById("teduErr").innerHTML = "This field is required";
        valid = false;
      }

      // Subject Expert
      if (document.getElementById("tsubject").value.trim() === "") {
        document.getElementById("tsubjectErr").innerHTML =
          "This field is required";
        valid = false;
      }

      // Profile Picture
      if (document.getElementById("tprofile").files.length === 0) {
        document.getElementById("tprofileErr").innerHTML =
          "Profile picture required";
        valid = false;
      }

      // Document
      if (document.getElementById("tdocument").files.length === 0) {
        document.getElementById("tdocumentErr").innerHTML = "Document required";
        valid = false;
      }

      // Bio
      if (document.getElementById("tbio").value.trim() === "") {
        document.getElementById("tbioErr").innerHTML = "Bio is required";
        valid = false;
      }

      // Password
      const passVal = document.getElementById("tpassword").value;
      if (passVal.length < 6) {
        document.getElementById("tpasswordErr").innerHTML =
          "Password must be at least 6 characters";
        valid = false;
      }

      // Confirm Password
      if (document.getElementById("tconfirmpassword").value !== passVal) {
        document.getElementById("tconfirmpasswordErr").innerHTML =
          "Passwords do not match";
        valid = false;
      }

      if (!valid) e.preventDefault();
    });
  }

  // Student signup form validation
  const studentForm = document.getElementById("studentSignupForm");
  if (studentForm) {
    studentForm.addEventListener("submit", function (e) {
      let valid = true;

      // Clear previous errors
      [
        "snameErr",
        "semailErr",
        "sphoneErr",
        "sgenderErr",
        "scountryErr",
        "sdobErr",
        "sclassErr",
        "sprofileErr",
        "spasswordErr",
        "sconfirmpasswordErr",
      ].forEach((id) => {
        document.getElementById(id).innerHTML = "";
      });

      // Name validation
      if (document.getElementById("sname").value.trim() === "") {
        document.getElementById("snameErr").innerHTML = "Name is required";
        valid = false;
      }

      // Email validation
      const emailVal = document.getElementById("semail").value.trim();
      if (emailVal === "" || !/^\S+@\S+\.\S+$/.test(emailVal)) {
        document.getElementById("semailErr").innerHTML =
          "Valid email is required";
        valid = false;
      }

      // Phone validation
      const phoneVal = document.getElementById("sphone").value.trim();
      if (phoneVal === "" || !/^\d{10,15}$/.test(phoneVal)) {
        document.getElementById("sphoneErr").innerHTML =
          "Valid phone number is required";
        valid = false;
      }

      // Gender validation
      if (document.getElementById("sgender").value === "") {
        document.getElementById("sgenderErr").innerHTML =
          "Please select gender";
        valid = false;
      }

      // Country validation
      if (document.getElementById("scountry").value.trim() === "") {
        document.getElementById("scountryErr").innerHTML =
          "Country is required";
        valid = false;
      }

      // DOB validation
      if (document.getElementById("sdob").value === "") {
        document.getElementById("sdobErr").innerHTML =
          "Date of Birth is required";
        valid = false;
      }

      // Class validation
      if (document.getElementById("sclass").value.trim() === "") {
        document.getElementById("sclassErr").innerHTML = "Class is required";
        valid = false;
      }

      // Profile Picture validation
      if (document.getElementById("sprofile").files.length === 0) {
        document.getElementById("sprofileErr").innerHTML =
          "Profile picture is required";
        valid = false;
      }

      // Password validation
      const passVal = document.getElementById("spassword").value;
      if (passVal.length < 6) {
        document.getElementById("spasswordErr").innerHTML =
          "Password must be at least 6 characters";
        valid = false;
      }

      // Confirm Password validation
      if (document.getElementById("sconfirmpassword").value !== passVal) {
        document.getElementById("sconfirmpasswordErr").innerHTML =
          "Passwords do not match";
        valid = false;
      }

      if (!valid) e.preventDefault();
    });
  }

  // login form validation
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      let valid = true;

      // Clear previous errors
      ["semailErr", "spasswordErr"].forEach((id) => {
        document.getElementById(id).innerHTML = "";
      });

      // Email validation
      const emailVal = document.getElementById("semail").value.trim();
      if (emailVal === "" || !/^\S+@\S+\.\S+$/.test(emailVal)) {
        document.getElementById("semailErr").innerHTML =
          "Valid email is required";
        valid = false;
      }

      // Password validation
      const passVal = document.getElementById("spassword").value;
      if (passVal.length < 6) {
        document.getElementById("spasswordErr").innerHTML =
          "Password must be at least 6 characters";
        valid = false;
      }

      if (!valid) e.preventDefault();
    });
  }
});
/*
document.getElementById("search").addEventListener("keyup", function () {
  let input = this.value.toLowerCase();
  let rows = document.querySelectorAll("#studentTable tbody tr");

  rows.forEach(function (row) {
    let text = row.textContent.toLowerCase();
    row.style.display = text.includes(input) ? "" : "none";
  });
});
document.getElementById("search").addEventListener("keyup", function () {
  let input = this.value.toLowerCase();
  let rows = document.querySelectorAll("#studentTable tbody tr");

  rows.forEach(function (row) {
    let text = row.textContent.toLowerCase();
    row.style.display = text.includes(input) ? "" : "none";
  });
});
*/


document.addEventListener('DOMContentLoaded', function() {
  function setupSearch(inputId, tableId) {
    const searchInput = document.getElementById(inputId);
    if (!searchInput) return;

    searchInput.addEventListener('keyup', function () {
      const filter = this.value.toLowerCase();
      const rows = document.querySelectorAll(`#${tableId} tbody tr`);
      rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(filter) ? "" : "none";
      });
    });
  }

  setupSearch('search', 'studentTable'); // student search
  setupSearch('searchteacher', 'teacherTable'); // teacher search
});



