import axiosClient from './axiosClient';

class PostApi {
    getAll = (params) => {
        const url = '/getPosts';
        return axiosClient.get(url, { params: { ...params } });
    };

    createPost = (data) => {
        const url = '/createPost';
        return axiosClient.post(url, data);
    };
}
const postApi = new PostApi();
export default postApi;