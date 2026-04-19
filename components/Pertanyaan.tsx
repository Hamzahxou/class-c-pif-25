import PertanyaanView from "./pertanyaan/pertanyaan-view";

export default function Pertanyaan() {
  const faqs = [
    {
      index: 0,
      question: "Apa itu Cetar?",
      answer:
        "Cetar merupakan sebuah singkatan dari Cerdas, Etis, Tangguh, Amanah, Relevan. Nama ini dipilih bukan cuma karena terdengar keren, tapi sebagai doa agar seluruh anggota kelas C bisa menjadi pribadi yang membanggakan di sekolah.",
    },
    {
      index: 1,
      question: "Apa tujuan dibuatnya website kelas ini?",
      answer:
        "Website ini dibangun sebagai identitas digital bagi Kelas C. Fokus utamanya adalah untuk memperkenalkan profil kelas kepada dunia luar, menampilkan kreativitas anggota, serta menjadi galeri abadi untuk mendokumentasikan momen-momen seru yang kita lalui bersama selama masa studi.",
    },
    {
      index: 2,
      question: "Siapakah Dosen Wali dari Pendidikan Informatika Kelas C?",
      answer:
        "Kelas kami berada di bawah bimbingan Bapak <b>Muhammad Zidni Ilman Nafi'a, M.Pd.</b> Beliau senantiasa memberikan arahan dan dukungan dalam perjalanan akademik kami di Universitas Trunojoyo Madura. Segala koordinasi resmi terkait administrasi kelas dilakukan melalui komandan tingkat kelas untuk diteruskan kepada beliau.",
    },
    {
      index: 3,
      question: "Siapa saja yang menjadi pengurus inti di kelas C?",
      answer: `Kelas kita dipimpin oleh struktur organisasi yang solid:
        <table className="">
          <tr>
            <td>Ketua Kelas</td>  
            <td> : </td>
            <td>Ramadany</td>
          </tr>
          <tr>
            <td>Sekretaris</td>
            <td> : </td>
            <td>Silfaus Silvia</td>
          </tr>
          <tr>
            <td>Bendahara</td>
            <td> : </td>          
            <td>Ria Romadani Putri</td>
          </table>
        `,
    },
    {
      index: 4,
      question: "Apakah ada media sosial resmi selain website ini?",
      answer: `Tentu saja! Selain website, Kelas C juga aktif di Instagram <a href="https://www.instagram.com/classc_pifutm25"><b>@classc_pifutm_2025</b></a>. Jangan lupa follow untuk melihat cuplikan kegiatan harian kita yang lebih santai dan seru dalam format video pendek atau reels.`,
    },
    {
      index: 5,
      question: "Apa Vibe atau kepribadian utama kelas kita?",
      answer:
        "Kami dikenal sebagai kelas yang adaptif dan ekspresif. Website ini adalah bukti bahwa Kelas C tidak hanya sekadar duduk di bangku kuliah, tapi juga mampu berkolaborasi menciptakan sesuatu yang nyata di dunia digital.",
    },
  ];
  return <PertanyaanView faqs={faqs} />;
}
