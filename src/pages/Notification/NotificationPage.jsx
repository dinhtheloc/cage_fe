import React from "react";
import ItemListNotification from './ItemListNotification';
export default function NotificationPage({ notificationsData, userProfile }) {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box">
                        <div className="page-title-right">
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><a href="#">Tìm kiếm đồng đội</a></li>
                                <li className="breadcrumb-item active">Thông báo</li>
                            </ol>
                        </div>
                        <h4 className="page-title">Thông báo</h4>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="tab-content">
                                <div className="tab-pane show active p-3">
                                    <div className="row">
                                        <div className="col">
                                            <div style={{ maxHeight: "550px", overflow: 'hidden scroll' }}>
                                                {notificationsData.map((data, i) => <ItemListNotification key={i} 
                                                facebookId={userProfile.facebook_id}
                                                userProfile={userProfile}
                                                data={data}></ItemListNotification>)}
                                            </div> {/*  end slimscroll*/}
                                        </div> {/*  End col */}
                                    </div>
                                    {/*  end users */}
                                </div> {/*  end Tab Pane*/}
                            </div> {/*  end tab content*/}
                        </div> {/*  end card-body*/}
                    </div> {/*  end card*/}
                </div>
            </div>
        </>


    )
}
