
import refs from './js/refs';
import { onFormSubmit } from './js/onFormSubmit';
import  onLoadMore  from './js/onLoadMore';

refs.searchForm.addEventListener('submit', onFormSubmit);
refs.paginationBtn.addEventListener('click', onLoadMore);
