
import React, { useEffect, useState } from "react";
import { Redirect, Switch } from 'react-router-dom';
import userApi from '../api/userApi';
import Loading from '../components/Loading';
import Nav from '../components/Nav';
import PrivateRoute from '../components/PrivateRoute';
import Chat from '../pages/Chat/Chat';
import HomePage from '../pages/Home/HomePage';
import ProfilePage from '../pages/Profile/ProfilePage';
import NotificationPage from '../pages/Notification/NotificationPage';

export default function Admin() {

    const [userProfile, setUserProfile] = useState(null);
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
        <div className="container-fluid">
            {/*  Begin page */}
            <div className="wrapper">
                <Nav userProfile={userProfile}></Nav>
                <div className="content-page">
                    <div className="content">
                        <div className="row">
                            <div className="col-12">
                                <Switch>
                                    <PrivateRoute path='/' exact>
                                        {userProfile ? <HomePage userProfile={userProfile} ></HomePage> : <Loading></Loading>}
                                    </PrivateRoute>
                                    <PrivateRoute path='/profile'>
                                        {userProfile ? <ProfilePage userProfile={userProfile} fetchUserProfile={fetchUserProfile}></ProfilePage> : <Loading></Loading>}
                                    </PrivateRoute>
                                    <PrivateRoute path='/chat/:facebookId'>
                                        {userProfile ? <Chat userProfile={userProfile} ></Chat> : <Loading></Loading>}
                                    </PrivateRoute>

                                    <PrivateRoute path='/notifications'>
                                        {userProfile ? <NotificationPage userProfile={userProfile} ></NotificationPage> : <Loading></Loading>}
                                    </PrivateRoute>
                                    <PrivateRoute path="*">
                                        <Redirect to="/" />
                                    </PrivateRoute>
                                </Switch>
                            </div>
                        </div>
                        {/*  end page title */}
                    </div> {/*  End Content */}
                    {/*  Footer Start */}
                    <footer className="footer">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6">
                                    <script>document.write(new Date().getFullYear())</script> © Hyper - Coderthemes.com
                              </div>
                                <div className="col-md-6">
                                    <div className="text-md-right footer-links d-none d-md-block">
                                        <a href="#">About</a>
                                        <a href="#">Support</a>
                                        <a href="#">Contact Us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                    {/*  end Footer */}
                </div> {/*  content-page */}
            </div> {/*  end wrapper*/}
        </div>

    )
}
