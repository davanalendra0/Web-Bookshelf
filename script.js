const $ = s => document.querySelector(s),
    root = document.documentElement,
    room = $('#room'),
    sw = $('#sw'),
    desk = $('#desk'),
    bk = $('#bk');

function setTheme(n) {
    root.dataset.theme = n ? 'night' : 'day';
    sw.setAttribute('aria-checked', String(n));
    try {
        localStorage.setItem('rak-th', n ? 'n' : 'd');
    } catch (e) {}
}

let sv = null;

try {
    sv = localStorage.getItem('rak-th');
} catch (e) {}

const hr = new Date().getHours();

setTheme(sv ? sv === 'n' : (hr < 6 || hr >= 18));

sw.onclick = () => {
    sw.classList.add('pull');
    setTimeout(() => sw.classList.remove('pull'), 160);
    setTheme(sw.getAttribute('aria-checked') !== 'true');
};


// MEMBUAT RAK BUKU
const shelf = $('#shelf');
let last = null;

for (let i = 0; i < BOOKS.length; i += 6) {
    const row = document.createElement('div');
    row.className = 'row';
    BOOKS.slice(i, i + 6).forEach((b, j) => {
        const el = document.createElement('button');

        el.className = 'book';
        el.textContent = b.t;
        el.setAttribute('aria-label', b.t + ', ' + b.a);

        const n = i + j,
            h = Math.min(200, Math.max(120, Math.round(b.t.length * 7.6 + 40)));

        el.style.cssText = `background:${b.c};color:${b.k};width:${32 + (n * 7 % 3) * 3}px;height:${h}px`;
        el.onclick = () => {
            last = el;
            openBook(b);
        };
        row.appendChild(el);
    });
    shelf.appendChild(row);
}

// MENYESUAIKAN UKURAN TULISAN PADA BUKU
function fitSpines() {
    document.querySelectorAll('.book').forEach(el => {
        let f = 13;

        el.style.fontSize = f + 'px';

        while (el.scrollHeight > el.clientHeight + 1 && f > 8) {
            f -= .5;
            el.style.fontSize = f + 'px';
        }
    });
}

fitSpines();

document.fonts && document.fonts.ready.then(fitSpines);

// MEMBUKA BUKU
const fr = $('#fr'),
    cap = $('#cap');

function openBook(b) {
    $('#ct').textContent = b.t;
    $('#ca').textContent = b.a;

    if (b.cover) {
        fr.style.background = `#222 url("${b.cover}") center/cover`;
        fr.classList.add('img');
    } else {
        fr.classList.remove('img');
        fr.style.background = b.c;
        fr.style.color = b.k;
    }

    $('#bl').textContent = b.b || 'blurb';
    $('#ls').textContent = 'Kumiliki sejak ' + b.s;
    $('#rev').textContent = b.r;

    bk.className = 'bk';

    $('#rib').setAttribute('aria-pressed', 'false');

    cap.textContent = 'Klik sampul untuk membuka buku';
    desk.hidden = false;
    fr.focus();

    fitPages();

    requestAnimationFrame(() => requestAnimationFrame(() => bk.classList.add('near')));
}

// MENYESUAIKAN UKURAN TEKS HALAMAN
function fitText(el, max, min) {
    el.classList.remove('sc');
    el.scrollTop = 0;

    let f = max;

    el.style.fontSize = f + 'px';

    while (el.scrollHeight > el.clientHeight + 1 && f > min) {
        f -= .5;
        el.style.fontSize = f + 'px';
    }

    if (el.scrollHeight > el.clientHeight + 1) {
        el.classList.add('sc');
    }
}

function fadeHint() {
    const bl = $('#bl');
    $('.fb').classList.toggle(
        'more',
        bl.classList.contains('sc') && bl.scrollTop + bl.clientHeight < bl.scrollHeight - 4
    );
}

function fitPages() {
    if (desk.hidden) return;

    const w = bk.clientWidth;

    fitText(
        $('#bl'),
        Math.max(11, Math.min(20, w / 40)),
        Math.max(10.5, w / 56)
    );
    fitText(
        $('#rev'),
        Math.max(13, Math.min(24, w / 32)),
        Math.max(12, w / 50)
    );
    fadeHint();
}

$('#bl').onscroll = fadeHint;

addEventListener('resize', fitPages);

document.fonts && document.fonts.ready.then(fitPages);

// MEMBUKA SAMPUL BUKU
function openCover() {
    if (bk.classList.contains('open')) return;

    bk.classList.add('open');
    cap.textContent = 'Tarik pita emas untuk membaca review';

    $('#rib').focus();
}

fr.onclick = openCover;

fr.onkeydown = e => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openCover();
    }
};

// MENAMPILKAN DAN MENYEMBUNYIKAN REVIEW
function toggleNote() {
    const on = bk.classList.toggle('read');

    $('#rib').setAttribute('aria-pressed', String(on));

    cap.textContent = on
        ? 'Klik kertas untuk menyimpannya lagi'
        : 'Tarik pita emas untuk membaca review';
}

$('#rib').onclick = toggleNote;
$('#note').onclick = toggleNote;

// MENUTUP BUKU
function closeBook() {
    desk.hidden = true;

    last && last.focus();
}

$('#x').onclick = closeBook;

desk.onclick = e => {
    if (e.target === desk) closeBook();
};

addEventListener('keydown', e => {
    if (e.key === 'Escape' && !desk.hidden) closeBook();
});

// UKURAN DAN SUDUT PANDANG RUANGAN
let side = 'shelf';

function fit() {
    const p = innerHeight > innerWidth,
        s = Math.max(.3, Math.min(innerWidth / (p ? 600 : 980), innerHeight / 620));

    room.style.setProperty('--s', s);
    room.style.setProperty(
        '--tx',
        p
            ? (side === 'shelf' ? -160 * s : 240 * s) + 'px'
            : '0px'
    );
}

$('#pan').onclick = () => {
    side = side === 'shelf' ? 'window' : 'shelf';
    fit();
};

addEventListener('resize', fit);

fit();

// EFEK GERAK KAMERA
if (!matchMedia('(prefers-reduced-motion:reduce)').matches) {
    addEventListener('pointermove', e => {
        if (innerHeight > innerWidth || !desk.hidden) return;

        room.style.setProperty(
            '--ry',
            ((e.clientX / innerWidth - .5) * 10) + 'deg'
        );
        room.style.setProperty(
            '--rx',
            (-(e.clientY / innerHeight - .5) * 5) + 'deg'
        );
    });
}