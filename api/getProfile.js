import axios from 'axios';

export async function getProfilePemda() {
    const profile = await axios({
        method:'get',
        url: '',
        baseURL: 'https://penkin-backend.denican.id/profil?sort=idptsp%20ASC'
    });

    return profile.data
}

export async function getProfileKl() {
    const profile = await axios({
        method:'get',
        url: '',
        baseURL: 'https://penkin-backend.denican.id/profil_ppb_kl?sort=idkl%20ASC'
    });

    return profile.data
}
