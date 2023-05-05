import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

const list = document.querySelector(".gallery");

const markup = galleryItems
	.map(
		({ preview, original, description }) =>
			`<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"/></a></li>`,
	)
	.join("");

list.insertAdjacentHTML("afterbegin", markup);

// Об'єкт налаштувань для функції бібліотеки "SimpleLightbox".
// Опція captionPosition має значення 'bottom' за замовчуванням.

const options = {
	captionsData: "alt",
	captionDelay: 250,
};

const lightbox = new SimpleLightbox(".gallery a", options);
