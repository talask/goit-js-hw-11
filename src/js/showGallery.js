// SimpleLightbox
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { lightbox } from "../index";

import refs from './refs';
import Notiflix from 'notiflix';
import PixabayAPI from './PixabayAPI';
import createCards from './createCards';
import { observer } from "./onScrollObserver";
import controlPageScroll from "./controlPageScroll";
 
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
           
            // При фіксированій шапці в сторінці і повторному запиті користувача  observer генерує завантаження 2-ї сторінки. Для уникнення завантаження 2-ї сторінки переміщую скролл 
            window.scrollTo({
                top: 0,
            });

            observer.observe(refs.targetEl);
         
            
            controlPageScroll(page, data.totalHits);
            
        } else{
        
            refs.gallery.insertAdjacentHTML("beforeend", createCards(data.hits));
            controlPageScroll(page, data.totalHits);

    //---------------------------------- 
    // only for button 'Load more...'
            
            // const { height: cardHeight } = refs.gallery.firstElementChild.getBoundingClientRect();
       
            //     window.scrollBy({
            //     top: cardHeight * 2,
            //     behavior: "smooth",
            // });

    //----------------------------------
    
        }    
        
        lightbox.refresh();
        
        // only for button 'Load more...'
        //controlPage(page, data.totalHits);
}



