import refs from './refs';
import  onLoadMore  from './onLoadMore';

export function onScrollListener(){

    const { height: cardHeight } = refs.gallery.firstElementChild.getBoundingClientRect();
    let heightGallery = refs.gallery.clientHeight;
    let scrollTop = window.pageYOffset;

    let distanseToDownLine = heightGallery - scrollTop - cardHeight*2;

    if(distanseToDownLine < cardHeight*2 && !refs.isScrollEnd){
        
        refs.isScrollEnd = 1;
        onLoadMore();
      
    }
}

