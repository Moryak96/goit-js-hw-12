export const imageTemplate = (images) => {
    return images.map((img) => `<li class="gallery-item">
    <a class="gallery-link" href="${img.largeImageURL}">
      <img class="gallery-image" src="${img.webformatURL}" alt="${img.tags}" loading="lazy" />
      <ul class="gallery-image-info">
        <li>
          <h3>Likes</h3>
          <p>${img.likes}</p>
        </li>
        <li>
          <h3>Views</h3>
          <p>${img.views}</p>
        </li>
        <li>
          <h3>Comments</h3>
          <p>${img.comments}</p>
        </li>
        <li>
          <h3>Downloads</h3>
          <p>${img.downloads}</p>
        </li>
      </ul>
    </a>
    </li>`).join("");
}