import React from 'react'

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
            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <div className="card mb-0 mt-2 ribbon-box">
                        <div className="card-body">
                            {/* <div className="ribbon float-right color-rank-diamond"> Rank kim cương</div> */}
                            <div className="ribbon-two color-rank-diamond"><span>Kim Cương</span></div>
                            <div className="media mb-3 mt-1">
                                <img className="d-flex mr-2 rounded-circle" src="https://coderthemes.com/hyper/saas/assets/images/users/avatar-2.jpg" alt="placeholder image" height="32" />
                                <div className="media-body">
                                    <small className="float-right">3 phút trước</small>
                                    <h6 className="m-0 font-14">Steven Smith</h6>
                                    <small className="text-muted">caygheysamvuong #9921</small>
                                </div>
                            </div>

                            <p className="mb-2 text-muted">
                                <span className="font-italic"><b>"</b>Disrupt pork belly poutine, asymmetrical tousled succulents selfies.
                                    You probably haven't heard of them tattooed master cleanse live-edge keffiyeh.</span>
                            </p>
                            <button type="button" className="btn btn-block btn-primary"><i className="uil uil-comments-alt"></i> Chat ngay</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
