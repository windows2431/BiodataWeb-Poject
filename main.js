function toggleDetail(e) {
    const target = $(e.target)

    if($(target).hasClass("active")) {
        $(target).html("More Info").removeClass("active")
    } else {
        $(target).html("Less Info").addClass("active")
    }

    const item = $(target).parents(".about-exp-item")
    const detail = $(item).children(".about-exp-item-detail")

    $(detail).slideToggle()
}

function onFormSubmit(e) {
    e.preventDefault()
    const email = $("#inp_email")
    const subject = $("#inp_subject")
    const message = $("#inp_message")
    
    if(!$(email).val()) {
        alert("Email is requiared")
    } else if (!$(subject).val()) {
        alert("subject is requiared")
    } else if (!$(message).val()) {
        alert("message is requiared")
    } else {
        alert("Form Submitted")
        $(email).val("")
        $(subject).val("")
        $(message).val("")
    }
}