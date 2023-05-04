// SimpleLightbox
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import refs from './js/refs';
import { onFormSubmit } from './js/onFormSubmit';
import { throttle } from "lodash";


// only for button 'Load more...'
//import  onLoadMore  from './js/onLoadMore';


refs.searchForm.addEventListener('submit', onFormSubmit);


//  only for button 'Load more...'
//refs.paginationBtn.addEventListener('click', onLoadMore);



const options = {   			
    captionsData: 'alt',
    captionDelay: 250	
};

export const lightbox = new SimpleLightbox('.gallery a', options);