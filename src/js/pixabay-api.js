import axios from 'axios';

export async function getImage(query, currentPage) {
    const BASE_URL = 'https://pixabay.com/api/';
    const url = `${BASE_URL}`;
    const params = {
        key: "43094029-935243e587570d50c5a59b02c",
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