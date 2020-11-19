import React from 'react'
import FormCreatePost from './FormCreatePost';

import CardPost from './CardPost';

export default function HomePage() {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box">
                        <div className="page-title-right">
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><a href="#">Tìm kiếm đồng đội</a></li>
                                <li className="breadcrumb-item active">Profile</li>
                            </ol>
                        </div>
                        <h4 className="page-title">Tìm kiếm đồng đội</h4>
                    </div>
                </div>
            </div>

            <div
                style={{ display: 'inline-block', verticalAlign: 'middle' }}
                className="dropdown mb-2 mr-2">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="uil-signal-alt"></i> Lọc theo rank
            </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Tất cả</a>
                    <a className="dropdown-item" href="#">Sắt</a>
                    <a className="dropdown-item" href="#">Đồng</a>
                    <a className="dropdown-item" href="#">Bạc</a>
                    <a className="dropdown-item" href="#">Vàng</a>
                    <a className="dropdown-item" href="#">Bạch kim</a>
                    <a className="dropdown-item" href="#">Kim cương</a>
                    <a className="dropdown-item" href="#">Immortal</a>
                    <a className="dropdown-item" href="#">Radiant</a>
                </div>
            </div>

            <button type="button"
                data-toggle="modal" data-target="#staticBackdrop"
                className="btn btn-success mb-2"><i className="uil-plus"></i> Tạo bài viết</button>

            <FormCreatePost></FormCreatePost>

            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <CardPost></CardPost>
                </div>
            </div>
        </>
    )
}
