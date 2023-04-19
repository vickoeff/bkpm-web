import axios from 'axios';

async function getSlider() {
    const gallery = await axios.get('/slider');

    return gallery
}

export default getSlider