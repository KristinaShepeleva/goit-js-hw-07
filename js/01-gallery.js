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
  `,
  {
      onShow: (instance) => {
      document.addEventListener('keydown', onEscBtn);
      },
      onClose: (instance) => {
        document.removeEventListener('keydown', onEscBtn);
      }
    });
  instance.show();

  function onEscBtn(ev) {
  if (ev.code === "Escape") {
    instance.close();
  } 
}
}




//onShow: (instance) => {
	// Close when hitting escape.
	//document.onkeydown = function(evt) {
	//	evt = evt || window.event;
	//	var isEscape = false;
	//	if ( "key" in evt ) {
	//		isEscape = ( evt.key === "Escape" || evt.key === "Esc" );
	//	} else {
	//		isEscape = ( evt.keyCode === 27 );
	//	}
	//	if ( isEscape ) {
	//		instance.close();
	//	}
	//};
//},











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


