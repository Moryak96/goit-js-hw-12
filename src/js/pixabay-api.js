import axios from 'axios';

export async function getImage(query, currentPage) {
    const BASE_URL = 'https://pixabay.com/api/';
    const url = `${BASE_URL}`;
    const params = {
    
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        per_page: 15,
        page: currentPage,
    };

    const res = await axios.get(url, {params});
    return res.data;
}