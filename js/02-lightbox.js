import { galleryItems } from "./gallery-items.js";
// Change code below this line
//get access to gallery container tag
const galleryContainer = document.querySelector(".gallery");
//create initial picture gallery murkup
const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
	const galleryLinkEl = document.createElement("a");
	galleryLinkEl.classList.add("gallery__item");
	galleryLinkEl.href = original;

	const galleryImgEl = document.createElement("img");
	galleryImgEl.classList.add("gallery__image");
	galleryImgEl.loading = "lazy";
	galleryImgEl.alt = description;
	galleryImgEl.dataset.src = preview;
	galleryImgEl.title = description;

	galleryLinkEl.appendChild(galleryImgEl);

	return galleryLinkEl;
});
//append gallery items murkup to gallery container and shuffles images on every page load
galleryContainer.append(...galleryMarkup.sort(() => Math.random() - 0.5));
//creates simpleLightBox slider for original image sizes preview
let gallerySlider = new SimpleLightbox(".gallery a");
gallerySlider.on("show.simplelightbox");
//browser feature detection for lazy images load
if ("loading" in HTMLImageElement.prototype) {
	addSrcAttrToImg();
} else {
	addLaziLoadingScript();
}
//sets img element src attribute if feature is supported by browser
function addSrcAttrToImg() {
	const images = document.querySelectorAll('img[loading="lazy"]');
	images.forEach((image) => {
		image.src = image.dataset.src;
	});
}
//appends script to the bottom of the page if feature is not supported by browser
function addLaziLoadingScript() {
	const script = document.createElement("script");
	script.src =
		"https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
	script.integrity =
		"sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==";
	script.crossorigin = "anonymous";
	script.referrerpolicy = "no-referrer";

	galleryContainer.appendChild(script);
}

console.log(galleryItems);
