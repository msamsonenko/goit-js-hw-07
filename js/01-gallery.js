import { galleryItems } from './gallery-items.js';
// Change code below this line

{/* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div> */}

const galleryEl = document.querySelector('.gallery');

galleryEl.addEventListener('click', onImageClick);

function onImageClick (event){
    if(event.target.nodeName !== 'IMAGE'){
        return;
    }
}

const displayGallery = function (images){
    images.map(({preview, original, description}) =>{
       
        const galleryItemEl = document.createElement('div');
        galleryItemEl.classList.add('gallery__item');

        const galleryLinkEl = document.createElement('a');
        galleryLinkEl.classList.add('gallery__link');
        galleryLinkEl.setAttribute('href', original);

        const galleryImgEl =  document.createElement('img');
        galleryImgEl.classList.add('gallery__image');
        galleryImgEl.setAttribute('alt', description);
        galleryImgEl.setAttribute('src', preview);
        galleryImgEl.setAttribute('data-source', original);

        galleryLinkEl.appendChild(galleryImgEl);
        galleryItemEl.appendChild(galleryLinkEl);
        galleryEl.appendChild(galleryItemEl);
    })
}

displayGallery(galleryItems);

console.log(galleryItems);
