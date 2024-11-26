import {api} from "./instance.js";
import {apiRequest} from "./Utils.js";

/** examId에 해당하는 모든 문제를 가져온다. - cbt 에서 사용 */
const getQuestions = async (examId) => {
    return apiRequest(() =>
        api.get(`/cbt/exams/${examId}/questions`));
}

export {
    getQuestions
}

