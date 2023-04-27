// dom
const form = document.querySelector('.produktForm');

const uploadProdukt = async function(dokument) {
    const res = await fetch('http://localhost/lag-produkt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            parcel: dokument
        })
    });
    
    const result = await(res.json());
    
    console.log(result);  
};

form.addEventListener('submit', e => {
    e.preventDefault();

    const produkt = {
        tittel: form.tittel.value,
        dato: Date.now(),
        modell: form.modell.value,
        merke: form.merke.value,
        pris: form.pris.value,
        artikkelnummer: form.artikkelnummer.value
    };

    uploadProdukt(produkt);
});