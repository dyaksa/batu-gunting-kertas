const btn1 = document.querySelectorAll('.row button');
let scoreP = 0;
let scoreComp = 0;
let hasil = '';

btn1[0].addEventListener('click', function (e) {
    let i = angkaRandom(2, 0);
    let comp = ['batu', 'gunting', 'kertas'];
    let p = btn1[0].getAttribute('value');
    if (p === comp[i]) {
        hasil = 'Seri';
    } else if (comp[i] === 'gunting') {
        hasil = 'Maaf anda Kalah';
        scoreComp++;
    } else {
        hasil = 'Selamat anda menang';
        scoreP++;
    }
    let score = document.getElementById('score').innerHTML = scoreP + ' - ' + scoreComp;
    document.getElementById('hasil').innerHTML = hasil;
});

btn1[1].addEventListener('click', function (e) {
    let i = angkaRandom(2, 0);
    let comp = ['batu', 'gunting', 'kertas'];
    let p = btn1[1].getAttribute('value');
    if (p === comp[i]) {
        hasil = 'seri'
    } else if (comp[i] === 'batu') {
        hasil = 'Maaf anda kalah'
        scoreComp++;
    } else {
        hasil = 'selamat anda menang'
        scoreP++;
    }
    let score = document.getElementById('score').innerHTML = scoreP + ' - ' + scoreComp;
    document.getElementById('hasil').innerHTML = hasil;
});

btn1[2].addEventListener('click', function (e) {
    let i = angkaRandom(2, 0);
    let comp = ['batu', 'gunting', 'kertas'];
    let p = btn1[2].getAttribute('value');
    if (p === comp[i]) {
        hasil = 'seri';
    } else if (comp[i] === 'gunting') {
        hasil = 'maaf anda kalah';
        scoreComp++;
    } else {
        hasil = 'selamat anda menang';
        scoreP++;
    }
    let score = document.getElementById('score').innerHTML = scoreP + ' - ' + scoreComp;
    document.getElementById('hasil').innerHTML = hasil;
});

function angkaRandom(high, low) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}