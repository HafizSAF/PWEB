document.addEventListener("DOMContentLoaded", () => {
    const aksaraLink = document.getElementById("aksara-link");

    // Mendapatkan URL saat ini
    const currentUrl = window.location.href;

    // Memeriksa apakah pengguna berada di halaman utama
    if (currentUrl.includes("aksara.html")) {
        aksaraLink.classList.add("active");
    }
});