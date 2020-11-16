import React, { useEffect, useState } from "react";
import {
    Link
} from "react-router-dom";
import userApi from '../api/userApi';

export default function Nav() {

    const [userProfile, setUserProfile] = useState([]);
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await userApi.getUserById();
                setUserProfile(response);
            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
        }
        fetchUserProfile();
    }, []);
    return (
        <div className="left-side-menu left-side-menu-detached" >

            <div className="leftbar-user">
                <a href="#">
                    <img src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.0-9/123140332_3445096828919085_1399768299663606821_n.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=DHLFMyF0Sw8AX95_dCB&_nc_ht=scontent.fsgn2-6.fna&oh=231f8a4bfea0491d3f2363c79e8ea1c5&oe=5FD1B452" alt="user-image" height="42" className="rounded-circle shadow-sm" />
                    <span className="leftbar-user-name">{userProfile.name}</span>
                </a>
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
                <img src="assets/images/help-icon.svg" height="90" alt="Helper Icon Image" />
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
