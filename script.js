document.getElementById('startButton').addEventListener('click', function() {
    const nickname = document.getElementById('nickname').value; // Mengambil nilai input
    const message = document.getElementById('message'); // Mengambil elemen untuk pesan

    if (nickname === 'Nasya') {
        // Jika input benar, alihkan ke halaman lain
        window.location.href = 'halaman_kedua.html'; // Ganti dengan nama file halaman kedua
    } else {
        // Jika input salah, tampilkan pesan kesalahan
        message.textContent = "Maaf, coba lagi";
        message.classList.remove('hidden');
        message.classList.add('error');
    }
});
