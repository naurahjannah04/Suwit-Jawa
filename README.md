# 🎮 Suwit Jawa

Game **Suwit Jawa** berbasis web — versi digital dari permainan tradisional Jawa (Gajah, Manusia, Semut). Lawan komputer dan lihat siapa yang menang!

🔗 **[▶ Buka & Mainkan Sekarang](https://suwit-jawa-x-rpl.vercel.app/)**

---

## ✊ Aturan Main

| Pilihan                   | Mengalahkan |
| ------------------------- | ----------- |
| 🐘 **Gajah** (Jempol)     | 🧑 Manusia  |
| 🧑 **Manusia** (Telunjuk) | 🐜 Semut    |
| 🐜 **Semut** (Kelingking) | 🐘 Gajah    |

> Semut bisa mengalahkan Gajah karena semut masuk ke telinga gajah!

---

## 🕹️ Cara Bermain

1. Buka link di atas atau jalankan lokal (lihat bagian bawah).
2. Klik salah satu tombol: **Gajah**, **Manusia**, atau **Semut**.
3. Tunggu animasi komputer berpikir (~1 detik).
4. Lihat hasil: **MENANG**, **KALAH**, atau **SERI**.
5. Skor terus terakumulasi — main terus sampai puas!

---

## 📁 Struktur Proyek

```
Folder/
├── index.html        # Struktur halaman utama
├── style.css         # Tampilan & animasi (responsive)
├── app.js            # Logika permainan (vanilla JS)
└── images/
    ├── player-gajah.jpg
    ├── player-manusia.jpg
    ├── player-semut.jpg
    ├── computer-gajah.jpg
    ├── computer-manusia.jpg
    └── computer-semut.jpg
```

---

## ⚙️ Konsep JavaScript yang Dipakai

- **DOM Manipulation** — memilih & mengubah elemen HTML secara dinamis
- **Event Listener** — tombol pilihan terhubung ke fungsi `playGame()`
- **`setInterval` & Callback** — animasi "komputer berpikir" berjalan 1 detik
- **State Management** — variabel `isPlaying` mencegah klik ganda saat animasi
- **Template Literals** — injeksi gambar dinamis ke dalam HTML
- **`Math.random()`** — pilihan komputer dihasilkan secara acak

---

## 🚀 Jalankan Lokal

Tidak perlu install apapun — cukup buka file HTML langsung di browser:

```bash
# Clone repo (jika belum)
git clone <url-repo-ini>
cd suit-jawa

# Buka di browser
start index.html        # Windows
open index.html         # macOS
xdg-open index.html     # Linux
```

Atau gunakan ekstensi **Live Server** di VS Code untuk auto-reload.

---

## 🛠️ Tech Stack

| Teknologi         | Keterangan                                  |
| ----------------- | ------------------------------------------- |
| HTML5             | Struktur halaman                            |
| CSS3              | Styling + animasi `@keyframes` + responsive |
| JavaScript (ES6+) | Logika game, DOM, event                     |
| Vercel            | Hosting & deployment                        |

---

_Dibuat sebagai tugas belajar JavaScript — X RPL_
