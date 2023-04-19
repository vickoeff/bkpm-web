import axios from "axios"

async function getTentang() {
    const tentang = await axios.get("/tentang")

    return tentang.data[0]
}

export default getTentang