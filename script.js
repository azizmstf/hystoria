const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

document.querySelector('.form button').addEventListener('click', function() {
    var email = document.querySelector('.form input').value;
    if (email) {
        alert("Terima kasih telah mendaftar!");
    } else {
        alert("Harap masukkan email Anda.");
    }
});
