// Danh sách game, có thể add thêm thoải mái
const games = [
  { 
    id:1, 
    title:"No Mercy V1.03a", 
    image:"images/nomercy.png",
    screenshots:["images/nomercy1.png","images/nomercy2.png","images/nomercy3.png","images/nomercy4.png","images/nomercy5.png"],
    overview: {
      name: "No Mercy (V1.03a)",
      genre: "Bạo lực, khiêu dâm",
      audience: "Người trưởng thành (18+), cân nhắc trước khi chơi",
      graphics: "2D/3D pha trộn"
    },
    story: "Cốt truyện game No Mercy cực kì gây tranh cãi, người chơi nhập vai nam chính tương tác với thế giới bạo lực và nhạy cảm.",
    gameplay: "- Tương tác & sinh tồn.\n- Hoàn thành nhiệm vụ.\n- Khám phá cốt truyện, mở khóa cảnh 18+.",
    highlights: "- Tương tác sâu, cảnh 18+ lồng ghép.\n- Phong cách riêng, nguy hiểm nhưng lôi cuốn.",
    warning: "💡 Lưu ý: Game cực kỳ nhạy cảm, không chơi nơi công cộng.",
    link:"https://drive.google.com/uc?export=download&id=FILE_ID_1"
  },
  { 
    id:2, 
    title:"Dark Quest V2.0", 
    image:"images/darkquest.png",
    screenshots:["images/darkquest1.png","images/darkquest2.png"],
    overview: {
      name: "Dark Quest V2.0",
      genre: "Phiêu lưu, RPG, bạo lực",
      audience: "Người trưởng thành 18+",
      graphics: "3D tối tăm, nhiều cảnh chiến đấu máu me"
    },
    story: "Nhân vật chính khám phá thế giới đen tối, sinh tồn và chiến đấu với kẻ thù nguy hiểm.",
    gameplay: "- Chiến đấu bằng vũ khí & phép thuật.\n- Khám phá bản đồ, mở khóa nhiệm vụ.",
    highlights: "- Thế giới rộng lớn, đầy thử thách.\n- Tương tác sâu với NPC, lựa chọn ảnh hưởng cốt truyện.",
    warning: "💡 Lưu ý: Nội dung game cực kỳ bạo lực, không dành cho người yếu tim.",
    link:"https://drive.google.com/uc?export=download&id=FILE_ID_2"
  }
];

// Lấy ID game từ URL
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));
const container = document.getElementById('detail-container');

if(isNaN(id)){
  container.innerHTML = `<h1>ID game không hợp lệ 😢</h1>`;
} else {
  const game = games.find(g => g.id === id);

  if(game){
    container.innerHTML = `
      <h1>${game.title}</h1>

      <!-- Tổng quan -->
      <div class="overview">
        <p><strong>Tên game:</strong> ${game.overview.name}</p>
        <p><strong>Thể loại:</strong> ${game.overview.genre}</p>
        <p><strong>Đối tượng:</strong> ${game.overview.audience}</p>
        <p><strong>Đồ họa:</strong> ${game.overview.graphics}</p>
      </div>

      <!-- Ảnh chính -->
      <img src="${game.image}" alt="${game.title}" class="thumb-detail clickable">

      <!-- Cốt truyện -->
      <div class="section">
        <h2>Cốt truyện</h2>
        <p>${game.story}</p>
      </div>

      <!-- Gameplay -->
      <div class="section">
        <h2>Gameplay</h2>
        <p>${game.gameplay.replace(/\n/g,'<br>')}</p>
      </div>

      <!-- Điểm nổi bật -->
      <div class="section">
        <h2>Điểm nổi bật</h2>
        <p>${game.highlights.replace(/\n/g,'<br>')}</p>
      </div>

      <!-- Cảnh báo -->
      <div class="warning">${game.warning}</div>

      <!-- Screenshots -->
      <div class="screenshots">
        ${game.screenshots.map(img=>`<img src="${img}" alt="${game.title}" class="thumb-detail clickable">`).join('')}
      </div>

      <!-- Nút tải về -->
      <a href="${game.link}" target="_blank" class="btn-download">⬇️ Tải về</a>
    `;

    // Lightbox JS
    const clickableImgs = container.querySelectorAll('.clickable');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const closeBtn = lightbox.querySelector('.close');

    clickableImgs.forEach(img => {
      img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
      });
      img.onerror = () => img.src='images/placeholder.png';
    });

    closeBtn.addEventListener('click', () => lightbox.style.display = 'none');
    lightbox.addEventListener('click', e => { if(e.target === lightbox) lightbox.style.display = 'none'; });

  } else {
    container.innerHTML = `<h1>Game không tìm thấy 😢</h1>`;
  }
}
