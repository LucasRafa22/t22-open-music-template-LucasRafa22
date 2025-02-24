import { applyInputRangeStyle } from "./inputRange.js"
import { albumList } from "./albumsDatabase.js"

function routine(){
    return applyInputRangeStyle()
}

console.log(routine())

function createAlbumCard(album) {
    const card = document.createElement('div');
    card.classList.add('album-card');
  
    const albumImage = document.createElement('img');
    albumImage.src = album.img;
  
    const albumTitle = document.createElement('h3');
    albumTitle.textContent = album.title;

    const albumDiv = document.createElement('div')
    albumDiv.classList.add('album-card__div')
  
    const albumBand = document.createElement('p');
    albumBand.textContent =  album.band;

    const albumGenre = document.createElement('p');
    albumGenre.textContent = album.genre;

    const albumDiv2 = document.createElement('div')
    albumDiv2.classList.add('album-card__div2')
  
    const albumPrice = document.createElement('h4');
    const priceWithComma = album.price.replace('.', ',');
    albumPrice.textContent = `R$ ${priceWithComma}`;

    const albumButton = document.createElement('button');
    albumButton.textContent = 'Comprar';
  
    card.appendChild(albumImage);
    card.appendChild(albumTitle)
    albumDiv.appendChild(albumBand);
    albumDiv.appendChild(albumGenre);
    card.appendChild(albumDiv);
    albumDiv2.appendChild(albumPrice);
    albumDiv2.appendChild(albumButton);
    card.appendChild(albumDiv2);
  
    return card;
  }
  
  function displayAlbumCards() {
    const albumContainer = document.getElementById('content-albuns-div');
  
    albumList.forEach((album) => {
      const card = createAlbumCard(album);
      albumContainer.appendChild(card);
    });
  }

  document.addEventListener('DOMContentLoaded', displayAlbumCards);