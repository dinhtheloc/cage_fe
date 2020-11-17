import axiosClient from './axiosClient';

class UserApi {
    getAll = (params) => {
        const url = '/getUsers';
        return axiosClient.get(url, { params });
    };

    getUserById = () => {
        const url = '/getUserById';
        return axiosClient.get(url);
    };

    updateUserById = (data) => {
        const url = '/updateUserById';
        return axiosClient.put(url, { data });
    };

    uploadAvatar = (file) => {
        const url = '/uploadAvatar';

        let formData = new FormData();
        formData.append("image", file);
        return axiosClient.post(url, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        });
    }
}
const userApi = new UserApi();
export default userApi;