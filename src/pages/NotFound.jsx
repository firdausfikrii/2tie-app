import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="text-center">
        {/* Angka 404 Besar */}
        <h1 className="text-9xl font-extrabold text-green-600 tracking-widest">
          404
        </h1>
        
        {/* Latar belakang teks dekoratif (opsional) */}
        <div className="bg-green-600 px-2 text-sm rounded rotate-12 absolute shadow-lg text-white">
          Page Not Found
        </div>

        {/* Judul dan Deskripsi */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-8">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-gray-500 mt-4 mb-8 max-w-md mx-auto text-lg">
          Maaf, halaman yang Anda cari mungkin telah dihapus, diubah namanya, atau sementara tidak tersedia.
        </p>

        {/* Tombol Kembali ke Beranda */}
        <a
          href="/"
          className="inline-block px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300 shadow-md hover:shadow-lg"
        >
          Kembali ke Beranda
        </a>
      </div>
    </div>
  );
}