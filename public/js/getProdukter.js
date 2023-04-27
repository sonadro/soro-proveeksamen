const produkterDiv = document.querySelector('.produkter');

const getProdukter = async function() {
    const res = await fetch('http://localhost/get-produkter', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            parcel: 'Produkter'
        })
    });

    const result = await(res.json());

    result.produkter.forEach(produkt => {
        const htmlTemplate = `
            <div class="produkt">
                <h3>${produkt.tittel}</h1>
                <p>Modell: ${produkt.modell}</p>
                <p>Merke: ${produkt.merke}</p>
                <p>Pris: ${produkt.pris}</p>
            </div>
        `;

        produkterDiv.innerHTML += htmlTemplate;
    });
}

getProdukter();