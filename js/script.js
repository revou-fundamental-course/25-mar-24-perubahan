// Fungsi untuk menghitung BMI
function hitungBMI(beratBadan, tinggiBadan) {
    // Mengonversi tinggi badan dari cm ke meter
    let tinggiBadanMeter = tinggiBadan / 100;
    // Menghitung BMI
    return beratBadan / (tinggiBadanMeter * 2);
}

// Fungsi untuk menampilkan hasil BMI dan kategori
function tampilkanHasilBMI() {
    // Ambil nilai berat badan dan tinggi badan dari input
    let beratBadan = parseFloat(document.getElementById("berat-badan").value);
    let tinggiBadan = parseFloat(document.getElementById("tinggi-badan").value);

    // Cek apakah kedua input sudah terisi
    if (isNaN(beratBadan) || isNaN(tinggiBadan)) {
        // Jika salah satu atau kedua input kosong, tampilkan peringatan
        alert("Harap isi kedua kolom berat badan dan tinggi badan.");
    } else {
        // Jika kedua input terisi, lanjutkan dengan menghitung BMI
        let bmi = hitungBMI(beratBadan, tinggiBadan);

    // Hitung BMI
    //let bmi = hitungBMI(beratBadan, tinggiBadan);

    // Tentukan kategori BMI
    let kategori = "";
    let keterangan = "";
    let deskripsi = "";
    let diagnosa = "";
    let rincian = "";

    if (bmi < 18.5) {
        kategori = "Kekurangan berat badan";
        keterangan = "Nilai Anda kurang dari 18.5";
        deskripsi = "Konsultasikan dengan Ahli Gizi atau Dokter: Langkah pertama yang penting adalah berkonsultasi dengan ahli gizi atau dokter. Mereka dapat mengevaluasi kondisi kesehatan Anda dan memberikan saran yang sesuai dengan kebutuhan Anda.";
        diagnosa = "Kurang Gizi";
        rincian = " Gangguan pada sistem pencernaan, gangguan psikologis, atau penyakit kronis tertentu.";
    } else if (bmi < 24.9) {
        kategori = "Normal (ideal)";
        keterangan = "Nilai Anda di antara 18.5 - 24.9";
        deskripsi = "Teruslah menjaga gaya hidup sehat dengan menerapkan pola makan seimbang, berolahraga secara teratur, dan memperhatikan kesehatan mental.";
        diagnosa = "Berat badan bagus";
        rincian = "Meskipun Anda memiliki berat badan normal, pastikan untuk memperhatikan asupan nutrisi Anda. Pilih makanan yang sehat dan bergizi, termasuk buah-buahan, sayuran, protein tanpa lemak, dan sumber karbohidrat kompleks.";
    } else if (bmi < 29.9) {
        kategori = "Kelebihan berat badan";
        keterangan = "Nilai Anda di antara 25.0 - 29.9";
        deskripsi = "Prioritaskan kesehatan Anda dengan melakukan perubahan gaya hidup yang sehat. Fokuskan diri Anda pada upaya untuk menurunkan berat badan secara bertahap dengan cara yang sehat dan berkelanjutan.";
        diagnosa = "Perlu Perhatikan";
        rincian = "Hipertensi (Tekanan Darah Tinggi), Diabetes Tipe 2, Penyakit Jantung, Penyakit Otot dan Sendi, Penyakit Pernapasan";
    } else {
        kategori = "Kegemukan";
        keterangan = "Nilai Anda lebih dari 30.0";
        deskripsi = " Cobalah untuk meningkatkan tingkat aktivitas fisik Anda secara bertahap. Temukan aktivitas fisik yang Anda nikmati, seperti berjalan kaki, bersepeda, berenang, atau yoga. Lakukan aktivitas tersebut secara teratur.  Penting untuk berkonsultasi dengan dokter, ahli gizi, atau spesialis kesehatan lainnya untuk mendapatkan bantuan dan arahan yang sesuai dengan kebutuhan Anda.";
        diagnosa = "Periksa segera";
        rincian = "Diabetes, Hipertensi, Sakit Jantung, Osteoarthritis";
    }

    // Tampilkan hasil BMI dan kategori di dalam elemen HTML
    let resultContainer = document.querySelector(".container-result");
    resultContainer.innerHTML = `
        <h4>Hasil BMI</h4>
        <h1>${bmi.toFixed(2)}</h1>
        <h4>${kategori}</h4>
    `;

    // Tampilkan keterangan di elemen HTML
    let keteranganElement = document.getElementById("keterangan");
    keteranganElement.textContent = keterangan;

    // Tampilkan deskripsi di elemen HTML
    let deskripsiElement = document.getElementById("deskripsi");
    deskripsiElement.textContent = deskripsi;

    // Tampilkan keterangan di elemen HTML
    let diagnosaElement = document.getElementById("ket-diagnosa");
    diagnosaElement.textContent = diagnosa;

    // Tampilkan deskripsi di elemen HTML
    let rincianElement = document.getElementById("hasil-diagnosa");
    rincianElement.textContent = rincian;

    }

}

// Fungsi untuk mereset hasil BMI
function resetHasilBMI() {
    // Tampilkan peringatan sebelum mereset
    let resetConfirmation = confirm("Apakah Anda yakin ingin mereset hasil?");
    if (resetConfirmation) {
        // Reset nilai input
        document.getElementById("berat-badan").value = "";
        document.getElementById("tinggi-badan").value = "";

        // Reset hasil BMI, kategori, dan keterangan
        let resultContainer = document.querySelector(".container-result");
        resultContainer.innerHTML = "Hasil belum ada";

        let keteranganElement = document.getElementById("keterangan");
        keteranganElement.textContent = "Kosong";

        let deskripsiElement = document.getElementById("deskripsi");
        deskripsiElement.textContent = "Belum ada";

        let diagnosaElement = document.getElementById("ket-diagnosa");
        diagnosaElement.textContent = "._";

        let rincianElement = document.getElementById("hasil-diagnosa");
        rincianElement.textContent = "._";
    }
}


// Memanggil fungsi tampilkanHasilBMI saat tombol "Hitung BMI" diklik
document.getElementById("calculate-button").addEventListener("click", tampilkanHasilBMI);

// Memanggil fungsi resetHasilBMI saat tombol "Reset" diklik
document.getElementById("reset").addEventListener("click", resetHasilBMI);