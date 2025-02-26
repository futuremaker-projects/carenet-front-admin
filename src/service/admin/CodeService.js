import {api} from "../instance.js";
import {apiRequest} from "../Utils.js";

const getCodes = async (success) => {
    return apiRequest(() => api.get(`/codes`), success);
}