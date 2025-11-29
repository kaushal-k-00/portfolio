// hire-me-button

document.addEventListener("DOMContentLoaded", function () {
    const sendBtn = document.getElementById("sendBtn");

    sendBtn.addEventListener("click", function () {
        const senderEmail = document.getElementById("senderEmail").value.trim();
        const service = document.getElementById("service").value;
        const message = document.getElementById("message").value.trim();

        if (senderEmail === "") {
            alert("Please enter your email.");
            return;
        }

        if (message === "") {
            alert("Please enter your message.");
            return;
        }

        const subject = encodeURIComponent("Hiring Request: " + service);
        const body = encodeURIComponent(
            "Sender Email: " + senderEmail + "\n\nMessage:\n" + message
        );

        // Open default mail client with pre-filled email
        window.location.href = `mailto:kkup.06009@gmail.com?subject=${subject}&body=${body}`;
    });
});
