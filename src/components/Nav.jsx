
import React from "react";
import {
    Link
} from "react-router-dom";

import Loading from './Loading';

export default function Nav({ userProfile, countNoti }) {

    return (
        <div className="left-side-menu left-side-menu-detached" >
            <div className="leftbar-user">

                {
                    userProfile ?
                        <a href="#">
                            <img src={`${process.env.REACT_APP_UPLOAD_URL}/${userProfile.avatar}`}
                                alt="user-image" height="42" className="rounded-circle shadow-sm" />
                            <span className="leftbar-user-name">{userProfile.name}</span>
                        </a>
                        :
                        <Loading></Loading>
                }

            </div>

            {/* - Sidemenu */}
            <ul className="metismenu side-nav">

                <li className="side-nav-title side-nav-item">Danh mục</li>

                <li className="side-nav-item">
                    <Link to="/" className="side-nav-link">
                        <i className="uil-rss"></i>
                        <span className="badge badge-success float-right">New</span>
                        <span> Tìm kiếm đồng đội </span>
                    </Link>
                </li>

                <li className="side-nav-item">
                    <Link to="/profile" className="side-nav-link">
                        <i className="uil-user"></i>
                        <span> Hồ sơ cá nhân </span>
                    </Link>
                </li>

                <li className="side-nav-item">
                    <Link to="/notifications" className="side-nav-link">
                        <i className="uil-bell"></i>
                        <span className="badge badge-danger float-right">{countNoti > 0 ? countNoti: ''}</span>
                        <span> Thông báo </span>
                    </Link>
                </li>

                <li className="side-nav-item">
                    <Link to="/logout" className="side-nav-link">
                        <i className="uil-power"></i>
                        <span> Đăng xuất hệ thống </span>
                    </Link>
                </li>


            </ul>

            {/*  Help Box */}
            <div className="help-box help-box-light text-center">
                {/* <a href="#" className="float-right close-btn text-body">
                    <i className="mdi mdi-close"></i>
                </a> */}
                <img src="/assets/images/youtube.svg" height="90" alt="Helper Icon Image" />
                <h5 className="mt-3">CAGE Gaming</h5>
                <p className="mb-3">Bỏ chút thời gian ủng hộ mình bằng cách đăng ký kênh youtube của mình nhé</p>
                <a href="https://www.youtube.com/channel/UCF061_8xINLPsYHPcBReBFA?view_as=subscriber" 
                target="_blank"
                className="btn btn-outline-primary btn-sm">Đăng ký</a>
            </div>
            {/*  end Help Box */}
            {/*  End Sidebar */}

            <div className="clearfix"></div>
            {/*  Sidebar -left */}

        </div >


    )
}
