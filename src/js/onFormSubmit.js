
import showGallery from './showGallery';

export function onFormSubmit(e) {
    e.preventDefault();
    const {
        elements: { searchQuery },
    } = e.currentTarget;
    const searchValue = searchQuery.value.trim();
   
   showGallery(searchValue, 1, true);
}