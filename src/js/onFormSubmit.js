import Notiflix from 'notiflix';
import PixabayAPI from './PixabayAPI';
import createCards from './createCards';
import refs from './refs';

export function onFormSubmit(e) {
    e.preventDefault();
    const {
        elements: { searchQuery },
    } = e.currentTarget;
    const searchValue = searchQuery.value.trim();
    PixabayAPI(searchValue).then(data => {
        if(!data.hits.length) {
            console.log(searchValue);
            refs.gallery.innerHTML = '';
            Notiflix.Notify.info("Sorry, there are no images matching your search query. Please try again.");
            return;
        }
        refs.gallery.innerHTML = createCards(data.hits);
        
    }).catch(error => {
        console.log(error);
    });
}