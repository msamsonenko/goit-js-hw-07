import { galleryItems } from "./gallery-items.js";
// Change code below this line

{
  /* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div> */
}

const galleryContainer = document.querySelector(".gallery");

galleryContainer.addEventListener("click", onImageClick);

function onImageClick(event) {
  if (event.target.nodeName !== "IMAGE") {
    return;
  }
}

const markup = galleryItems.map(({ preview, original, description }) => {
  const galleryItemEl = document.createElement("div");
  galleryItemEl.classList.add("gallery__item");
  console.log(galleryItemEl);

  const galleryLinkEl = document.createElement("a");
  galleryLinkEl.classList.add("gallery__link");
  galleryLinkEl.href = original;
  console.log(galleryLinkEl);

  const galleryImgEl = document.createElement("img");
  galleryImgEl.classList.add("gallery__image");
  galleryImgEl.alt = description;
  galleryImgEl.src = preview;
  galleryImgEl.dataset.source = original;
  console.log(galleryImgEl);

  galleryLinkEl.appendChild(galleryImgEl);
  galleryItemEl.appendChild(galleryLinkEl);

  return galleryItemEl;
});

galleryContainer.append(...markup);

console.log(galleryItems);
