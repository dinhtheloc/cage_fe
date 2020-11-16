import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import userApi from '../../api/userApi';
import UploadAvatarUI from './UploadAvatarUI';



export default function ProfilePage() {
    const [userProfile, setUserProfile] = useState([]);
    const [tabIndex, setTabIndex] = useState(1);
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {

                const response = await userApi.getUserById();
                setUserProfile(response);
                reset({
                    name: response.name,
                    rank: response.rank,
                    valorant_id: response.valorant_id,
                    valorant_name: response.valorant_name,
                    gender: response.gender
                });
            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
        }
        fetchUserProfile();
    }, []);

    const { register, handleSubmit, errors, reset } = useForm();
    const submit = data => {
        userApi.updateUserById(data).then((response) => {
            window.$.NotificationApp.send("Yeah", "Cập nhật thông tin thành công", "top-right", "rgba(0,0,0,0.2)", "success");
        }).catch((error) => {
            console.log(error);
        });
    };



    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box">
                        <div className="page-title-right">
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><a href="#">Tìm kiếm đồng đội</a></li>
                                <li className="breadcrumb-item active">Hồ sơ cá nhân</li>
                            </ol>
                        </div>
                        <h4 className="page-title">Hồ sơ cá nhân</h4>
                    </div>
                </div>
            </div>

            {/* Profile  */}
            <div className="card bg-primary">
                <div className="card-body profile-user-box">
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="media">
                                <span className="float-left m-2 mr-4">
                                    <img src="https://coderthemes.com/hyper/saas/assets/images/users/avatar-2.jpg"
                                        style={{ height: '100px' }} className="rounded-circle img-thumbnail" /></span>
                                <div className="media-body">
                                    <h4 className="mt-1 mb-1 text-white">{userProfile.name}</h4>
                                    <p className="font-13 mb-0 text-white-50">Valorant id: #{userProfile.valorant_id}</p>
                                    <p className="font-13 mb-0 text-white-50">Valorant name: {userProfile.valorant_name}</p>
                                    <p className="font-13 mb-0 text-white-50">Rank: {userProfile.rank}</p>
                                    <p className="font-13 mb-0 text-white-50">Giới tính: {userProfile.gender}</p>
                                </div>
                            </div>
                        </div> {/* end col */}
                        <div className="col-sm-4">
                            <div className="text-center mt-sm-0 mt-3 text-sm-right">
                                <button type="button" className="btn btn-light" onClick={() => {
                                    if (tabIndex) {
                                        setTabIndex(0);
                                    } else {
                                        setTabIndex(1);
                                    }
                                }}>
                                    <i className="uil uil-user-square mr-1"></i>  { tabIndex === 1 ? 'Cập nhật thông tin tài khoản' : 'Cập nhật avatar' }
                                </button>
                            </div>
                        </div>
                    </div> {/* end row  */}

                </div> {/* end card-body/ profile-user-box */}
            </div>

            {
                tabIndex === 1 ?
                    <form onSubmit={handleSubmit(submit)}>
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                        <div className="form-group">
                                            <label>Nickname <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control"
                                                name="name" ref={register({ required: true })}
                                                placeholder="Nickname" />

                                            <div className="invalid-feedback d-block">
                                                {errors.name && "Nickname là trường bắt buộc"}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <div className="form-group">
                                            <label>Mức rank Valorant</label>
                                            <select className="form-control" ref={register} name="rank">
                                                <option value="none">Unrank</option>
                                                <option value="iron">Sắt</option>
                                                <option value="bronze">Đồng</option>
                                                <option value="silver">Bạc</option>
                                                <option value="gold">Vàng</option>
                                                <option value="platinum">Bạch Kim</option>
                                                <option value="diamond">Kim Cương</option>
                                                <option value="immortal">Immortal</option>
                                                <option value="radiant">Radiant</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-12 col-md-4">
                                        <div className="form-group">
                                            <label>Id Valorant <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control"
                                                name="valorant_id"
                                                ref={register({ required: true })} placeholder="Id Valorant" />
                                            <div className="invalid-feedback d-block">
                                                {errors.valorant_id && "Id Valorant là trường bắt buộc"}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4">
                                        <div className="form-group">
                                            <label>Tên Valorant <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control"
                                                name="valorant_name"
                                                ref={register({ required: true })} placeholder="Tên Valorant" />
                                            <div className="invalid-feedback d-block">
                                                {errors.valorant_name && "Tên Valorant là trường bắt buộc"}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-4">
                                        <div className="form-group">
                                            <label>Giới tính</label>
                                            <div className="mt-2">
                                                <div className="custom-control custom-radio custom-control-inline">
                                                    <input type="radio" id="male"
                                                        value="male"
                                                        ref={register} name="gender" className="custom-control-input" />
                                                    <label className="custom-control-label" htmlFor="male">Nam</label>
                                                </div>
                                                <div className="custom-control custom-radio custom-control-inline custom-radio-danger">
                                                    <input type="radio" id="female" ref={register}
                                                        value="female"
                                                        name="gender" className="custom-control-input" />
                                                    <label className="custom-control-label" htmlFor="female">Nữ</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary">Cập nhật hồ sơ</button>
                                </div>

                            </div>
                        </div>
                    </form>
                    :
                    <UploadAvatarUI></UploadAvatarUI>
            }


        </>
    )
}
