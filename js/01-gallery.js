import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const markup = createGallaryMarkup(galleryItems);

galleryRef.innerHTML = markup;


function createGallaryMarkup(image) {
    return image.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
        `
    }).join('');
};

galleryRef.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
     return
    };
    
    console.log(event.target.dataset.source);
})