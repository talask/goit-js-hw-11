import refs from './refs';
import  onLoadMore  from './onLoadMore';

const optionsObserver = {
    root:  null,
    rootMargin: '300px',
    threshold: 1.0
}
const onScrollObserver = function(entries, observer) {
    
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            onLoadMore();
        }
    })
};

export const observer = new IntersectionObserver(onScrollObserver, optionsObserver);

