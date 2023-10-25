import './sass/main.scss';
import { Viewer } from '@photo-sphere-viewer/core';
import logoImg from './assets/logo.png';
import telegramImg from './assets/telegram.png';
import whatsappImg from './assets/whatsapp.png';
import close from './assets/close.png';
import downloadImg from './assets/download.png';
import photo1 from './assets/1.jpg';
import photo2 from './assets/2.jpg';
import photo3 from './assets/3.jpg';
import photo4 from './assets/4.jpg';
import loading from './assets/loading.jpg';

const logo = document.getElementById("logo");
logo.src = logoImg;

const whatsapp = document.getElementById("whatsapp");
whatsapp.src = whatsappImg;

const whatsapp2 = document.getElementById("whatsapp2");
whatsapp2.src = whatsappImg;

const telegram = document.getElementById("telegram");
telegram.src = telegramImg;

const telegram2 = document.getElementById("telegram2");
telegram2.src = telegramImg;

const download = document.getElementById("download");
download.src = downloadImg;

const closeView = document.getElementById("closeIcon");
closeView.src = close;

const brochureClose = document.getElementById("brochureClose");
brochureClose.src = close;

const brochure = document.getElementById("brochure");
const main_brochure = document.getElementById("main_brochure");

main_brochure.addEventListener('click', () => {
  brochure.classList.add("active");
});

brochureClose.addEventListener('click', () => {
  brochure.classList.remove("active");
});

const view = document.getElementById("view");
const viewClose = document.getElementById("closeIcon");
const pins = document.querySelectorAll(".main__pin");
const viewText = document.querySelector('.view__head-text');
const viewCategory = document.querySelector('.view__head-category');

const viewer = new Viewer({
  container: document.querySelector('#viewer'),
  panorama: loading,
});

pins.forEach((item) => {
  item.addEventListener('click', (e) => {
    viewText.textContent = e.target.id;
    viewCategory.textContent = e.target.dataset.category;

    if (e.target.id === "apartments") {
      viewer.setPanorama(photo1);
    } else if (e.target.id === "mansions") {
      viewer.setPanorama(photo4);
    } else if (e.target.id === "park") {
      viewer.setPanorama(photo2);
    } else if (e.target.id === "road") {
      viewer.setPanorama(photo3);
    };

    view.classList.add("active");
  });
});

viewClose.addEventListener('click', () => {
  view.classList.remove("active");
  viewer.setPanorama(loading);
});