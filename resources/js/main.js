window.onload = function () {
    console.log("website is loaded!!");

    const header = document.querySelector('header');
    const menu_btn = document.querySelector(".hamburger");
    const mobile_nav = document.querySelector(".mobile-nav");

    window.addEventListener('scroll', function (e) {
        // console.log(e);
        // console.log(window.pageYOffset);
        if (window.pageYOffset > 100) {
            header.classList.add('is-scrolling');
        } else {
            header.classList.remove('is-scrolling');
        }
    });

    menu_btn.addEventListener("click", function () {
        console.log("clicked");
        menu_btn.classList.toggle("is-active");
        mobile_nav.classList.toggle("is-active");
    });

    document.querySelectorAll('#navbar a').forEach((anchor) => {
        anchor.addEventListener('click', (event) => {
            console.log(event);
            console.log(anchor);
            event.preventDefault();
            const targetId = anchor.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

}

function validateContactForm() {

    console.log("form submitted");
    const inputTextDOM = document.getElementById('name');
    const inputEmailDOM = document.getElementById('email');
    const textAreaDOM = document.getElementById('message');
    const statusMessageDOM = document.getElementById('status-message');

    //validate name
    const namePattern = /^[A-Za-z]+$/;
    let inputName = inputTextDOM.value;
    if (inputName.trim() == "") {
        statusMessageDOM.textContent = "Name is empty. Please enter a valid name (letters only)!!"
        return false;
    } else if (!namePattern.test(inputName)) { 
        statusMessageDOM.textContent = "Please enter a valid name (letters only)!!"
        return false;
    }

    //validate email address
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(inputEmailDOM.value);
    let inputEmail = inputEmailDOM.value;
    if (inputEmail.trim() == "") {
        statusMessageDOM.textContent = "Email is empty. Please enter a email address!! "
        return false;
    } else  if (!emailPattern.test(inputEmail)) {
        statusMessageDOM.textContent = "Please enter a valid email address!!"
        return false;
    }   

    //validate message
    let inputTextArea = textAreaDOM.value;
    if (inputTextArea.trim() == "") {
        statusMessageDOM.textContent = "Message is empty. Please enter a message!!"
        return false;
    }

    alert("Message sent. Thank you!!");
    return true;
}