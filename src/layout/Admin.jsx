

import React, { useEffect, useState } from "react";
import { Link, Redirect, Switch } from 'react-router-dom';
// import { getNotifications, joinNotification, receiveNotifications, stats } from '../api/socket';
import Socket from '../api/socket';
import userApi from '../api/userApi';
import Loading from '../components/Loading';
import Nav from '../components/Nav';
import PrivateRoute from '../components/PrivateRoute';
import Chat from '../pages/Chat/Chat';
import HomePage from '../pages/Home/HomePage';
import NotificationPage from '../pages/Notification/NotificationPage';
import ProfilePage from '../pages/Profile/ProfilePage';
import ListUser from '../components/ListUser';

export default function Admin() {

    const [userProfile, setUserProfile] = useState(null);
    const [socketHook, setSocketHook] = useState(null);

    const [notificationsData, setNotificationsData] = useState([]);
    const [countNoti, setCountNoti] = useState(0);
    const [listUserOnline, setListUserOnline] = useState([]);
    const [numClients, setNumClients] = useState(0);


    useEffect(() => {
        fetchUserProfile();
    }, []);

    const fetchUserProfile = async () => {
        try {
            const response = await userApi.getUserById();

            setUserProfile(response);
            
            const socketio = new Socket(response._id);
            setSocketHook(socketio);

            socketio.joinNotification(response.facebook_id);
            socketio.getNotifications(({ notifications, count }) => {
                setNotificationsData(notifications);
                setCountNoti(count);
            });
            socketio.stats((data) => {
                setListUserOnline(data.listUserOnline);
                setNumClients(data.numClients);
            });
            socketio.receiveNotifications(({ notifications, count }) => {

                setNotificationsData(notifications);
                setCountNoti(count);
            });

        } catch (error) {
            console.log('Failed to fetch product list: ', error);
        }
    }


    return (
        <div className="container-fluid">
            {/*  Begin page */}
            <div className="wrapper">
                {userProfile ? <Nav
                    countNoti={countNoti}
                    userProfile={userProfile} ></Nav> : <Loading></Loading>}
                <div className="content-page">
                    <div className="content">
                        <div className="row">
                            {userProfile && !userProfile.valorant_id && !userProfile.valorant_name ?
                                <div className="col-12 mt-4">
                                    <div className="alert alert-primary" role="alert">
                                        <strong>Xin chào người mới.</strong> Thông tin cá nhân của bạn đang bỏ trống kìa! <Link to="/profile">Click vào đây</Link> để cập nhật hồ sơ cá nhân.
                                </div>
                                </div> : ''}
                            <div className="col-8">
                                <Switch>
                                    <PrivateRoute path='/' exact>
                                        {userProfile ? <HomePage userProfile={userProfile} ></HomePage> : <Loading></Loading>}
                                    </PrivateRoute>
                                    <PrivateRoute path='/profile'>
                                        {userProfile ? <ProfilePage userProfile={userProfile} fetchUserProfile={fetchUserProfile}></ProfilePage> : <Loading></Loading>}
                                    </PrivateRoute>
                                    <PrivateRoute path='/chat/:facebookId'>
                                        {userProfile && socketHook ? <Chat socketio={socketHook} userProfile={userProfile} ></Chat> : <Loading></Loading>}
                                    </PrivateRoute>

                                    <PrivateRoute path='/notifications'>
                                        {userProfile ? <NotificationPage userProfile={userProfile}
                                            notificationsData={notificationsData} ></NotificationPage> : <Loading></Loading>}
                                    </PrivateRoute>
                                    <PrivateRoute path="*">
                                        <Redirect to="/" />
                                    </PrivateRoute>
                                </Switch>
                            </div>
                            <div className="col-4 mt-3">
                                {listUserOnline ? <ListUser numClients={numClients} listUserOnline={listUserOnline}></ListUser> : <Loading></Loading>}
                            </div>
                        </div>
                        {/*  end page title */}
                    </div> {/*  End Content */}
                    {/*  Footer Start */}
                    <footer className="footer">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6">
                                    <script>document.write(new Date().getFullYear())</script> © CAGE GAMING
                              </div>
                                <div className="col-md-6">
                                    <div className="text-md-right footer-links d-none d-md-block">
                                        <a target="_blank" href="https://www.facebook.com/gaming/cayghegaming/">Facebook</a>
                                        <a target="_blank" href="https://www.youtube.com/channel/UCF061_8xINLPsYHPcBReBFA?view_as=subscriber">Youtube</a>
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
