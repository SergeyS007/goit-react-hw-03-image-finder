const baseURL = 'https://pixabay.com/api/';
const api_key = '30062388-a44765a9b25a2c7fffe70ed63';

const fetchImages = (query, page) => {
  return fetch(
    `${baseURL}?q=${query}&page=${page}&key=${api_key}&image_type=photo&orientation=horizontal&per_page=12`
  );
};

export default fetchImages;
