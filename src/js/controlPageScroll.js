import Notiflix from 'notiflix';
import refs from './refs';
import { observer } from './onScrollObserver';

export default function controlPageScroll(page, totalHits) {
    
    if(page*40 >= totalHits) {
    
        if(page > 1){
                
            Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");

         }

         //  for scroll without button 'Load more...'
        observer.unobserve(refs.targetEl);
       
    }
}


