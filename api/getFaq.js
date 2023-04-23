import axios from 'axios';

async function getFaq() {
    const faq = await axios.get('/faq');

    return faq
}

export default getFaq