import React, { useEffect, useState } from 'react';
import userApi from '../../api/userApi';
import UpdateInfoUser from './UpdateInfoUser';
import UploadAvatarUI from './UploadAvatarUI';


export default function ProfilePage() {

    const [tabIndex, setTabIndex] = useState(1);

    const [userProfile, setUserProfile] = useState({});
    useEffect(() => {
        fetchUserProfile();
    }, []);

    const fetchUserProfile = async () => {
        try {
            const response = await userApi.getUserById();
            setUserProfile(response);
        } catch (error) {
            console.log('Failed to fetch product list: ', error);
        }
    }


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
                                    <img src={`${process.env.REACT_APP_UPLOAD_URL}/${userProfile.avatar}`}
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
                                    <i className="uil uil-user-square mr-1"></i>  {tabIndex === 0 ? 'Cập nhật thông tin tài khoản' : 'Cập nhật avatar'}
                                </button>
                            </div>
                        </div>
                    </div> {/* end row  */}

                </div> {/* end card-body/ profile-user-box */}
            </div>
            {
                tabIndex === 1 ?
                    <UpdateInfoUser userProfile={userProfile} fetchUserProfile={fetchUserProfile}></UpdateInfoUser>
                    :
                    <UploadAvatarUI></UploadAvatarUI>
            }
        </>
    )
}
