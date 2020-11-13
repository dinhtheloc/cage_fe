import axiosClient from './axiosClient';

class UserApi {
    getAll = (params) => {
        const url = '/getUsers';
        return axiosClient.get(url, { params });
    };

    getUserById = (params) => {
        const url = '/getUserById';
        return axiosClient.get(url, { params });
    };

    updateUserById = (data) => {
        const url = '/updateUserById';
        return axiosClient.put(url, { data });
    };
}
const userApi = new UserApi();
export default userApi;