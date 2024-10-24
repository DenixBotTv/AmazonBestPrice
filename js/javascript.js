document.getElementById("urlForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Previene l'invio del modulo

    const amazonUrl = document.getElementById("amazon_url").value;
    
    // Estrarre l'ASIN dall'URL (Amazon Standard Identification Number)
    const asinMatch = amazonUrl.match(/\/([A-Z0-9]{10})(?:[/?]|$)/);
    const asin = asinMatch ? asinMatch[1] : null;
    
    if (!asin) {
        alert("ASIN non trovato nell'URL. Assicurati di inserire un link Amazon valido.");
        return;
    }

    // Controlla se l'URL è già un link affiliato
    const affiliateTag = "your-affiliate-tag"; // Sostituisci con il tuo tag
    const affiliateUrl = amazonUrl.includes("tag=") 
        ? amazonUrl.replace(/(tag=)[^&]+/, `$1${affiliateTag}`)
        : amazonUrl + (amazonUrl.includes("?") ? "&" : "?") + `tag=${affiliateTag}`;

    // Nascondi il contenitore di inserimento
    document.querySelector('.content').style.display = 'none';

    // Mostra il contenitore dei dettagli del prodotto
    const productDetailsDiv = document.getElementById("product-details");
    productDetailsDiv.style.display = 'block';

    // Aggiorna il link affiliato generato
    const affiliateLink = document.getElementById("affiliate-link");
    affiliateLink.href = affiliateUrl;
    affiliateLink.textContent = affiliateUrl;

    // URL immagine del prodotto (Amazon usa un formato standard per le immagini di prodotti)
    const productImageUrl = `https://images-na.ssl-images-amazon.com/images/I/${asin}._SL500_.jpg`;

    // Aggiorna l'immagine del prodotto
    const productImage = document.getElementById("product-image");
    productImage.src = productImageUrl;
    productImage.alt = `Immagine del prodotto ${asin}`;

    // Titolo del prodotto (un titolo approssimativo o indicativo)
    const productTitle = document.getElementById("product-title");
    productTitle.textContent = `Prodotto Amazon con ASIN: ${asin}`;

    // Eventuali altre informazioni sul prodotto possono essere inserite qui
});
