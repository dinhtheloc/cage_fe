import React from 'react'

export default function ListUser({ listUserOnline, numClients }) {
    console.log(listUserOnline);
    return (
        <div className="card">
            <div className="card-body">
                {/* <div className="dropdown float-right">
                    <a href="#" className="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
                        <i className="mdi mdi-dots-vertical"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                        <a href="#" className="dropdown-item">Settings</a>
                        <a href="#" className="dropdown-item">Action</a>
                    </div>
                </div> */}
                <h4 className="header-title">Danh sách thành viên</h4>
                <p className="mb-4">Có {numClients} người đang <span className="badge badge-success-lighten">Online</span></p>

                {listUserOnline.map((i) =>
                    <div key={i._id} className="media mt-3">
                        <img className="mr-3 rounded-circle" src={`${process.env.REACT_APP_UPLOAD_URL}/${i.avatar}`} width="40" alt="Generic placeholder image" />
                        <div className="media-body">
                            {/* <span className="badge badge-success-lighten float-right">Online</span> */}
                            <h5 className="mt-0 mb-1">{i.name}</h5>
                            <span className="font-13">Rank: {i.rank}</span>
                        </div>
                    </div>
                )}

            </div>
            {/*  end card-body */}
        </div>
    )
}
