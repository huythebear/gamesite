// Dữ liệu game (có thể giống script.js)
const games = [
  {
    id: 1,
    title: "No Mercy V1.03a",
    desc: "Game bạo lực + khiêu dâm, cân nhắc khi chơi.",
    image: "images/nomercy.png",
    screenshots: ["images/nomercy1.png","images/nomercy2.png","images/nomercy3.png","images/nomercy4.png"], // thêm ảnh khác
    intro: `
      No Mercy là một trò chơi hành động kết hợp yếu tố bạo lực và người lớn.
      Trong game, bạn sẽ trải qua nhiều màn chơi đầy thử thách, sử dụng vũ khí đa dạng.
      Hãy cân nhắc trước khi chơi vì nội dung khá nhạy cảm.
    `,
    link: "https://drive.google.com/uc?export=download&id=FILE_ID_1"
  }
];

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));
const game = games.find(g => g.id === id);

const container = document.getElementById('detail-container');

if(game){
  container.innerHTML = `
    <h1>${game.title}</h1>
    <img src="${game.image}" alt="${game.title}" class="thumb-detail">
    <div class="intro">${game.intro}</div>
    <div class="screenshots">
      ${game.screenshots.map(img => `<img src="${img}" alt="${game.title}" class="thumb-detail">`).join('')}
    </div>
    <a href="${game.link}" target="_blank" class="btn-download">⬇️ Tải về</a>
  `;
} else {
  container.innerHTML = `<h1>Game không tìm thấy 😢</h1>`;
}
<div class="screenshots">
  ${game.screenshots.map((img,i) => `<img src="${img}" alt="${game.title}" class="thumb-detail clickable" data-index="${i}">`).join('')}
</div>

// Lấy tất cả ảnh screenshot
const clickableImgs = document.querySelectorAll('.clickable');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

clickableImgs.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Click ngoài ảnh cũng đóng
lightbox.addEventListener('click', e => {
  if(e.target === lightbox) lightbox.style.display = 'none';
});
