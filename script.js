function checkGrade() {
  // 1. Select elements
  var nameInput = document.getElementById("studentName");
  var markInput = document.getElementById("studentMark");
  var resultDiv = document.getElementById("result");
  var studentList = document.getElementById("studentList");

  // 2. Read and parse values
  var name = nameInput.value.trim();
  var mark = parseInt(markInput.value);

  // 3. Validate input
  if (name === "") {
    resultDiv.textContent = "Please enter a student name.";
    resultDiv.className = "error";
    return;
  }

  if (isNaN(mark) || mark < 0 || mark > 100) {
    resultDiv.textContent = "Please enter a valid mark between 0 and 100.";
    resultDiv.className = "error";
    return;
  }

  // 4. Determine grade using if / else if / else
  var status;
  var grade;

  if (mark >= 80 && mark <= 100) {
    status = "PASS";
    grade = "Distinction";
  } else if (mark >= 65 && mark <= 79) {
    status = "PASS";
    grade = "Merit";
  } else if (mark >= 50 && mark <= 64) {
    status = "PASS";
    grade = "Pass";
  } else {
    status = "FAIL";
    grade = "Fail";
  }

  // 5. Update the result area
  resultDiv.textContent = name + " — " + status + " (" + grade + ") with a mark of " + mark + "%";
  resultDiv.className = status === "PASS" ? "pass" : "fail";

  // 6. Append to the student list
  var listItem = document.createElement("li");
  listItem.textContent = name + ": " + mark + "% — " + status + " (" + grade + ")";
  studentList.appendChild(listItem);

  // Clear inputs
  nameInput.value = "";
  markInput.value = "";
}
