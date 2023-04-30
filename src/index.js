// SimpleLightbox
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import refs from './js/refs';
import { onFormSubmit } from './js/onFormSubmit';
import  onLoadMore  from './js/onLoadMore';

refs.searchForm.addEventListener('submit', onFormSubmit);
refs.paginationBtn.addEventListener('click', onLoadMore);

const options = {   			
    captionsData: 'alt',
    captionDelay: 250	
};

export const lightbox = new SimpleLightbox('.gallery a', options);