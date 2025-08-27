const games = [
  { id:1,
    title:"No Mercy V1.03a", 
    desc:"Game bạo lực + khiêu dâm.", 
    image:"images/nomercy.png", 
    link:"https://drive.google.com/uc?export=download&id=FILE_ID_1",
    views: 0}
];

const grid = document.getElementById('grid');

function render(list){
  grid.innerHTML = list.map(g => `
    <article class="card">
      <a href="detail.html?id=${g.id}" target="_blank" style="text-decoration:none;color:inherit;position:relative;display:block;" onclick="incrementView(${g.id})">
        <img class="thumb" src="${g.image}" alt="${g.title}">
        <span class="views-badge" id="views-${g.id}">👁️ ${g.views}</span>
        <h3 class="title">${g.title}</h3>
        <p class="desc">${g.desc}</p>
      </a>
    </article>
  `).join('');
}

function incrementView(id){
  const game = games.find(g => g.id === id);
  if(game){
    game.views += 1;
    localStorage.setItem('views_' + id, game.views); // lưu tạm trên trình duyệt
    const badge = document.getElementById('views-' + id);
    if(badge) badge.textContent = `👁️ ${game.views}`;
  }
}

render(games);

document.getElementById('search').addEventListener('input', e=>{
  const q = e.target.value.toLowerCase();
  const f = games.filter(g=> (g.title+g.desc).toLowerCase().includes(q));
  render(f);
});
games.forEach(g => {
  const stored = localStorage.getItem('views_' + g.id);
  if(stored) g.views = parseInt(stored);
}

);
