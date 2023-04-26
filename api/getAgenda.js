import axios from 'axios';

async function getAgenda() {
    axios.defaults.baseURL = ''
    const agenda = await axios.get('https://penkin-backend.denican.id/tanggal_kegiatan?sort=tanggal_mulai%20ASC');

    return agenda
}

export default getAgenda