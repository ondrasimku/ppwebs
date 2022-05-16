const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const messageInput = document.getElementById("message")
const phoneInout = document.getElementById("phone")
const form = document.getElementById("contact-form")


console.log("fetuješ")




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
    console.log(resCode)
}

form.onsubmit = formOnclick;