import axios from "axios";

axios.defaults.baseURL = 'https://6526c494917d673fd76cfb96.mockapi.io'

export const fetchContactsApi = async () => {
    const resp = await axios.get('/contacts');
    return resp.data;
}