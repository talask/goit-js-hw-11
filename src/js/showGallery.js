// SimpleLightbox
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { lightbox } from "../index";

import refs from './refs';
import Notiflix from 'notiflix';
import PixabayAPI from './PixabayAPI';
import createCards from './createCards';

 // for scroll without button 'Load more...'
import controlPageScroll from './controlPageScroll';

 // for button 'Load more...'
//import controlPage from './controlPage';




export default async function showGallery (value, page, fl) {

    const data = await PixabayAPI(value, page);
            
    if(!data.hits.length) {

        Notiflix.Notify.warning("Sorry, there are no images matching your search query. Please try again.");
        refs.gallery.innerHTML = '';

            // for button 'Load more...'
            //controlPage(0,0);
           
            return;
            
        }      
        
        if(fl) {
           
            refs.gallery.innerHTML = createCards(data.hits);
            Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);

        } else{
        
        refs.gallery.insertAdjacentHTML("beforeend", createCards(data.hits));
    //---------------------------------- 
    // only for button 'Load more...'
            
    //         const { height: cardHeight } = refs.gallery.firstElementChild.getBoundingClientRect();
       
    //             window.scrollBy({
    //             top: cardHeight * 2,
    //             behavior: "smooth",
    //         });

    //----------------------------------
    
        }    
        
        lightbox.refresh();
         
        // for scroll without button 'Load more...'
        controlPageScroll(page, data.totalHits);
        
        // only for button 'Load more...'
        //controlPage(page, data.totalHits);
}



