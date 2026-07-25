// === 1. State Management (Variabel Penampung Data) ===
let playerScore = 0;
let compScore = 0;
let isPlaying = false; // Mencegah klik ganda saat animasi berjalan

// === 2. Element Selection (DOM) ===
const playerScoreEl = document.getElementById("player-score");
const compScoreEl = document.getElementById("comp-score");
const pChoiceDisplay = document.getElementById("player-choice-display");
const cChoiceDisplay = document.getElementById("comp-choice-display");
const resultText = document.getElementById("game-result-text");
const resultInfo = document.getElementById("game-result-info");
const choiceButtons = document.querySelectorAll(".choice-btn");

// === 3. Logika Utama Permainan ===

// Fungsi untuk menentukan pilihan komputer
const getCompChoice = () => {
  const choices = ["gajah", "manusia", "semut"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

// Fungsi Animasi 'Komputer Berpikir' (Block Scope, let, const)
const compThinkingAnimation = (callback) => {
  cChoiceDisplay.innerHTML = ""; // Reset area pertarungan komputer
  const choices = ["gajah", "manusia", "semut"];
  let i = 0;
  const startTime = new Date().getTime();

  // Gunakan setInterval untuk menukar gambar cepat
  const animationInterval = setInterval(() => {
    // Hanya menampilkan gambar komupter berpikir
    const currentChoice = choices[i++ % choices.length];
    cChoiceDisplay.innerHTML = `<img src="./images/computer-${currentChoice}.jpg" class="thinking-img" alt="Thinking">`;

    // Cek jika animasi sudah berjalan 1 detik (1000ms)
    if (new Date().getTime() - startTime > 1000) {
      clearInterval(animationInterval); // Stop animasi
      callback(); // Panggil fungsi hasil (playGame) setelah animasi selesai
    }
  }, 100); // Ganti gambar setiap 100ms
};

// Fungsi untuk menjalankan satu putaran permainan (Event-Driven)
const playGame = (playerChoice) => {
  if (isPlaying) return; // Mencegah klik baru saat animasi
  isPlaying = true;

  const compChoice = getCompChoice();
  let result = "";
  let resultMessage = "";

  // Aksi 1: Tampilkan pilihan pemain segera
  pChoiceDisplay.innerHTML = `<img src="./images/player-${playerChoice}.jpg" alt="${playerChoice}">`;
  resultText.textContent = "...🤖...";
  resultInfo.textContent = "Komputer sedang berpikir...";

  // Aksi 2: Jalankan animasi komputer berpikir, lalu swap hasilnya
  compThinkingAnimation(() => {
    // Animasi selesai, tampilkan hasil asli komputer
    cChoiceDisplay.innerHTML = `<img src="./images/computer-${compChoice}.jpg" alt="${compChoice}">`;

    // Aksi 3: Logika Pemenang Suwit Jawa Tradisional
    if (playerChoice === compChoice) {
      result = "SERI";
      resultMessage = "Wah, kalian sepemikiran!";
    } else if (
      (playerChoice === "gajah" && compChoice === "manusia") || // Gajah > Manusia
      (playerChoice === "manusia" && compChoice === "semut") || // Manusia > Semut
      (playerChoice === "semut" && compChoice === "gajah") // Semut > Gajah
    ) {
      result = "MENANG";
      resultMessage = "Hebat! Gajah mengalahkan Manusia.";
      if (playerChoice === "manusia")
        resultMessage = "Selamat! Manusia mengalahkan Semut.";
      if (playerChoice === "semut")
        resultMessage = "Cerdik! Semut mengalahkan Gajah.";
      playerScore++;
    } else {
      result = "KALAH";
      resultMessage = "Ups! Komputer lebih beruntung.";
      if (compChoice === "gajah")
        resultMessage = "Sabar! Gajah mengalahkan Manusia.";
      if (compChoice === "manusia")
        resultMessage = "Coba lagi! Manusia mengalahkan Semut.";
      compScore++;
    }

    // Aksi 4: Update Skor & Visual DOM
    playerScoreEl.textContent = playerScore;
    compScoreEl.textContent = compScore;
    resultText.textContent = result === "SERI" ? "SERI!" : `KAMU ${result}!`;
    resultInfo.textContent = resultMessage;

    // Beri warna pada hasil
    if (result === "MENANG") {
      resultText.style.color = "#16a34a"; // Hijau
    } else if (result === "KALAH") {
      resultText.style.color = "#dc2626"; // Merah
    } else {
      resultText.style.color = "#ca8a04"; // Kuning
    }

    isPlaying = false; // Klik diaktifkan kembali
  });
};

// === 4. Event Listener (Menghubungkan Tombol dengan Fungsi) ===
// Gunakan .forEach() standar modern ES6
choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const pChoice = button.getAttribute("data-choice");
    playGame(pChoice);
  });
});
