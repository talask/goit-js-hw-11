import Notiflix from 'notiflix';
import refs from './refs';

export default function controlPage(page, totalHits) {
    if(page*40 >= (totalHits - 40)) {
        if(!isHidden()) {
            refs.paginationBtn.classList.add('visually-hidden');
            if(page > 1){
                Notiflix.Notify.info("again.");
            }
        }
    }else{
        if(isHidden()) {
            refs.paginationBtn.classList.remove('visually-hidden'); 
        }
    }
}

function isHidden() {
    if(refs.paginationBtn.classList.contains('visually-hidden')){
        return true;
    }
    return false;
}
