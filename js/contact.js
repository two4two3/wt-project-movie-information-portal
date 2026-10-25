
function main() {
    document.forms[0].addEventListener("submit", (e => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let validationErrors = []
        let name = e.target["name"].value
        let email = e.target["email"].value
        let subject = e.target["subject"].value
        let message = e.target["message"].value

        console.log(`\
            name:${name}
            email:${email}
            subject:${subject}
            message:${message}
            `)
        if (name.length <= 3) {
            validationErrors.push({ field: "name", message: "Name should be at least 3 characters" })
        }
        if (subject.length <= 5) {
            validationErrors.push({ field: "subject", message: "Subject should be at least 5 characters" })
        }
        if (message.length <= 10) {
            validationErrors.push({ field: "message", message: "Message should be at least 10 characters" })
        }
        if (!emailRegex.test(email)) {
            validationErrors.push({ field: "email", message: "Enter correct email." })
        }

        let span = document.getElementById("error");
        span.innerHTML = ""
        if (validationErrors) {
            e.target[validationErrors[0].field].focus()
            validationErrors.forEach(e => {
                span.innerHTML = span.innerHTML + "- " + e.message + "<br>"
            })
        }
    }))
}
main()
