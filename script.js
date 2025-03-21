function redirectUser() {
    var userType = document.getElementById("userType").value;
    document.getElementById("selectionPage").style.display = "none";

    if (userType === "student") {
        document.getElementById("studentLogin").style.display = "block";
    } else if (userType === "faculty") {
        document.getElementById("facultyLogin").style.display = "block";
    } else {
        alert("Please select a valid option.");
        document.getElementById("selectionPage").style.display = "block";
    }
}

function showStudentDashboard() {
    var regNo = document.getElementById("studentRegNo").value;
    var password = document.getElementById("studentPassword").value;

    if (regNo !== "" && password !== "") {
        document.getElementById("studentLogin").style.display = "none";
        document.getElementById("studentDashboard").style.display = "block";
    } else {
        alert("Please enter registration number and password.");
    }
}

function showFacultyDashboard() {
    var username = document.getElementById("facultyUsername").value;
    var password = document.getElementById("facultyPassword").value;

    if (username !== "" && password !== "") {
        document.getElementById("facultyLogin").style.display = "none";
        document.getElementById("facultyDashboard").style.display = "block";
    } else {
        alert("Please enter username and password.");
    }
}

function saveAttendance() {
    alert("Attendance saved successfully!");
}
