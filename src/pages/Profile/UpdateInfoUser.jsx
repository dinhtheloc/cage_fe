import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import userApi from '../../api/userApi';
import Loading from '../../components/Loading';

export default function UpdateInfoUser({ fetchUserProfile, userProfile }) {
    const { register, handleSubmit, errors, reset } = useForm();

    useEffect(() => {
        if (userProfile) {
            reset({
                name: userProfile.name,
                rank: userProfile.rank,
                valorant_id: userProfile.valorant_id,
                valorant_name: userProfile.valorant_name,
                gender: userProfile.gender
            });
        }

    }, [userProfile]);

    const submit = data => {
        userApi.updateUserById(data).then((response) => {
            window.$.NotificationApp.send("Yeah", "Cập nhật thông tin thành công", "top-right", "rgba(0,0,0,0.2)", "success");
            fetchUserProfile();
        }).catch((error) => {
            console.log(error);
        });
    };  

    

    return (
        
        userProfile ? <form onSubmit={handleSubmit(submit)}>
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
        </form> : <Loading />


    )
}
