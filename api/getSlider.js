import axios from 'axios';
import store from '../src/store';

async function getSlider() {
    store.commit('setFetching');
    const gallery = await axios.get('/slider');
    store.commit('setFetching');

    return gallery
}

export default getSlider