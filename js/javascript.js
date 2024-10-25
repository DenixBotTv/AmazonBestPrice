document.getElementById("urlForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const amazonUrl = document.getElementById("amazon_url").value;

    // Aggiunge il tag affiliato al link
    const affiliateTag = "denix0a-21";
    const affiliateUrl = amazonUrl.includes("tag=")
        ? amazonUrl.replace(/(tag=)[^&]+/, `$1${affiliateTag}`)
        : amazonUrl + (amazonUrl.includes("?") ? "&" : "?") + `tag=${affiliateTag}`;

    // Nasconde il contenitore di inserimento
    document.querySelector('.content').style.display = 'none';

    // Mostra il link affiliato con i bottoni
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = 'block';
    document.getElementById("affiliateLink").href = affiliateUrl;
    document.getElementById("affiliateLink").textContent = affiliateUrl;

    // Aggiunge gli event listener per i bottoni
    setupCopyLinkButton(affiliateUrl);
    setupMoreInfoButton(amazonUrl);
});

// Funzione per copiare il link
function setupCopyLinkButton(affiliateUrl) {
    document.getElementById("copyLink").addEventListener("click", function () {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(affiliateUrl)
                .then(() => {
                    alert("Link copiato negli appunti!");
                })
                .catch(err => {
                    console.error("Errore nel copiare il link:", err);
                    alert("Errore nel copiare il link negli appunti.");
                });
        } else {
            alert("Il tuo browser non supporta la funzione di copia negli appunti.");
        }
    });
}