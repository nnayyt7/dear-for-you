document.addEventListener('DOMContentLoaded', function() {
  // Auto-play music
  const bgm = document.getElementById('bgm');
  bgm.volume = 0.3;
  bgm.play();

  // Hover effects for images
  document.querySelectorAll('.pixel-border').forEach(img => {
      img.addEventListener('mouseover', () => {
          img.style.transform = 'scale(1.05)';
          img.style.transition = '0.3s';
      });
      img.addEventListener('mouseout', () => {
          img.style.transform = 'scale(1)';
      });
  });
});

// Auto-unmute setelah interaksi pengguna
document.addEventListener('click', function initAudio() {
  const bgm = document.getElementById('bgm');
  bgm.muted = false;
  bgm.play();
  
  // Hapus event listener setelah pertama kali diklik
  document.removeEventListener('click', initAudio);
});