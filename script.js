const tombolMenu = document.getElementById('tombol-menu');
const menu = document.getElementById('menu');
const tombolTema = document.getElementById('tombol-tema');
const tombolAtas = document.getElementById('ke-atas');

// Membuka dan menutup navigasi pada layar mobile.
tombolMenu.addEventListener('click', () => {
  const sedangTerbuka = menu.classList.toggle('aktif');
  tombolMenu.setAttribute('aria-expanded', sedangTerbuka);
  tombolMenu.setAttribute('aria-label', sedangTerbuka ? 'Tutup menu' : 'Buka menu');
});

document.querySelectorAll('.menu a').forEach((tautan) => {
  tautan.addEventListener('click', () => {
    menu.classList.remove('aktif');
    tombolMenu.setAttribute('aria-expanded', 'false');
  });
});

// Mengganti tema terang dan gelap.
tombolTema.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  tombolTema.textContent = document.body.classList.contains('dark-mode') ? '☾' : '☼';
});

// Tombol kembali ke bagian paling atas setelah halaman digulir.
window.addEventListener('scroll', () => {
  tombolAtas.style.display = window.scrollY > 450 ? 'block' : '';
});
tombolAtas.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
