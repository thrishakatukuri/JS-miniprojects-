    function validation(){
    let user = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;
    let adhar = document.getElementById('adhar').value;
    let pan = document.getElementById('pan').value;
    let contact = document.getElementById('contact').value;
    let captchaInput = document.getElementById('captchaenter').value;
    let captchaGenerated = document.getElementById('captcha').textContent;
    
    let userPattern = /^[A-Z][a-z]{4,}$/;
    let adharPattern = /^\d{4} \d{4} \d{4}$/;
    let panPattern =/^[a-z]{1}[A-Z]{4}[0-9]{4}[A-Z]{1}$/;
    let contactPattern = /^\+91\d{10}$/;

    if (!userPattern.test(user)) {
        alert("Invalid user format. It should be 'Aaaaa'.");
        return false;
    }
    if (!adharPattern.test(adhar)) {
        alert("Invalid Aadhaar format. It should be 'XXXX XXXX XXXX'.");
        return false;
    }
    if (!panPattern.test(pan)) {
        alert("Invalid PAN format. It should be 'aAAAA9999A'.");
        return false;
    }
    if (!contactPattern.test(contact)) {
        alert("Invalid Contact number. It should be (+91) with 10-digit mobile number.");
        return false;
    }
    if (captchaInput !== captchaGenerated) {
        alert("Incorrect CAPTCHA. Please try again.");
        return false;
    }
    alert("succusfully.");
        return true;
}

function captchagenerate() {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = ""; 

    for (let i = 0; i < 5; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        captcha += chars[randomIndex];
    }

    document.getElementById("captcha").textContent = captcha;

    
}
document.addEventListener("DOMContentLoaded", captchagenerate);
document.getElementById("refreshBtn").addEventListener("click", captchagenerate);

let form = document.getElementById("captchaForm");
if (form) {
    form.addEventListener("submit", function (event) {
        if (!validation()) {
            event.preventDefault(); 
        }
    });
}


