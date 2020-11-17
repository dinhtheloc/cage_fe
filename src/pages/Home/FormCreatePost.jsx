import React from 'react'

export default function FormCreatePost() {
    return (
        <div class="modal fade" id="staticBackdrop"
            data-backdrop="static" data-keyboard="false"
            tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Tạo mới bài viết</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group mb-3">
                            <label>Tiêu đề</label>
                            <input type="text" name="example-email" class="form-control" placeholder="Nhập tiêu đề" />
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <div class="form-group">
                                    <label>Mức rank</label>
                                    <select class="custom-select">
                                        <option selected disabled>Chọn mức rank</option>
                                        <option value="1">Sắt</option>
                                        <option value="2">Đồng</option>
                                        <option value="3">Bạc</option>
                                        <option value="3">Vàng</option>
                                        <option value="3">Bạch Kim</option>
                                        <option value="3">Kim Cương</option>
                                        <option value="3">Immortal</option>
                                        <option value="3">Radiant</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col">
                                <div class="form-group">
                                    <label>Số slot cần tìm</label>
                                    <select class="custom-select">
                                        <option selected disabled>Chọn số slot</option>
                                        <option value="1">Một</option>
                                        <option value="2">Hai</option>
                                        <option value="3">Ba</option>
                                        <option value="4">Bốn</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label>Nội dung bài viết</label>
                            <textarea class="form-control" rows="4"></textarea>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Huỷ</button>
                        <button type="button" class="btn btn-primary">Understood</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
