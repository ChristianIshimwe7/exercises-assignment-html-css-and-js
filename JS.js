const form = document.getElementById('registration-form');
const errorMessage = document.getElementById('error-message');


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const eventDate = document.getElementById('event-date').value;
    const tickets = document.getElementById('tickets').value;

    let errorMessageText = "";

    if (name.trim() === "") {
        errorMessageText = "Please enter your name.";
    } else if (!/^[a-zA-Z ]+$/.test(name)) {
        errorMessageText = "Name can only contain letters and spaces.";
    } else if (!/^\w+@\w+\.\w{2,}$/.test(email)) {
        errorMessageText = "Please enter a valid email address.";
    } else if (!/^\d{3}-\d{3}-\d{4}$/.test(phone)) {
        errorMessageText = "Please enter a valid phone number ((XXX) XXX-XXXX).";
    } else if (!/\d{2}\/\d{2}\/\d{4}/.test(eventDate)) {
        errorMessageText = "Please enter a valid event date (MM/DD/YYYY).";
    } else if (tickets < 1 || tickets > 10) {
        errorMessageText = "Please enter a number of tickets between 1 and 10.";
    }

    if (errorMessageText !== "") {
        errorMessage.textContent = errorMessageText;
    }

    // Form validation successful,
});

