import axios from "axios";

const createAxios = () => axios.create({
    baseURL: 'https://api.adviceslip.com'
})

const useIndex = () => ({
    axios: createAxios()
})

export {
    useIndex
}