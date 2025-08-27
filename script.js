const games = [
  { id:1, title:"No Mercy V1.03a", desc:"Game bạo lực + khiêu dâm.", image:"images/nomercy.jpg", link:"https://drive.google.com/uc?export=download&id=FILE_ID_1" },
  { id:2, title:"Vampire Survivors Việt Hóa", desc:"Phiên bản Việt hóa của Vampire Survivors.", image:"images/vampire.jpg", link:"https://drive.google.com/uc?export=download&id=FILE_ID_2" }
];

const grid = document.getElementById('grid');

function render(list){
  grid.innerHTML = list.map(g => `
    <article class="card">
      <a href="detail.html?id=${g.id}" target="_blank" style="text-decoration:none;color:inherit;">
        <img class="thumb" src="${g.image}" alt="${g.title}">
        <h3 class="title">${g.title}</h3>
        <p class="desc">${g.desc}</p>
      </a>
    </article>
  `).join('');
}

render(games);

document.getElementById('search').addEventListener('input', e=>{
  const q = e.target.value.toLowerCase();
  const f = games.filter(g=> (g.title+g.desc).toLowerCase().includes(q));
  render(f);
});
