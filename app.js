document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    if (name && email && message) {
        showPopup('Form submitted successfully!');
    } else {
        showPopup('Please fill out all fields.');
    }
});

function showPopup(message) {
    document.getElementById('popupText').textContent = message;
    document.getElementById('popupMessage').style.display = 'block';
}

function closePopup() {
    document.getElementById('popupMessage').style.display = 'none';
}
