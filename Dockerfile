# 1. Pilih base image Node.js
FROM node:18-alpine
# 2. Tentukan direktori kerja di dalam container
WORKDIR /app
# 3. Salin file package.json (dan package-lock.json jika ada)
#    Ini penting untuk caching Docker, agar 'npm install' hanya berjalan jika dependensi berubah
COPY package*.json ./
# 4. Install dependensi
RUN npm install
# 5. Salin sisa kode aplikasi ke direktori kerja di container
COPY . .
# 6. Ekspos port yang digunakan server Node.js di dalam container
EXPOSE 3000
# 7. Perintah untuk menjalankan aplikasi saat container dimulai
CMD [ "node", "server.js" ]