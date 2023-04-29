
export default function createCards(arrData) {

    return arrData.map(({webformatURL, tags, likes, views, comments, downloads}) => {
        return `
        <div class="photo-card">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" width="150px" height="100px"/>
  <div class="info">
    <p class="info-item">
      <b>Likes</b><br>
      ${likes}
    </p>
    <p class="info-item">
      <b>Views</b><br>
      ${views}
    </p>
    <p class="info-item">
      <b>Comments</b><br>
      ${comments}
    </p>
    <p class="info-item">
      <b>Downloads</b><br>
      ${downloads}
    </p>
  </div>
</div>
        `
    }).join('');
    
    
}
//, largeImageURL