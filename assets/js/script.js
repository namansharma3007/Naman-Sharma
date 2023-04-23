
document.addEventListener('DOMContentLoaded', function () {
    var expandButton = document.querySelector('#expand-button');
    var hireMe = document.querySelector('#contact-me');
    var formContact = document.querySelector('#form-contact');
    var toggleIcon = document.getElementById('toogle-icon')


    function expandFunction() {
        formContact.classList.toggle('active');
        expandButton.classList.toggle('active');
        if (toggleIcon.innerHTML === "expand_less") {
            toggleIcon.innerHTML = "expand_more";
        } else {
            toggleIcon.innerHTML = "expand_less";
        }
    }

    expandButton.addEventListener('click', expandFunction);

    hireMe.addEventListener('click', expandFunction)
});

const skills = ['Leaflet.js', 'Email.js', 'Python', 'Java', 'BootStrap', 'GitHub', 'Git', 'SQL', 'MongoDB', 'React.js', 'Node.js', 'JavaScript', 'CSS', 'HTML']

var tabCont = document.querySelector('.tabs-container');

const displaytabs = skills.map(skill => `<div class="tab">${skill}</div>`).join('');


tabCont.innerHTML = displaytabs





// sendimg mail service



const form = document.getElementById("myForm");
const emailRegex = /\S+@\S+\.\S+/; 

form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent the form from submitting

    var name = form.elements["text"].value;
    var email = form.elements["email"].value;
    var message = form.elements["message"].value;

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    if(name == ""){
        alert("Enter full name")
        return;
    }
    if(email == ""){
        alert("Enter email")
        return;
    }
    if(message == ""){
        alert("Write some message")
        return;
    }

    var params = {
        from_name: name,
        email: email,
        message: message
    }
    emailjs.send("service_l9n7bhl", "template_ztqptvs", params)
        .then((res) => {
            alert("Your message has been sent successfully")
            name = "";
            email = "";
            message = "";
            location.reload()
        })
        .catch(err => console.error(err));
});

