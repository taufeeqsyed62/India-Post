// Function to handle file upload
function uploadFile() {
    const fileUpload = document.getElementById('fileUpload').files[0];
    if (fileUpload) {
        document.getElementById('uploadMessage').innerText = `File "${fileUpload.name}" uploaded successfully.`;
    } else {
        document.getElementById('uploadMessage').innerText = "Please select a file to upload.";
    }
}

// Function to check eligible schemes based on customer information
function checkEligibility() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const income = document.getElementById('income').value;
    const occupation = document.getElementById('occupation').value;

    if (name && age && income && occupation) {
        let eligibleSchemes = [];

        // Logic to determine eligible schemes based on inputs
        if (occupation === 'Farmer') {
            eligibleSchemes.push('Kisan Vikas Patra', 'PM Kisan Yojana');
        } else if (occupation === 'Salaried' && income > 500000) {
            eligibleSchemes.push('Public Provident Fund (PPF)', 'National Savings Certificate (NSC)');
        } else if (occupation === 'Business') {
            eligibleSchemes.push('Sukanya Samriddhi Yojana', 'Senior Citizens Savings Scheme');
        } else {
            eligibleSchemes.push('Post Office Savings Account', 'Recurring Deposit (RD)');
        }

        // Display eligible schemes
        document.getElementById('schemeResults').innerHTML = `
            <h5>Eligible Schemes for ${name}:</h5>
            <ul class="list-unstyled">
                ${eligibleSchemes.map(scheme => `<li class="text-success"><i class="fas fa-check-circle"></i> ${scheme}</li>`).join('')}
            </ul>
        `;
    } else {
        document.getElementById('schemeResults').innerText = "Please fill out all fields in the form.";
    }
}
