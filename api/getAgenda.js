import axios from 'axios';

async function getAgenda() {
    const agenda = await axios({
        method:'get',
        url:'logout',
        baseURL: 'https://penkin-backend.denican.id/tanggal_kegiatan?sort=tanggal_mulai%20ASC',
       })

    return agenda
}

export default getAgenda