document.addEventListener("DOMContentLoaded", () => {
    const homeLink = document.getElementById("aksara-link");

    // Mendapatkan URL saat ini
    const currentUrl = window.location.href;

    // Memeriksa apakah pengguna berada di halaman utama
    if (currentUrl.includes("aksara.html")) {
        homeLink.classList.add("active");
    }
});