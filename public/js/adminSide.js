// dom
const addProduktForm = document.querySelector('.addProduktForm');
const oppdaterProduktForm = document.querySelector('.oppdaterProduktForm');
const slettProduktForm = document.querySelector('.slettProduktForm');

// dropdowns
const oppdaterProduktDropdown = document.querySelector('.velgProduktDropdown');
const slettProduktDropdown = document.querySelector('.velgSlettProduktDropdown');
const slettProduktTittel = document.querySelector('.slettProduktTittel');

// finn produkter for velg produkt dropdown
const finnProdukter = async function() {
    const res = await fetch('http://localhost/get-produktID', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            parcel: 'Hent produkter'
        })
    });
    
    // få data tilbake
    const result = await(res.json());

    // dropdowns produktene skal vises i
    const dropdowns = [oppdaterProduktDropdown, slettProduktDropdown];

    // legg til produktene i dropdowns
    result.produkter.forEach(produkt => {
        dropdowns.forEach(dropdown => {
            const htmlTemplate = `
                <p class="velgProdukt ${produkt._id}">${produkt.tittel}, ${produkt.artikkelnummer}</p><br>
            `;

            dropdown.innerHTML += htmlTemplate;
        });
    });
};

// backend kommunikasjon
const uploadProdukt = async function(produkt) {
    const res = await fetch('http://localhost/lag-produkt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            parcel: produkt
        })
    });
    
    const result = await(res.json());
    
    console.log(result);  
};

const oppdaterProdukt = async function(produktId) {
    const res = await fetch('http://localhost/oppdater-produkt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            parcel: produktId
        })
    });
    
    const result = await(res.json());
    
    console.log(result);
};

const slettProdukt = async function(produktId) {
    const res = await fetch('http://localhost/slett-produkt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            parcel: produktId
        })
    });
    
    const result = await(res.json());
    
    console.log(result);
};

// form event listeners
addProduktForm.addEventListener('submit', e => {
    e.preventDefault();

    const produkt = {
        tittel: addProduktForm.tittel.value,
        dato: Date.now(),
        modell: addProduktForm.modell.value,
        merke: addProduktForm.merke.value,
        pris: addProduktForm.pris.value,
        artikkelnummer: addProduktForm.artikkelnummer.value
    };

    uploadProdukt(produkt);
});

oppdaterProduktForm.addEventListener('submit', e => {
    e.preventDefault();
});

slettProduktForm.addEventListener('submit', e => {
    e.preventDefault();

    slettProdukt(slettProduktForm.slettProdukt.value);
});

slettProduktDropdown.addEventListener('click', e => {
    if (e.target.classList.contains('velgSlettProduktDropdown')) return;

    // finn alle .velgProdukt elementer:
    let velgProdukter = [];
    Array.from(slettProduktDropdown.children).forEach(childNode => {
        if(childNode.classList[0] === 'velgProdukt') {
            velgProdukter.push(childNode);
        };
    });

    // loop over alle produkter og fjern gammel highlight
    velgProdukter.forEach(velgProdukt => {
        velgProdukt.classList.remove('valgtProdukt');
    });

    // legg til highlight til nytt element
    e.target.classList.add('valgtProdukt');

    // lagre id til valgte produkt
    slettProduktForm.slettProdukt.value = e.target.classList[1];

    // vis produktets tittel til brukeren
    slettProduktTittel.innerText = e.target.innerText;
});

// hent produkter som vises i dropdowns
finnProdukter();