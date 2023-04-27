// logg ut
const logOut = async function(jwtType) {
    await fetch('http://localhost/user-logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            jwtType
        })
    });

    window.location = 'http://localhost/';
};

logOut();