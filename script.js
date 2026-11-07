/* =====================================================
   ✏️ BAGIAN INI YANG BISA KAMU UBAH-UBAH (CONFIG)
   ===================================================== */
const CONFIG = {
  nama: "Florence",          // nama penerima
  pengirim: "Gegee",         // nama kamu
  pin: "290125",             // kode rahasia (6 angka)
  tanggal: "DECEMBER 29 · THE MOST SPECIAL DAY",

  ucapan: {
    judul: "Happy Birthday! Florence yang paling istimewa 🌸",
    isi: "Barakallahu fii umrik"
  },

  // teks di atas bunga: [awal, ketukan 1, ketukan 2, ketukan 3]
  mekar: [
    "Ketuk bunga untuk membuatnya mekar 🌷",
    "Semoga hari-harimu penuh keberkahan 🤍",
    "Semoga Allah beri kesehatan, kebahagiaan, dan kemudahan di setiap langkahmu ✨",
    "Barakallahu fii umrik. Semoga umurmu penuh berkah 🌸"
  ],

  surat: [
    "Terima kasih sudah hadir dan membawa banyak warna di hidupku.",
    "Di hari ulang tahunmu ini, aku berharap semua mimpimu terwujud, semua doamu dikabulkan, dan semua kebahagiaanmu berlipat ganda. Kamu layak mendapatkan semua hal indah yang ditawarkan dunia ini."
  ],

  // pesan di tiap bunga (emoji, pesan)
  buket: [
    ["🌷", "Kamu secantik bunga tulip di musim semi, segar dan penuh harapan baru."],
    ["🌹", "Seperti mawar, kamu selalu membuat hariku lebih indah."],
    ["🌻", "Senyummu hangat seperti matahari, selalu membuatku semangat."],
    ["💐", "Kamu hadiah terbaik yang pernah datang ke hidupku."],
    ["🌺", "Kamu seperti kembang sepatu yang mekar penuh — selalu cerah, selalu memikat."]
  ],

  // foto: isi img dengan nama file di folder, contoh "foto/1.jpg". Kosong = tampil emoji.
  galeri: [
    { img: "", judul: "Pesona yang Memukau", caption: "Tatapan matamu membuat waktu terasa berhenti untuk sejenak." },
    { img: "", judul: "Saat di Pantai, Kamu Memukau", caption: "Ombak bisa tenang, tapi hatiku selalu bergejolak karenamu." },
    { img: "", judul: "Ganteng Tanpa Tara", caption: "Senyummu adalah kekuatan di tengah dinginnya dunia." },
    { img: "", judul: "Aura Hangat Mu", caption: "Kehadiranmu membuat segala kesedihan hilang dalam sekejap." },
    { img: "", judul: "Penuh Karaktermu", caption: "Setiap detail darimu menceritakan kisah yang indah." },
    { img: "", judul: "Tenang dan Damai", caption: "Dengan dirimu, aku menemukan ketenangan sejati." },
    { img: "", judul: "Momen Berkesan", caption: "Setiap detik bersamamu adalah harta yang tak ternilai." },
    { img: "", judul: "Pesona Alami", caption: "Kamu lebih dari cukup, kamu sempurna sebagaimana adanya." }
  ],

  timeline: [
    { emoji: "✨", judul: "Titik Awal", sub: "Pertemuan yang Tak Pernah Direncanakan", isi: "Semesta mempertemukan kita secara tidak sengaja hingga membuat waktu terasa berjalan lambat dan menumbuhkan rasa penasaran." },
    { emoji: "💬", judul: "Malam-Malam Panjang", sub: "Percakapan yang Tak Pernah Terasa Cukup", isi: "Obrolan intensif sampai larut malam yang membuat aku selalu menunggu notifikasi dan jatuh hati." },
    { emoji: "💗", judul: "Hati yang Memilih", sub: "Keberanian untuk Mengatakannya", isi: "Hari ketika aku akhirnya jujur tentang perasaanku, dan kamu menjawabnya dengan senyuman." },
    { emoji: "🌱", judul: "Tumbuh Bersama", sub: "Belajar dan Saling Menguatkan", isi: "Kita belajar menerima kekurangan dan merayakan setiap kemenangan kecil bersama-sama." }
  ],

  // src = nama file mp3 di folder (contoh "lagu/lagu1.mp3"). Kosong = hanya simulasi tampilan.
  lagu: [
    { judul: "Super Powers", artis: "Daniel Caesar", emoji: "💛", src: "" },
    { judul: "Monokrom", artis: "Tulus", emoji: "🌸", src: "" },
    { judul: "AH", artis: "Nadin Amizah", emoji: "🌷", src: "" }
  ],

  toples: [
    "Terima kasih sudah menjadi rumah tempatku pulang.",
    "Terima kasih telah menjadi pendengar terbaik di setiap malam panjang kita, saat aku lelah maupun saat aku senang.",
    "Terima kasih karena selalu sabar menghadapi sifatku.",
    "Terima kasih telah mempercayaiku untuk berjalan di sampingmu, melewati setiap hari dan ketidakpastian bersama-sama.",
    "Terima kasih karena tawamu selalu jadi obat paling manjur.",
    "Terima kasih sudah percaya padaku, bahkan saat aku ragu pada diriku sendiri.",
    "Terima kasih untuk setiap pelukan yang menenangkan.",
    "Terima kasih karena sudah menjadi dirimu apa adanya."
  ]
};

/* =====================================================
   ⚙️ KODE PROGRAM (tidak perlu diubah kalau masih pemula)
   ===================================================== */
const $  = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const rand = (a, b) => Math.random() * (b - a) + a;

/* ---------- Bunga SVG ---------- */
const PALETTES = [
  ["#ff7aa8", "#ffd0e0"], ["#4aa3ff", "#cfe6ff"], ["#ffc83d", "#7a3b00"],
  ["#ff5a7a", "#ffc2cf"], ["#c28bff", "#efe0ff"]
];
function flowerSVG(size = 40, pal = PALETTES[0]) {
  let petals = "";
  const n = pal[0] === "#ffc83d" ? 12 : 6;
  for (let i = 0; i < n; i++) {
    petals += `<ellipse cx="50" cy="26" rx="${n === 12 ? 8 : 15}" ry="${n === 12 ? 20 : 24}" fill="${pal[0]}" transform="rotate(${i * 360 / n} 50 50)" opacity=".92"/>`;
  }
  return `<svg width="${size}" height="${size}" viewBox="0 0 100 100">${petals}<circle cx="50" cy="50" r="${n === 12 ? 16 : 11}" fill="${pal[1]}"/></svg>`;
}
const defaultFlower = flowerSVG(44, ["#ff8fb8", "#fff0f5"]);
$$("[data-flower]").forEach(el => el.innerHTML = defaultFlower);
$("#loaderFlower").innerHTML = defaultFlower;

/* ---------- Kelopak jatuh di latar ---------- */
function spawnPetal() {
  const p = document.createElement("div");
  p.className = "p";
  p.style.left = rand(0, 100) + "vw";
  p.style.animationDuration = rand(9, 17) + "s";
  p.innerHTML = flowerSVG(rand(16, 34), PALETTES[Math.floor(rand(0, PALETTES.length))]);
  $("#petals").appendChild(p);
  setTimeout(() => p.remove(), 18000);
}
setInterval(spawnPetal, 1100);

/* ---------- Confetti ---------- */
const cv = $("#confetti"), cx = cv.getContext("2d");
let parts = [];
function sizeCanvas() { cv.width = innerWidth; cv.height = innerHeight; }
sizeCanvas(); addEventListener("resize", sizeCanvas);
function confetti(x = innerWidth / 2, y = innerHeight / 3, n = 90) {
  const colors = ["#ff7aa8", "#ffd24a", "#8ec5ff", "#c28bff", "#ffffff", "#7fe3b0"];
  for (let i = 0; i < n; i++) {
    parts.push({ x, y, vx: rand(-6, 6), vy: rand(-11, -2), s: rand(4, 9), r: rand(0, 6),
      vr: rand(-.3, .3), c: colors[i % colors.length], life: 140 });
  }
  if (parts.length === n) loop();
}
function loop() {
  cx.clearRect(0, 0, cv.width, cv.height);
  parts = parts.filter(p => p.life > 0);
  parts.forEach(p => {
    p.x += p.vx; p.y += p.vy; p.vy += .25; p.vx *= .99; p.r += p.vr; p.life--;
    cx.save(); cx.translate(p.x, p.y); cx.rotate(p.r);
    cx.globalAlpha = Math.min(1, p.life / 40);
    cx.fillStyle = p.c; cx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); cx.restore();
  });
  if (parts.length) requestAnimationFrame(loop);
}

/* ---------- Alur layar: loading → PIN → hadiah → bunga → utama ---------- */
function swap(from, to) {
  from.classList.add("fade-out");
  setTimeout(() => { from.classList.add("hidden"); if (to) to.classList.remove("hidden"); }, 600);
}

// 1. loading
setTimeout(() => swap($("#loader"), $("#lock")), 2200);

// 2. PIN
$("#lockTitle").textContent = `Untuk ${CONFIG.nama}, Cintaku`;
let entered = "";
const dots = $("#dots");
dots.innerHTML = "<span></span>".repeat(CONFIG.pin.length);
const keys = ["1","2","3","4","5","6","7","8","9","✕","0","↵"];
keys.forEach(k => {
  const b = document.createElement("button");
  b.textContent = k;
  if (k === "↵") b.className = "ok";
  b.onclick = () => press(k);
  $("#keypad").appendChild(b);
});
function drawDots() { $$("span", dots).forEach((d, i) => d.classList.toggle("on", i < entered.length)); }
function press(k) {
  if (k === "✕") entered = entered.slice(0, -1);
  else if (k === "↵") return check();
  else if (entered.length < CONFIG.pin.length) entered += k;
  drawDots();
  if (entered.length === CONFIG.pin.length) setTimeout(check, 200);
}
function check() {
  if (entered === CONFIG.pin) { swap($("#lock"), $("#gift")); }
  else {
    const card = $(".lock-card");
    card.classList.add("shake");
    setTimeout(() => card.classList.remove("shake"), 500);
    entered = ""; drawDots();
  }
}
addEventListener("keydown", e => {
  if ($("#lock").classList.contains("hidden")) return;
  if (/^\d$/.test(e.key)) press(e.key);
  if (e.key === "Backspace") press("✕");
  if (e.key === "Enter") press("↵");
});

// 3. hadiah → 4. ledakan bunga
$("#giftBox").onclick = function () {
  this.classList.add("open");
  setTimeout(() => { swap($("#gift"), null); flowerBurst(); }, 500);
};
function flowerBurst() {
  const b = $("#burst");
  b.classList.remove("hidden");
  for (let i = 0; i < 70; i++) {
    const f = document.createElement("div");
    f.className = "bf";
    const size = rand(50, 150);
    f.innerHTML = flowerSVG(size, PALETTES[i % PALETTES.length]);
    b.appendChild(f);
    const ang = rand(0, Math.PI * 2), dist = rand(80, Math.max(innerWidth, innerHeight) * .6);
    f.animate([
      { transform: "translate(-50%,-50%) scale(0) rotate(0)", opacity: 0 },
      { transform: `translate(calc(-50% + ${Math.cos(ang) * dist}px), calc(-50% + ${Math.sin(ang) * dist}px)) scale(1) rotate(${rand(-200, 200)}deg)`, opacity: 1 }
    ], { duration: rand(900, 1500), easing: "cubic-bezier(.2,.8,.2,1)", fill: "forwards", delay: rand(0, 300) });
  }
  const m = document.createElement("div");
  m.className = "msg"; m.textContent = "Selamat Ulang Tahun 💖";
  b.appendChild(m);
  confetti(innerWidth / 2, innerHeight / 2, 120);
  setTimeout(() => {
    b.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 800, fill: "forwards" });
    setTimeout(() => { b.classList.add("hidden"); showMain(); }, 800);
  }, 3000);
  playBgm();
}
function showMain() {
  $("#main-dashboard").classList.remove("hidden");
  scrollTo(0, 0);
  initReveal();
}

/* ---------- Isi konten dari CONFIG ---------- */
$("#heroName").textContent = CONFIG.nama;
$("#heroDate").textContent = CONFIG.tanggal;

// bunga mekar (ketuk 3 kali)
let stage = 0;
$("#bloomBtn").onclick = () => {
  stage = (stage + 1) % 4;
  const f = $("#bigFlower");
  f.classList.remove("s1", "s2", "s3");
  if (stage > 0) f.classList.add("s" + stage);
  $("#bloomHint").textContent = CONFIG.mekar[stage];
  const r = f.getBoundingClientRect();
  if (stage > 0) confetti(r.left + r.width / 2, r.top + r.height * .4, stage === 3 ? 160 : 45);
};
$("#wishCard").innerHTML = `<b>${CONFIG.ucapan.judul}</b><span class="muted">${CONFIG.ucapan.isi.toUpperCase()}</span>`;

// surat
$("#letter").innerHTML =
  CONFIG.surat.map(t => `<p>"${t}"</p>`).join("") +
  `<p class="sign">Dengan segenap cintaku,<b>${CONFIG.pengirim}</b></p>`;

// buket
(function () {
  const wrap = $("#bouquet"), svg = $(".stems", wrap);
  const pos = [[75, 55], [135, 25], [195, 40], [245, 70], [35, 95]];
  const order = [4, 0, 1, 2, 3]; // supaya tersebar
  CONFIG.buket.forEach((b, i) => {
    const [x, y] = pos[i % pos.length];
    svg.insertAdjacentHTML("beforeend", `<line x1="150" y1="215" x2="${x}" y2="${y}"/>`);
    const btn = document.createElement("button");
    btn.className = "bloom"; btn.textContent = b[0];
    btn.style.left = x + "px"; btn.style.top = y + "px";
    btn.onclick = () => {
      $$(".bloom").forEach(e => e.classList.remove("active"));
      btn.classList.add("active");
      $("#bouquetMsg").textContent = `"${b[1]}"`;
      const r = btn.getBoundingClientRect();
      confetti(r.left + r.width / 2, r.top + 20, 25);
    };
    wrap.appendChild(btn);
  });
})();

// galeri
$("#gallery").innerHTML = CONFIG.galeri.map((g, i) => `
  <div class="polaroid reveal-on-scroll">
    <div class="frame">
      ${g.img ? `<img src="${g.img}" alt="${g.judul}">` : `<div class="ph">${["🌸","🌊","🌄","🌻","🏔️","🌙","📸","🌷"][i % 8]}</div>`}
      <div class="cover"><i>📷</i>Ketuk untuk mengungkap</div>
    </div>
    <h4>${g.judul}</h4><p>"${g.caption}"</p>
  </div>`).join("");
$$(".polaroid").forEach(p => p.onclick = () => {
  if (!p.classList.contains("open")) {
    p.classList.add("open");
    const r = p.getBoundingClientRect();
    confetti(r.left + r.width / 2, r.top + r.height / 2, 40);
  }
});

// timeline
$("#timeline").insertAdjacentHTML("beforeend", CONFIG.timeline.map((t, i) => `
  <div class="timeline-item ${i % 2 ? "right-item" : "left-item"} reveal-on-scroll">
    <div class="timeline-dot"></div>
    <div class="timeline-card">
      <h3 class="timeline-title">${t.emoji} ${t.judul}</h3>
      <h5>${t.sub}</h5><p>${t.isi}</p>
    </div>
  </div>`).join(""));

/* ---------- Pemutar musik ---------- */
const audio = $("#audio");
let cur = 0, playing = false, fakeT = 0, fakeTimer = null;
const FAKE_LEN = 425; // detik (dipakai kalau belum ada file mp3)
const fmt = s => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

$("#songlist").innerHTML = CONFIG.lagu.map((l, i) => `
  <li data-i="${i}"><span class="n">${i + 1}</span>
  <div>${l.judul}<small>${l.artis}</small></div><span class="e">${l.emoji}</span></li>`).join("");
$$("#songlist li").forEach(li => li.onclick = () => { load(+li.dataset.i); play(); });

function load(i) {
  cur = (i + CONFIG.lagu.length) % CONFIG.lagu.length;
  const l = CONFIG.lagu[cur];
  $("#songTitle").textContent = l.judul;
  $("#songArtist").textContent = l.artis;
  $$("#songlist li").forEach((li, k) => li.classList.toggle("active", k === cur));
  fakeT = 0; $("#seek").value = 0; $("#timeNow").textContent = "0:00";
  $("#timeTotal").textContent = l.src ? "0:00" : fmt(FAKE_LEN);
  if (l.src) audio.src = l.src; else audio.removeAttribute("src");
}
function play() {
  const l = CONFIG.lagu[cur];
  playing = true;
  $("#playBtn").textContent = "⏸"; $("#vinyl").classList.add("spin");
  clearInterval(fakeTimer);
  if (l.src) audio.play().catch(() => {});
  else fakeTimer = setInterval(() => {
    fakeT++; $("#seek").value = fakeT / FAKE_LEN * 100; $("#timeNow").textContent = fmt(fakeT);
    if (fakeT >= FAKE_LEN) { load(cur + 1); play(); }
  }, 1000);
}
function pause() {
  playing = false; audio.pause(); clearInterval(fakeTimer);
  $("#playBtn").textContent = "▶"; $("#vinyl").classList.remove("spin");
}
$("#playBtn").onclick = () => playing ? pause() : play();
$("#nextBtn").onclick = () => { load(cur + 1); if (playing) play(); };
$("#prevBtn").onclick = () => { load(cur - 1); if (playing) play(); };
audio.addEventListener("loadedmetadata", () => $("#timeTotal").textContent = fmt(audio.duration));
audio.addEventListener("timeupdate", () => {
  if (!audio.duration) return;
  $("#seek").value = audio.currentTime / audio.duration * 100;
  $("#timeNow").textContent = fmt(audio.currentTime);
});
audio.addEventListener("ended", () => { load(cur + 1); play(); });
$("#seek").oninput = e => {
  const v = +e.target.value / 100;
  if (CONFIG.lagu[cur].src && audio.duration) audio.currentTime = v * audio.duration;
  else { fakeT = Math.floor(v * FAKE_LEN); $("#timeNow").textContent = fmt(fakeT); }
};
load(0);
function playBgm() { play(); } // musik mulai setelah hadiah dibuka

/* ---------- Toples catatan ---------- */
let bag = [], shown = 0;
$("#shakeBtn").onclick = () => {
  const jar = $("#jar");
  jar.classList.remove("shaking"); void jar.offsetWidth; jar.classList.add("shaking");
  if (!bag.length) bag = CONFIG.toples.map((_, i) => i).sort(() => Math.random() - .5);
  const idx = bag.pop(); shown++;
  setTimeout(() => {
    $("#noteText").textContent = `"${CONFIG.toples[idx]}"`;
    $("#noteCount").textContent = `CATATAN ${idx + 1} DARI ${CONFIG.toples.length}`;
    const c = $("#noteCard"); c.classList.remove("pop"); void c.offsetWidth; c.classList.add("pop");
    const r = jar.getBoundingClientRect();
    confetti(r.left + r.width / 2, r.top, 40);
  }, 450);
};

/* ---------- Muncul saat di-scroll ---------- */
function initReveal() {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("show"); io.unobserve(e.target); }
  }), { threshold: .15 });
  $$(".reveal, .reveal-on-scroll").forEach(el => io.observe(el));
}
