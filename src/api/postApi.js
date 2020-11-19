import axiosClient from './axiosClient';

class PostApi {
    getAll = (params) => {
        const url = '/getUsers';
        return axiosClient.get(url, { params });
    };

    createPost = (data) => {
        const url = '/createPost';
        return axiosClient.post(url, data);
    };
}
const postApi = new PostApi();
export default postApi;