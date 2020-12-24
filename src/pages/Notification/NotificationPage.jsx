import React from "react";
import ItemListNotification from './ItemListNotification';
import Breadcrumb from '../../components/Breadcrumb';
export default function NotificationPage({ notificationsData, userProfile }) {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <Breadcrumb 
                    title={'Thông báo'}
                    ></Breadcrumb>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body p-0">
                            {notificationsData.length > 0 ?
                                <div className="tab-content">
                                    <div className="tab-pane show active p-3">
                                        <div className="row">
                                            <div className="col">
                                                <div style={{ maxHeight: "550px", overflow: 'hidden scroll' }}>
                                                    {notificationsData.map((data, i) => <ItemListNotification key={i}
                                                        facebookId={userProfile.facebook_id}
                                                        userProfile={userProfile}
                                                        data={data}></ItemListNotification>)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className="text-center p-4">
                                    <img src="/assets/images/startman.svg" height="120" alt="File not found Image"></img>
                                    <h4 className="text-uppercase text-danger mt-3">Hiện tại bạn chưa có thông báo</h4>
                                    <p className="text-muted mt-3">Hãy tạo bài viết và tiến hành kết bạn đi nào!</p>
                                </div>
                            }
                        </div> {/*  end card-body*/}
                    </div> {/*  end card*/}
                </div>
            </div>


        </>


    )
}
