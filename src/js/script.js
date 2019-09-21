const btn1 = document.querySelectorAll('.row button');

btn1.forEach(function (btn) {
    btn.addEventListener('click', function () {
        let comp = pilihanComp();
        let p = btn.getAttribute('value');
        let pesan = document.querySelector('div.hasil');
        pesan.classList.replace('display-none', 'display-inline-block');
        document.querySelector('.hasil p').innerHTML = hasil(comp, p);
    });
});

function pilihanComp() {
    let comp = ['batu', 'gunting', 'kertas'];
    let i = angkaRandom(2, 0);
    return comp[i];
}

function hasil(comp, p) {
    if (p === 'batu') {
        if (p === comp) {
            return 'seri';
        } else if (comp === 'gunting') {
            return "menang";
        } else {
            return "kalah";
        }
    } else if (p === 'gunting') {
        if (p === comp) {
            return 'seri';
        } else if (comp === 'kertas') {
            return 'menang';
        } else {
            return 'kalah';
        }
    } else {
        if (p === comp) {
            return 'seri';
        } else if (comp === 'batu') {
            return 'menang';
        } else {
            return 'kalah';
        }
    }
}

function angkaRandom(high, low) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}