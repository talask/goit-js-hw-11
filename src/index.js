// SimpleLightbox
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import refs from './js/refs';
import { onFormSubmit } from './js/onFormSubmit';
import { throttle } from "lodash";

// for scroll without button 'Load more...'
import { onScrollListener } from "./js/onScrollListener";

// only for button 'Load more...'
//import  onLoadMore  from './js/onLoadMore';


refs.searchForm.addEventListener('submit', onFormSubmit);

// for scroll without button 'Load more...'
window.addEventListener('scroll',throttle(onScrollListener, 500));

//  only for button 'Load more...'
//refs.paginationBtn.addEventListener('click', onLoadMore);



const options = {   			
    captionsData: 'alt',
    captionDelay: 250	
};

export const lightbox = new SimpleLightbox('.gallery a', options);