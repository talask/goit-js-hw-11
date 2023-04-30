import { options } from './PixabayAPI';
import showGallery  from './showGallery' 

export default function onLoadMore() {
    
    options.page += 1;
    console.log(options.page);
    showGallery(options.q, options.page);
    
}