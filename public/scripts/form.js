const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const messageInput = document.getElementById("message")
const phoneInout = document.getElementById("phone")
const form = document.getElementById("contact-form")
const formSentMessage = document.querySelector(".contact-form__message-sent")



function processFormSent(){
    form.style.display="none";
    formSentMessage.style.display="flex"

}


const formOnclick = async (e) => {
    e.preventDefault()
    const reqBody = {
        name:nameInput.value,
        mail:emailInput.value,
        message:messageInput.value,
        phone:phoneInout.value,
    }

    const response = await fetch("/contact-form",{ method:"POST", body:JSON.stringify(reqBody)})
    const resCode = response.status;
    if (resCode !== 200){
        alert("Chyba při odesílání formuláře, zkuste to prosím později");
        return;
    }

    processFormSent()
}

form.onsubmit = formOnclick;