// SimpleLightbox
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { lightbox } from "../index";

import Notiflix from 'notiflix';
import PixabayAPI from './PixabayAPI';
import createCards from './createCards';
import controlPage from './controlPage';
import refs from './refs';
export default async function showGallery (value, page, fl) {

    const data = await PixabayAPI(value, page);

        if(!data.hits.length) {

            Notiflix.Notify.warning("Sorry, there are no images matching your search query. Please try again.");
            refs.gallery.innerHTML = '';
            controlPage(0,0);
           
            return;
            
        }
       
        refs.gallery.innerHTML = createCards(data.hits);
        
       if(fl) {
        Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
        
       }
        controlPage(page, data.totalHits);

        lightbox.refresh();

  
}