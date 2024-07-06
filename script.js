document.addEventListener("DOMContentLoaded", function() {
    const nameInput = document.getElementById('nameInput');
    const checkButton = document.querySelector('button[onclick="checkKhodam()"]');

    nameInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            checkButton.click();
        }
    });
});

function checkKhodam() {
    const name = document.getElementById('nameInput').value;
    const resultElement = document.getElementById('result');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const successSound = document.getElementById('successSound');

    const khodams = [
        "Burung Palkon",
        "Ikan Konkol",
        "Asu Liar",
        "Sempak Manchaster United",
        "Tai Anjing",
        "Tai Kucing",
        "Uler Taman Eden",
        "Kambing Sange",
        "Anjing Kawin",
        "Kutu Air"
    ];

    if (name) {
        loadingSpinner.style.display = 'block';
        resultElement.textContent = "";

        setTimeout(() => {
            let khodam;
            if (name.toLowerCase().includes('vexi')) {
                khodam = "sendi";
            } else if (name.toLowerCase().includes('mulya')) {
                khodam = "indahop";
            } else if (name.toLowerCase().includes('zeppy')) {
                khodam = "niken,rahma";
            } else if (name.toLowerCase().includes('carlos')) {
                khodam = "theona";
            } else if (name.toLowerCase().includes('brian')) {
                khodam = "ragil";
            } else if (name.toLowerCase().includes('kevin')) {
                khodam = "evita";
            } else if (name.toLowerCase().includes('dimas')) {
                khodam = "hinoa";
            } else if (name.toLowerCase().includes('andrew')) {
                khodam = "kobo kanaeru";
            } else if (name.toLowerCase().includes('adam')) {
                khodam = "ricardo milos";
            }
            else {
                const randomIndex = Math.floor(Math.random() * khodams.length);
                khodam = khodams[randomIndex];
            }
            resultElement.textContent = `${name} khodamnya : ${khodam}`;

            loadingSpinner.style.display = 'none';

        }, 2000);
    } else {
        resultElement.textContent = "Harap masukkan nama Anda.";
    }
}


