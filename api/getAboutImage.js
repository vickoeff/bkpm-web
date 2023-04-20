import axios from "axios"

async function getAboutImage(id) {
    const image = await axios.get(`/galeri?${id}`)

    return image.data
}

export default getAboutImage