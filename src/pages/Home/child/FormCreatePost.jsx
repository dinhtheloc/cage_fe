import React from 'react';

import { useForm } from 'react-hook-form';

import postApi from '../../../api/postApi';

export default function FormCreatePost() {


    const { register, handleSubmit, errors, reset } = useForm();
    // useEffect(() => {
    //     if (userProfile) {
    //         reset({
    //             name: userProfile.name,
    //             rank: userProfile.rank,
    //             valorant_id: userProfile.valorant_id,
    //             valorant_name: userProfile.valorant_name,
    //             gender: userProfile.gender
    //         });
    //     }

    // }, [userProfile]);

    const submit = data => {
        console.log(data);
        postApi.createPost({ ...data }).then((response) => {
            window.$.NotificationApp.send("Yeah", "Tạo mới thành công", "top-right", "rgba(0,0,0,0.2)", "success");
            // $('#myModal').modal('hide')
            window.$('#staticBackdrop').modal('hide');
        }).catch((error) => {
            console.log(error);
            window.$.NotificationApp.send("Opps", error, "top-right", "rgba(0,0,0,0.2)", "error");
        });
    };

    return (
        <div className="modal fade" id="staticBackdrop"
            data-backdrop="static" data-keyboard="false"
            tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Tạo mới bài viết</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form onSubmit={handleSubmit(submit)}>
                        <div className="modal-body">
                            <div className="form-group mb-3">
                                <label>Tiêu đề <span className="text-danger">*</span></label>
                                <input type="text"
                                    ref={register({ required: true })}
                                    name="title" className="form-control" placeholder="Nhập tiêu đề" />
                                <div className="invalid-feedback d-block">
                                    {errors.title && "Tiêu đề là trường bắt buộc"}
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <div className="form-group">
                                        <label>Mức rank <span className="text-danger">*</span></label>
                                        <select
                                            ref={register({ required: true })}
                                            name="rank"
                                            defaultValue="none"
                                            className="custom-select">
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
                                        <div className="invalid-feedback d-block">
                                            {errors.rank && "Rank là trường bắt buộc"}
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label>Số slot cần tìm <span className="text-danger">*</span></label>
                                        <select className="custom-select"
                                            defaultValue="1"
                                            ref={register({ required: true })}
                                            name="slot">
                                            <option value="1">Một</option>
                                            <option value="2">Hai</option>
                                            <option value="3">Ba</option>
                                            <option value="4">Bốn</option>
                                        </select>
                                        <div className="invalid-feedback d-block">
                                            {errors.slot && "Slot là trường bắt buộc"}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group mb-3">
                                <label>Nội dung bài viết <span className="text-danger">*</span></label>
                                <textarea
                                    ref={register({ required: true })}
                                    name="description"
                                    className="form-control" rows="4"></textarea>
                                <div className="invalid-feedback d-block">
                                    {errors.description && "Nội dung là trường bắt buộc"}
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Huỷ</button>
                            <button type="submit" className="btn btn-primary">Tạo mới bài viết</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
