import Notiflix from 'notiflix';
import refs from './js/refs';
import { onFormSubmit } from './js/onFormSubmit';
//import {fetchImages} from './js/fetchImages';
refs.searchForm.addEventListener('submit', onFormSubmit);