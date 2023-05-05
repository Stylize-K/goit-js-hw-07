import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

const list = document.querySelector(".gallery");

const markup = galleryItems
	.map(
		({ preview, original, description }) =>
			`<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`,
	)
	.join("");

list.insertAdjacentHTML("afterbegin", markup);

// Створення слухача кліка по IMG

list.addEventListener("click", onClickHandler);

function onClickHandler(event) {
	event.preventDefault();
	if (event.target.nodeName !== "IMG") {
		return;
	}

	// Об'єкт налаштувань для функції .create() з бібліотеки "basicLightbox". У ньому прописуємо додавання/видалення слухача клавіші Esc при відкритті/закритті модального вікна відповідно.

	const options = {
		onShow: instance => {
			window.addEventListener("keydown", closeByEsc);
		},
		onClose: instance => {
			window.removeEventListener("keydown", closeByEsc);
		},
	};

	// Створюємо модальне вікно та відкриваємо його.

	const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`, options);

	instance.show();

	// Функція закриття модального вікна клішею Esc

	function closeByEsc({ code }) {
		if (code === "Escape") {
			instance.close();
		}
	}
}
