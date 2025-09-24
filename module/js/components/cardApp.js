
// esto es un componente funcional
const cardMeme = (meme) => {

    return `<div class="card h-100 card-meme">
      <img src="${meme.url} " class="card-img-top" alt="${meme.name}">
      <div class="card-body">
        <h5 class="card-title">${meme.name}</h5>
      </div>
    </div>`;
};

export default cardMeme;
