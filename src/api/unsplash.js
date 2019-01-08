import axios from 'axios';

export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID 3222efe19e4602a220b53dd8ae9a02785517a571705e3aea42bc72d1f2294c1f'
    }
});