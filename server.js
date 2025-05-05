const express = require('express');
const path = require('path'); // Modul bawaan Node.js untuk bekerja dengan path file/direktori

// Membuat instance aplikasi Express
const app = express();

// Menentukan port yang akan digunakan server di dalam container Docker
// Port ini HARUS SAMA dengan yang di-EXPOSE di Dockerfile (misalnya 3000)
const port = 3000;

// Membuat path absolut ke folder 'public'
// __dirname adalah variabel Node.js yang berisi path ke direktori tempat file JS ini berada
const publicDirectoryPath = path.join(__dirname, 'public');

// Menggunakan middleware express.static
// Ini memberitahu Express untuk menyajikan file-file (HTML, CSS, JS, gambar)
// yang ada di dalam direktori 'publicDirectoryPath'.
// Jika ada request ke root ('/'), Express akan otomatis mencari 'index.html' di folder ini.
app.use(express.static(publicDirectoryPath));

// Menjalankan server dan mendengarkan koneksi pada port yang ditentukan
app.listen(port, () => {
  // Pesan ini akan muncul di log container Docker saat server berhasil berjalan
  console.log(`Server Node.js (Express) berjalan di port ${port}`);
  console.log(`Menyajikan file statis dari direktori: ${publicDirectoryPath}`);
  console.log(`Ikuti arahan berikut : `);
  console.log(`1. Buka Browser anda `);
  console.log(`2. Copy paste link berikut : localhost:8000`);
});

// (Tidak perlu kode lain untuk kasus sederhana ini)