import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

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

const markup = createGallaryMarkup(galleryItems);
galleryRef.innerHTML = markup;

galleryRef.addEventListener('click', onImageClick);

function onImageClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return
  }

  const instance = basicLightbox.create(`
    <img src="${ event.target.dataset.source }" width="800" height="600">
  `);
  instance.show();

  //onShow: (instance) => { once: true };
  //onClose: (instance) => { removeListener };

  galleryRef.addEventListener('keydown', (ev) => {
    if (ev.code === "Escape") {
      instance.close();
    }
  })

}




//galleryRef.addEventListener('click', (event) => {
//  event.preventDefault();

//  if (event.target.nodeName !== 'IMG') {
//    return
//  };
    
//  const currentImg = event.target.dataset.source;
//  console.log(currentImg);

//  const instance = basicLightbox.create(`
//    <img src="${ currentImg }" width="800" height="600">
//`);

//  instance.show(); 
  
//});


