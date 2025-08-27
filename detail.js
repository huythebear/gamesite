
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));
const container = document.getElementById('detail-container');

if(!isNaN(id)){
  const game = games.find(g => g.id === id);

  if(game){
    container.innerHTML = `
      <h1>${game.title}</h1>
      <img src="${game.image}" alt="${game.title}" class="thumb-detail clickable">
      <div class="intro">${game.intro}</div>
      <div class="screenshots">
        ${game.screenshots.map(img => `<img src="${img}" alt="${game.title}" class="thumb-detail clickable">`).join('')}
      </div>
      <a href="${game.link}" target="_blank" class="btn-download">⬇️ Tải về</a>
    `;

    // Lightbox JS
    const clickableImgs = container.querySelectorAll('.clickable'); // chỉ lấy ảnh trong container
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const closeBtn = lightbox.querySelector('.close');

    clickableImgs.forEach(img => {
      // Mở lightbox khi click
      img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
      });
      // Nếu ảnh lỗi, dùng placeholder sexy
      img.onerror = () => img.src = 'images/placeholder.png';
    });

    // Đóng lightbox
    closeBtn.addEventListener('click', () => lightbox.style.display = 'none');
    lightbox.addEventListener('click', e => { if(e.target === lightbox) lightbox.style.display = 'none'; });

  } else {
    container.innerHTML = `<h1>Game không tìm thấy 😢</h1>`;
  }
}else{
  container.innerHTML = `<h1>ID game không hợp lệ 😢</h1>`;
}
