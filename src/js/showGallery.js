import Notiflix from 'notiflix';
import PixabayAPI from './PixabayAPI';
import createCards from './createCards';
import controlPage from './controlPage';
import refs from './refs';
export default function showGallery (value, page) {

    PixabayAPI(value, page).then(data => {

        if(!data.hits.length) {
            
            refs.gallery.innerHTML = '';
            controlPage(0,0);
            Notiflix.Notify.info("Sorry, there are no images matching your search query. Please try again.");
            return;
            
        }
       
        refs.gallery.innerHTML = createCards(data.hits);
       // refs.paginationBtn.classList.remove('visually-hidden');
        controlPage(page, data.totalHits);
    }).catch(error => {
        console.log(error);
    });

}