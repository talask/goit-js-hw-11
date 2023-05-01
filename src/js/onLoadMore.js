import { options } from './PixabayAPI';
import showGallery  from './showGallery' 

export default function onLoadMore() {
    
    options.page += 1;
    
    showGallery(options.q, options.page);
    
}