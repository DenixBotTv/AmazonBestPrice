document.getElementById("urlForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Previene l'invio del modulo

    const amazonUrl = document.getElementById("amazon_url").value;
    
    // Controlla se l'URL è già un link affiliato
    const affiliateTag = "denix0a-21"; // Sostituisci con il tuo tag
    const affiliateUrl = amazonUrl.includes("tag=") 
        ? amazonUrl.replace(/(tag=)[^&]+/, `$1${affiliateTag}`)
        : amazonUrl + (amazonUrl.includes("?") ? "&" : "?") + `tag=${affiliateTag}`;

    // Nascondi il modulo di inserimento
    document.querySelector('.content').style.display = 'none';

    // Mostra il link generato
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = 'block'; // Mostra il div del risultato
    resultDiv.innerHTML = `
        <h2>Link del prodotto:</h2>
        <a href="${affiliateUrl}" target="_blank">${affiliateUrl}</a>
    `;
});

