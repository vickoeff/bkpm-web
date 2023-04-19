import axios from 'axios';

async function getGallery() {
    const gallery = await axios.get('/galeri');

    return gallery
}

export default getGallery