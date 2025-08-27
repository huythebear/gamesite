const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));
const container = document.getElementById('detail-container');

if(!isNaN(id)){
  const game = games.find(g => g.id === id);

  if(game){
    container.innerHTML = `
      <h1>${game.title}</h1>

      <!-- Tổng quan -->
      <div class="overview">
        <p><strong>Tên game:</strong> No Mercy (phiên bản phổ biến V1.03a)</p>
        <p><strong>Thể loại:</strong> Hành động, bạo lực, khiêu dâm, RPG pha chút chiến đấu</p>
        <p><strong>Đối tượng:</strong> Người trưởng thành (18+), cân nhắc trước khi chơi vì nội dung khá nhạy cảm</p>
        <p><strong>Đồ họa:</strong> 2D/3D pha trộn, có các cảnh chiến đấu máu me và tương tác khiêu dâm</p>
      </div>

      <!-- Ảnh chính -->
      <img src="${game.image}" alt="${game.title}" class="thumb-detail clickable">

      <!-- Cốt truyện -->
      <div class="section">
        <h2>Cốt truyện</h2>
        <p>Game xoay quanh một nhân vật chính (thường là nam) bị cuốn vào thế giới đen tối, nơi anh phải chiến đấu, sinh tồn, và tương tác với các nhân vật khác. Cốt truyện thường khá tối tăm, đậm chất bạo lực và dục vọng, vừa hành động vừa khai thác các mối quan hệ nhạy cảm.</p>
      </div>

      <!-- Gameplay -->
      <div class="section">
        <h2>Gameplay</h2>
        <p>
          - Chiến đấu: Dùng kỹ năng, vũ khí để hạ kẻ thù.<br>
          - Tương tác: Có các tình huống “nguy hiểm” và khiêu dâm, người chơi quyết định hướng phát triển quan hệ với các nhân vật.<br>
          - Mục tiêu: Sinh tồn, hoàn thành nhiệm vụ, khám phá cốt truyện, mở khóa cảnh 18+.
        </p>
      </div>

      <!-- Điểm nổi bật -->
      <div class="section">
        <h2>Điểm nổi bật</h2>
        <p>
          - Thử thách cao: Không chỉ chiến đấu mà còn cần lựa chọn khôn ngoan.<br>
          - Tương tác sâu: Cảnh 18+ được lồng ghép trong cốt truyện, không phải chỉ để “câu view”.<br>
          - Phong cách riêng: Game mang cảm giác “nguy hiểm nhưng lôi cuốn”, rất phù hợp với những ai muốn trải nghiệm mạnh mẽ.
        </p>
      </div>

      <!-- Cảnh báo -->
      <div class="warning">
        💡 Lưu ý: Đây là game cực kỳ nhạy cảm, có thể gây sốc với người mới, nên chơi cẩn thận, không chơi nơi công cộng.
      </div>

      <!-- Screenshots -->
      <div class="screenshots">
        ${game.screenshots.map(img => `<img src="${img}" alt="${game.title}" class="thumb-detail clickable">`).join('')}
      </div>

      <!-- Nút tải về -->
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
