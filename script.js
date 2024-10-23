// Fungsi untuk membuat kelopak bunga
function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = `${Math.random() * 100}vw`;
    petal.style.animationDuration = `${Math.random() * 5 + 3}s`; // Kecepatan jatuh bervariasi
    petal.style.opacity = Math.random(); // Transparansi acak
    document.getElementById('particle-container').appendChild(petal);

    // Hapus kelopak setelah animasi selesai
    setTimeout(() => {
        petal.remove();
    }, 8000); // Waktu penghapusan sesuai dengan durasi animasi
}

// Buat kelopak setiap 300ms
setInterval(createPetal, 300);

document.getElementById('trigger-login').addEventListener('click', function() {
    document.getElementById('login-modal').classList.remove('hidden');
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('login-modal').classList.add('hidden');
});

document.getElementById('login-btn').addEventListener('click', function() {
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');

    if (password === '060507') {
        window.location.href = 'surprise.html'; // Redirect ke halaman surprise
    } else {
        errorMsg.classList.remove('hidden');
    }
});
