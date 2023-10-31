import axiosClient from './axiosSchoolClient';
import queryString from 'query-string';

const schoolApi = {
    async getAll(params) {
        const newParams = { ...params };
        // console.log(newParams);
        const schoolsList = await axiosClient.get('/schools', { params: newParams });
        // Build response and return
        return {
            data: schoolsList.object.docs,
        };
    },
    get(id) {
        const url = `/schools/${id}`;
        return axiosClient.get(url);
    },

    add(data) {
        const url = '/schools';
        return axiosClient.post(url, data);
    },

    update(data) {
        const url = `/schools/${data.id}`;
        return axiosClient.patch(url, data);
    },

    remove(id) {
        const url = `/schools/${id}`;
        return axiosClient.delete(url);
    },
};

export default schoolApi;
