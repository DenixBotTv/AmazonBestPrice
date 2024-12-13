document.getElementById("urlForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const amazonUrl = document.getElementById("amazon_url").value;

    // Aggiunge il tag affiliato al link
    const affiliateTag = "denix0a-21";
    const affiliateUrl = amazonUrl.includes("tag=")
        ? amazonUrl.replace(/(tag=)[^&]+/, `$1${affiliateTag}`)
        : amazonUrl + (amazonUrl.includes("?") ? "&" : "?") + `tag=${affiliateTag}`;

    // Nasconde il form
    document.getElementById("urlForm").style.display = 'none';

    // Mostra il risultato
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = 'block';
    document.getElementById("affiliateLink").href = affiliateUrl;
    document.getElementById("affiliateLink").textContent = affiliateUrl;

    // Event listener per il tasto copia
    setupCopyLinkButton(affiliateUrl);

    // Il bottone "Più Info" non fa nulla:
    // Non chiamiamo più la setupMoreInfoButton
    // e non attacchiamo alcun event listener.
});

function setupCopyLinkButton(affiliateUrl) {
    const copyBtn = document.getElementById("copyLink");
    const copyMessage = document.getElementById("copyMessage");
    
    copyBtn.addEventListener("click", function () {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(affiliateUrl)
                .then(() => {
                    showPopup(copyMessage);
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

// Funzione per mostrare popup
function showPopup(popupElement) {
    popupElement.style.display = 'block';
    setTimeout(() => {
        popupElement.style.display = 'none';
    }, 2000);
}
