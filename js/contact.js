
function main() {
    document.forms[0].addEventListener("submit", (e => {
        e.preventDefault();
        console.log("Inside submit");
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        let validationErrors = []
        let name = e.target["name"].value
        let email = e.target["email"].value
        let subject = e.target["subject"].value
        let message = e.target["message"].value
        if(name.lengh <= 3){
            validationErrors.push("Name should be at least 3 characters")
        }
        if(subject.lengh <= 5){
            validationErrors.push("Subject should be at least 5 characters")
        }
        if(message.lengh <= 10){
            validationErrors.push("Message should be at least 10 characters")
        }
        if(!emailRegex.test(email)){
            validationErrors.push("Enter correct email.")
        }
        console.log(validationErrors);
        

        validationErrors.forEach(e=>{
            let span = document.getElementById("error");
            span.innerHTML = span.innerHTML + e + "<br>"
        })
    }))
}
main()