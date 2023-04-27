// dom
const loginForm = document.querySelector('.loginForm');

// snakk med backend for å logge brukeren inn
const loggInn = async function(bruker) {
    await fetch('http://localhost/user-login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            parcel: bruker
        })
    });

    window.location = 'http://localhost/';
};

// on user submit
loginForm.addEventListener('submit', e => {
    e.preventDefault();

    const bruker = {
        brukernavn: loginForm.brukernavn.value,
        passord: loginForm.passord.value
    };

    loggInn(bruker);
});