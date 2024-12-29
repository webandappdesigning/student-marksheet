
// Function to calculate the grade based on marks
function calculateGrade(marks) {
    if (marks >= 90) {
        return 'A+';
    } else if (marks >= 80) {
        return 'A';
    } else if (marks >= 70) {
        return 'B';
    } else if (marks >= 60) {
        return 'C';
    } else if (marks >= 50) {
        return 'D';
    } else {
        return 'F';
    }
}

// Function to update the total marks and CGPA
function updateMarks() {
    let totalMarks = 0;
    let totalCredits = 0;

    // Iterate through each input field and calculate total marks
    document.querySelectorAll('.marks').forEach(input => {
        let marks = parseFloat(input.value);
        let gradeElement = input.closest('tr').querySelector('.grade');

        if (!isNaN(marks)) {
            let courseCredits = parseInt(input.closest('tr').querySelector('td:nth-child(3)').textContent);
            totalMarks += marks;
            totalCredits += courseCredits;

            // Calculate the grade for the current marks
            let grade = calculateGrade(marks);
            gradeElement.textContent = grade;
        }
    });

    // Update the total marks and CGPA
    let cgpa = (totalMarks / (totalCredits * 100)) * 4.0;
    cgpa = cgpa.toFixed(2);

    document.getElementById('totalMarks').textContent = totalMarks;
    document.getElementById('cgpa').textContent = cgpa;
}

// Add event listener to all input fields to update marks dynamically
document.querySelectorAll('.marks').forEach(input => {
    input.addEventListener('input', updateMarks);
});
