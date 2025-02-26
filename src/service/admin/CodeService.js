import {api} from "../instance.js";
import {apiRequest} from "../Utils.js";

const getCodes = async (success) => {
    return apiRequest(() => api.get(`/codes`), success);
}

const createPrimeCode = async (primeCodeName, success) => {
    return apiRequest(() => api.post(`/codes`, primeCodeName), success);
}

export  {
    getCodes,createPrimeCode
}