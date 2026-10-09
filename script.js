// ========================================
// OPENING → WELCOME + START MUSIC
// ========================================

function openSurprise() {

    const opening =
        document.getElementById("opening");

    const welcome =
        document.getElementById("welcome");

    const music =
        document.getElementById("backgroundMusic");


    // Mulai musik setelah tombol OPEN HERE ditekan
    if (music) {

        music.volume = 0.6;

        music.play()
            .then(function () {

                console.log("Musik berhasil diputar");

            })
            .catch(function (error) {

                console.log(
                    "Musik gagal diputar:",
                    error
                );

            });

    }


    // Pindah ke halaman Welcome
    opening.style.display = "none";

    welcome.style.display = "flex";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

// ========================================
// WELCOME → CHOOSE YOUR SURPRISE
// ========================================

function goToSurprises() {

    const welcome =
        document.getElementById("welcome");

    const surprisePage =
        document.getElementById("surprisePage");

    welcome.style.display = "none";

    surprisePage.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

// ========================================
// LETTER → CHOOSE YOUR SURPRISE
// ========================================

function backFromLetter() {

    const letterPage =
        document.getElementById("letterPage");

    const surprisePage =
        document.getElementById("surprisePage");

    letterPage.style.display = "none";

    surprisePage.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

// ========================================
// BACK → WELCOME
// ========================================

function backToWelcome() {

    const welcome =
        document.getElementById("welcome");

    const surprisePage =
        document.getElementById("surprisePage");

    surprisePage.style.display = "none";

    welcome.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

function openLetter() {
    const surprisePage = document.getElementById("surprisePage");
    const letterPage = document.getElementById("letterPage");

    surprisePage.style.display = "none";
    letterPage.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    typeLetter();
}

function typeLetter() {
    const letterPaper = document.querySelector(".letter-paper");

    if (!letterPaper) return;

    letterPaper.innerHTML = `
        <h2>Happy Birthday! 🎂</h2>
        <p id="typingLetter"></p>
    `;

    const typingElement = document.getElementById("typingLetter");

    const message =
        "For You,\n\n" +
        "Selamat ulang tahun! Semoga di umur yang baru ini kamu selalu diberikan kebahagiaan, kesehatan, dan banyak hal baik dalam hidupmu.\n\n" +
        "Terima kasih sudah menjadi teman yang selalu memberikan cerita, tawa, dan kenangan yang tidak terlupakan.\n\n" +
        "Oh iya kira kira tambah umur tambah juga ga yah tinggi badan nya? 💗\n\n" +
        "From,\n" +
        "Your Best Friend ♡";

    let index = 0;

    function typeCharacter() {
        if (index < message.length) {
            const character = message.charAt(index);

            if (character === "\n") {
                typingElement.innerHTML += "<br>";
            } else {
                typingElement.innerHTML += character;
            }

            index++;

            setTimeout(typeCharacter, 35);
        }
    }

    typeCharacter();
}

// ========================================
// CHOOSE YOUR SURPRISE → MEMORIES
// ========================================

function openMemories() {

    const surprisePage =
        document.getElementById("surprisePage");

    const memoriesPage =
        document.getElementById("memoriesPage");

    surprisePage.style.display = "none";

    memoriesPage.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

// ========================================
// MEMORIES → CHOOSE YOUR SURPRISE
// ========================================

function backFromMemories() {

    const memoriesPage =
        document.getElementById("memoriesPage");

    const surprisePage =
        document.getElementById("surprisePage");

    memoriesPage.style.display = "none";

    surprisePage.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

// ========================================
// MEMORY PHOTO VIEWER
// ========================================

function openPhoto(photoSrc) {

    const viewer =
        document.getElementById("photoViewer");

    const largePhoto =
        document.getElementById("largePhoto");

    largePhoto.src = photoSrc;

    viewer.style.display = "flex";

}

function closePhoto() {

    const viewer =
        document.getElementById("photoViewer");

    viewer.style.display = "none";

}

// ========================================
// MEMORIES → FINAL SURPRISE
// ========================================

function openFinalSurprise() {
    const memoriesPage = document.getElementById("memoriesPage");
    const finalPage = document.getElementById("finalPage");

    memoriesPage.style.display = "none";
    finalPage.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    typeFinalMessage();
}


function typeFinalMessage() {
    const typingElement = document.getElementById("typingFinal");

    if (!typingElement) return;

    const message =
        "Happy Birthday! 🎂\n\n" +
        "Aku ga pandai ngomong, jadi tamplate aja lah yah kata katanya,\n\n" +
        "Cuma serius ini no fake fake.\n\n" +
        "Semoga di umur yang baru ini, kamu selalu diberikan kesehatan, kebahagiaan, dan banyak hal baik yang datang dalam hidupmu.\n\n" +
        "Semoga setiap langkah yang kamu ambil membawa kamu lebih dekat dengan hal-hal yang kamu impikan.\n\n" +
        "Terima kasih sudah menjadi bagian dari begitu banyak cerita, tawa, dan kenangan yang pernah kita lewati bersama.\n\n" +
        "Jangan lupa untuk selalu menghargai dirimu sendiri, tetap menjadi dirimu yang sebenarnya, dan jangan takut untuk terus mencoba hal-hal baru.\n\n" +
        "Selesaikan apa yang telah kau mulai, mungkin jalannya ga sesuai sama apa yang di inginkan tapikan udah sejauh ini.\n\n" +
        "\"OH iya jangan lupa bersyukur untuk setiap hal kecil yang di dapat apapun itu.\"\n\n" +
        "Kalo butuh pendengar bisa hubungi aku ya! 💌 barang kali ada cerita seru.\n\n" +
        "Sekali lagi, Happy Birthday! 🎂\n\n" +
        "Udah besar ae adek nih, soal tinggi badan setelah aku cari ternyata udh gabisa tumbuh lagi sih semangat yah hehe.\n\n" +
        "Keep smiling, keep being you, and keep making beautiful memories. ♡";

    typingElement.innerHTML = "";

    let index = 0;

    function typeCharacter() {
        if (index < message.length) {
            const character = message.charAt(index);

            if (character === "\n") {
                typingElement.innerHTML += "<br>";
            } else {
                typingElement.innerHTML += character;
            }

            index++;

            setTimeout(typeCharacter, 35);
        }
    }

    typeCharacter();
}

// ========================================
// FINAL SURPRISE → MEMORIES
// ========================================

function backToSurprisesFromFinal() {

    const finalPage =
        document.getElementById("finalPage");

    const memoriesPage =
        document.getElementById("memoriesPage");

    finalPage.style.display = "none";

    memoriesPage.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

function openGift() {

    const gift =
        document.querySelector(".music-heart");

    const surpriseText =
        document.querySelector(".surprise-text");

    const giftButton =
        document.querySelector(".open-gift-button");


    /* HADIAH BERGOYANG */

    gift.classList.add("gift-shake");


    /* SPARKLE */

    createGiftSparkles(gift);


    /* TUNGGU ANIMASI */

    setTimeout(function () {

        gift.classList.remove("gift-shake");

        gift.innerHTML = "💝";


        /* PESAN */

        surpriseText.innerHTML =
            "There isn't much I want to say! ♡<br><br>" +
            "I just want to say...<br>" +
            "Happy Birthday! 🎂";

        surpriseText.classList.add("revealed");


        /* UBAH TOMBOL */

        giftButton.innerHTML =
            "CONTINUE →";

        giftButton.classList.add("continue-mode");

        giftButton.onclick = function () {

            continueFromLittleSurprise();

        };


    }, 700);

}


/* ========================================
   SPARKLE EFFECT
======================================== */

function createGiftSparkles(gift) {

    const container =
        gift.parentElement;

    const sparkles = [
        "✨",
        "✦",
        "♡",
        "✨",
        "✦",
        "💫"
    ];


    sparkles.forEach(function (symbol, index) {

        const sparkle =
            document.createElement("span");

        sparkle.className =
            "gift-sparkle";

        sparkle.innerHTML =
            symbol;


        sparkle.style.left =
            (45 + Math.random() * 20) + "%";

        sparkle.style.top =
            (25 + Math.random() * 25) + "%";


        sparkle.style.animationDelay =
            (index * 0.08) + "s";


        container.appendChild(sparkle);


        setTimeout(function () {

            sparkle.remove();

        }, 1500);

    });

}
function openLittleSurprise() {

    const surprisePage =
        document.getElementById("surprisePage");

    const musicPage =
        document.getElementById("musicPage");

    surprisePage.style.display = "none";

    musicPage.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

function continueFromLittleSurprise() {
    const gift = document.querySelector(".music-heart");
    const surpriseText = document.querySelector(".surprise-text");
    const giftButton = document.querySelector(".open-gift-button");
    const giftPhotos = document.getElementById("giftPhotos");

    // Sembunyikan hadiah dan pesan
    gift.style.display = "none";
    surpriseText.style.display = "none";
    giftButton.style.display = "none";

    // Tampilkan tiga foto
    giftPhotos.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function backToGift() {
    const gift = document.querySelector(".music-heart");
    const surpriseText = document.querySelector(".surprise-text");
    const giftButton = document.querySelector(".open-gift-button");
    const giftPhotos = document.getElementById("giftPhotos");

    // Sembunyikan foto
    giftPhotos.style.display = "none";

    // Tampilkan hadiah dan pesan kembali
    gift.style.display = "";
    surpriseText.style.display = "";
    giftButton.style.display = "";

    // Kembalikan hadiah ke tampilan awal
    gift.innerHTML = "🎁";
    gift.classList.remove("gift-shake");

    surpriseText.innerHTML =
        "There is a little something waiting for you...";
    surpriseText.classList.remove("revealed");

    giftButton.innerHTML = "OPEN ME ♡";
    giftButton.classList.remove("continue-mode");
    giftButton.onclick = function () {
        openGift();
    };

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}



function backToSurprises() {
    const musicPage = document.getElementById("musicPage");
    const surprisePage = document.getElementById("surprisePage");
    const giftPhotos = document.getElementById("giftPhotos");
    const gift = document.querySelector(".music-heart");
    const surpriseText = document.querySelector(".surprise-text");
    const giftButton = document.querySelector(".open-gift-button");

    // Kembali ke halaman 3
    musicPage.style.display = "none";
    surprisePage.style.display = "flex";

    // Reset foto kejutan
    giftPhotos.style.display = "none";

    // Reset hadiah
    gift.style.display = "";
    gift.innerHTML = "🎁";
    gift.classList.remove("gift-shake");

    // Reset pesan
    surpriseText.style.display = "";
    surpriseText.innerHTML =
        "There is a little something waiting for you...";
    surpriseText.classList.remove("revealed");

    // Reset tombol
    giftButton.style.display = "";
    giftButton.innerHTML = "OPEN ME ♡";
    giftButton.classList.remove("continue-mode");
    giftButton.onclick = function () {
        openGift();
    };

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}