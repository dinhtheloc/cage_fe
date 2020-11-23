import React from "react";
import {
    Link
} from "react-router-dom";

import Loading from './Loading';

export default function Nav({ userProfile }) {

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
                    <Link to="/logout" className="side-nav-link">
                        <i className="uil-power"></i>
                        <span> Đăng xuất hệ thống </span>
                    </Link>
                </li>


            </ul>

            {/*  Help Box */}
            <div className="help-box help-box-light text-center">
                <a href="#" className="float-right close-btn text-body">
                    <i className="mdi mdi-close"></i>
                </a>
                <img src="/assets/images/help-icon.svg" height="90" alt="Helper Icon Image" />
                <h5 className="mt-3">Unlimited Access</h5>
                <p className="mb-3">Upgrade to plan to get access to unlimited reports</p>
                <a href="#" className="btn btn-outline-primary btn-sm">Upgrade</a>
            </div>
            {/*  end Help Box */}
            {/*  End Sidebar */}

            <div className="clearfix"></div>
            {/*  Sidebar -left */}

        </div >


    )
}
