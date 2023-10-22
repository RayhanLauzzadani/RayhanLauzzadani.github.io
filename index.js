// // Regex validasi email
// const isValidEmail = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// const validateInput = () => {
//     var nama = document.getElementById("nama").value;
//     var email = document.getElementById("email").value;
//     var comment = document.getElementById("comment").value;

//     let validasiNama = document.getElementById("validasiNama");
    
//     if(nama === '') {
//         validasiNama.innerText = "*Name is required";
//         validasiNama.classList.add("border-0", "inputform", "text-danger", "fw-bold");
//     } else {
//         validasiNama.innerText = '';
//         validasiNama.classList.remove("border-0", "inputform", "text-danger", "fw-bold");
//     }

//     let validasiEmail = document.getElementById("validasiEmail");

//     if(email === '') {
//         validasiEmail.innerText = "*Email is required";
//         validasiEmail.classList.add("border-0", "inputform", "text-danger", "fw-bold");
//     } else if (!isValidEmail(email)) {
//         validasiEmail.innerText = "*Provide a valid email address";
//         validasiEmail.classList.add("border-0", "inputform", "text-danger", "fw-bold");
//     } else {
//         validasiEmail.innerText = '';
//         validasiEmail.classList.remove("border-0", "inputform", "text-danger", "fw-bold");
//     }

//     let validasiComment = document.getElementById("validasiComment");

//     if(comment === '') {
//         validasiComment.innerText = "*Text is required";
//         validasiComment.classList.add("border-0", "inputform", "text-danger", "fw-bold");
//     } else if (comment.length < 8 ) {
//         validasiComment.innerText = "*Text must be at least 8 character.";
//         validasiComment.classList.add("border-0", "inputform", "text-danger", "fw-bold");
//     } else {
//         validasiComment.innerText = '';
//         validasiComment.classList.remove("border-0", "inputform", "text-danger", "fw-bold");
//     }

//     let sendmessage = document.getElementById("sendmessage");

//     if(
//         validasiNama.innerText === "" &&
//         validasiEmail.innerText === "" &&
//         validasiComment.innerText === ""
//     )
//     {
//         sendmessage.innerText = "Message already sent! Thank you";
//         sendmessage.classList.add("border-0", "inputform", "text-success", "fw-bold")
//     }
        
// };

    const nameInput = document.getElementById("nama");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("comment");
    const submitButton = document.getElementById("submit");

    submitButton.addEventListener("click", function (e) {
        e.preventDefault();
        let errorMessage = "";
        if (!nama.value) {
            errorMessage += "Nama harus diisi.\n";
        }
        if (!email.value) {
            errorMessage += "Email harus diisi.\n";
        } else {
            const emailRegex = /@gmail\.com$/;
            if (!emailRegex.test(email.value)) {
                errorMessage += "Alamat email harus mengandung '@gmail.com'.\n";
            }
        }
        if (!comment.value) {
            errorMessage += "Subjek harus diisi.\n";
        }
        if (errorMessage) {
            alert(errorMessage);
        } else {
            alert("Pesan Anda terkirim!");
            nama.value = "";
            email.value = "";
            comment.value = "";
        }
    });