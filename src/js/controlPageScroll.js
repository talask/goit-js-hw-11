import Notiflix from 'notiflix';
import refs from './refs';

export default function controlPage(page, totalHits) {
    
    if(page*40 >= totalHits) {
    
        if(page > 1){
                
            Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");

         }

         // flag for scroll without button 'Load more...'
        refs.isScrollEnd = 1;
       
    }else{

        // flag for scroll without button 'Load more...'
        refs.isScrollEnd = 0;

    }
}


