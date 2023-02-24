import { galleryItems } from './gallery-items.js';


// Change code below this line

const galleryRef = document.querySelector('.gallery');
const markup = createGallaryMarkup(galleryItems);
galleryRef.innerHTML = markup;

function createGallaryMarkup(image) {
    return image.map(({ preview, original, description }) => {
        return `
       <li><a class="gallery__item" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}"/>
       </a></li>
        `
    }).join('');
};

var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

//galleryRef.addEventListener('click', (event) => {
 //   event.preventDefault();

 //   if (event.target.nodeName !== 'IMG') {
//     return
//    };
    
//})
