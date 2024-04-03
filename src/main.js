import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getImage } from './js/pixabay-api';
import { imageTemplate } from './js/render-functions';



const searchForm = document.querySelector(".search-form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const btnLoadMore = document.querySelector(".load-more-btn");

const galleryBox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});

let inputValue;
let currentPage = 1;
let maxPage = 0;
const pageSize = 15;

searchForm.addEventListener("submit", handleSubmit);

async function handleSubmit(event){
    event.preventDefault();

    inputValue = searchForm.elements.query.value.trim();

    if(!inputValue) {
        return iziToast.error({
            title: 'Error',
            message: "Please fill in the search field!",
            position: 'topRight',
        });
    }

    hideLoadMore();
    gallery.innerHTML = "";
    currentPage = 1;

    try {
        showLoader();
        const data = await getImage(inputValue, currentPage);
        maxPage = Math.ceil(data.totalHits / pageSize);

        const markup = imageTemplate(data.hits);
        gallery.insertAdjacentHTML('beforeend', markup);

        galleryBox.refresh();

        if(data.hits.length === 0){
            iziToast.info({
                title: 'Info',
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: 'topRight',
            });
            return;
        }
        checkBtnStatus();
    } catch (error){
        iziToast.error({
            title: 'Error',
            message: "Sorry, there was an error processing your request. Please try again later!",
            position: 'topRight',
        });
    } finally {
        hideLoader();
        searchForm.reset();
    }
}

btnLoadMore.addEventListener("click", onLoadMoreClick);

async function onLoadMoreClick() {
    currentPage += 1;
    hideLoadMore();
    showLoader();
    try {
        const data = await getImage(inputValue, currentPage)
        const markup = imageTemplate(data.hits);
        gallery.insertAdjacentHTML('beforeend', markup);

        galleryBox.refresh();

    } catch (error){
        iziToast.error({
            title: 'Error',
            message: "Sorry, there was an error processing your request. Please try again later!",
            position: 'topRight',
        });
    }
    scrollToNextImages();
    hideLoader();
    checkBtnStatus();
}


function checkBtnStatus() {
    if (currentPage >= maxPage){
        hideLoadMore();
        iziToast.info({
            title: 'Info',
            message: "We're sorry, but you've reached the end of search results.",
            position: 'topRight',
        });
    } else {
        showLoadMore();
    }
}

function showLoader() {
    loader.classList.remove('hidden');
}
  
function hideLoader() {
    loader.classList.add('hidden');
}

function showLoadMore() {
    btnLoadMore.classList.remove('hidden');
}

function hideLoadMore() {
    btnLoadMore.classList.add('hidden');
}

function scrollToNextImages() {
    const height = gallery.firstChild.getBoundingClientRect().height;
  
    window.scrollBy({
      top: height * 2,
      behavior: 'smooth',
    });
  }