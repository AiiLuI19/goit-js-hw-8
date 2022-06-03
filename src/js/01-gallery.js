
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line



console.log(galleryItems);
// Variables
const galleryContainer = document.querySelector(".gallery");
const picturesMarkup = creatGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', picturesMarkup);

function creatGalleryMarkup(items) {
return items.map(({ preview, original, description }) => {
        return `
    <a class="gallery__item" href="${original}">
        <img 
        class="gallery__image" 
        src="${preview}" 
        alt="${description}"/>
    </a>`;
}).join('');  
}

let gallery = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: "250"});
console.log(gallery);


//1.Добавь библиотеку SimpleLightbox как зависимость проекта используя npm (ссылка на CDN из твоей прошлой работы больше не нужна).
//2. Используй свой JavaScript код из предыдущей домашней работы, но выполни рефакторинг с учетом того, что библиотека была установлена через npm (синтаксис import/export).
// 3.Для того чтобы подключить CSS код библиотеки в проект, необходимо добавить еще один импорт, кроме того который описан в документации.

// Описан в документации

// Дополнительный импорт стилей
