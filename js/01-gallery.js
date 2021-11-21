import { galleryItems } from "./gallery-items.js";
// Change code below this line

//get access to gallery container tag
const galleryContainer = document.querySelector(".gallery");
//create modal window markup for image original size preview
const instance = basicLightbox.create(`
  <div class="modal">
      <img id="original-image">
  </div>
`);
//add event listener onto gallery container
galleryContainer.addEventListener("click", onImageClick);
//on image click, display modal window with image original size
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
//add event listener on modal window
function addListenerOnModal() {
	const modalWindow = document.querySelector(".modal");
	modalWindow.addEventListener("click", onModalWindowClick);
	window.addEventListener("keydown", onEscapeBtnPress);
}
//create initial picture gallery murkup
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
//append gallery items murkup to gallery container
galleryContainer.append(...galleryMarkup);
//closes modal window on image click and Escape btn press and removes event listener from windows
function onModalWindowClick() {
	window.removeEventListener("keydown", onEscapeBtnPress);
	instance.close();
}
//checks if Escape btn is pressed and if yes closes modal window and removes event listener from it
function onEscapeBtnPress(event) {
	if (event.code !== "Escape") {
		return;
	}
	window.removeEventListener("keydown", onEscapeBtnPress);
	instance.close();
}
console.log(galleryItems);
