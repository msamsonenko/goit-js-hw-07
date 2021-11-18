import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const instance = basicLightbox.create(`
  <div class="modal">
      <img id="original-image">
  </div>
`);

galleryContainer.addEventListener("click", onImageClick);

function onImageClick(event) {
	event.preventDefault();
	if (event.target.nodeName !== "IMG") {
		return;
	}
	instance.show();

	const modalImg = document.querySelector("#original-image");
	modalImg.src = event.target.dataset.source;
	modalImg.alt = event.target.alt;

	addListenerOnModal();
}

function addListenerOnModal() {
	const modalWindow = document.querySelector(".modal");
	modalWindow.addEventListener("click", onModalWindowClick);
	window.addEventListener("keydown", onEscapeBtnPress);
}

const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
	const galleryItemEl = document.createElement("div");
	galleryItemEl.classList.add("gallery__item");

	const galleryLinkEl = document.createElement("a");
	galleryLinkEl.classList.add("gallery__link");
	galleryLinkEl.href = original;

	const galleryImgEl = document.createElement("img");
	galleryImgEl.classList.add("gallery__image");
	galleryImgEl.alt = description;
	galleryImgEl.src = preview;
	galleryImgEl.dataset.source = original;

	galleryLinkEl.appendChild(galleryImgEl);
	galleryItemEl.appendChild(galleryLinkEl);

	return galleryItemEl;
});

galleryContainer.append(...galleryMarkup);

function onModalWindowClick() {
	window.removeEventListener("keydown", onEscapeBtnPress);
	instance.close();
}

function onEscapeBtnPress(event) {
	if (event.code !== "Escape") {
		return;
	}
	window.removeEventListener("keydown", onEscapeBtnPress);
	instance.close();
}
console.log(galleryItems);
