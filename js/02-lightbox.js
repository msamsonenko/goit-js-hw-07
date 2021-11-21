import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
	const galleryLinkEl = document.createElement("a");
	galleryLinkEl.classList.add("gallery__item");
	galleryLinkEl.href = original;

	const galleryImgEl = document.createElement("img");
	galleryImgEl.classList.add("gallery__image");
	galleryImgEl.alt = description;
	galleryImgEl.src = preview;
	galleryImgEl.title = description;

	galleryLinkEl.appendChild(galleryImgEl);

	return galleryLinkEl;
});

galleryContainer.append(...galleryMarkup);

let gallerySlider = new SimpleLightbox(".gallery a");
gallerySlider.on("show.simplelightbox");

console.log(galleryItems);
