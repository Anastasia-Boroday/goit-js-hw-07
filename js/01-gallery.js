import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryRef = document.querySelector('.gallery');
const imgsBlock = createImageBlock(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', imgsBlock);
galleryRef.addEventListener('click', onClickOpenModal);


function createImageBlock(img) {
    return img.map(({ preview, original, description }) => 
    `<div class="gallery__item">
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
    ).join('');
};

function onClickOpenModal(evt) {
    evt.preventDefault();

    window.addEventListener('keydown', onCloseModal);

     if (evt.target.tagName!=='IMG') {
        return 
    }

    const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${evt.target.dataset.source}"  alt="${evt.target.alt}" width="800" height="600">
    </div>  
`)
    instance.show()
    function onCloseModal(evt) {
    
         if (evt.code ==='Escape') {
             instance.close(() => console.log('lightbox not visible anymore'));
             window.removeEventListener('keydown', onCloseModal);
         }        
}

}


