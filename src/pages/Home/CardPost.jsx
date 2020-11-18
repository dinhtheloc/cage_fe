import React from 'react';

function CardPost(props) {
    return (
        <div className="card mb-0 mt-2 ribbon-box">
            <div className="card-body">
                {/* <div className="ribbon float-right color-rank-diamond"> Rank kim cương</div> */}
                <div className="ribbon-two color-rank-diamond"><span>Kim Cương</span></div>
                <div className="media mb-3 mt-1">
                    <img className="d-flex mr-2 rounded-circle" src="https://coderthemes.com/hyper/saas/assets/images/users/avatar-2.jpg" alt="placeholder image" height="32" />
                    <div className="media-body">
                        <small className="float-right text-right">
                            <span class="badge badge-success">Online</span><br></br>
                                    3 phút trước
                                    </small>
                        <h6 className="m-0 font-14">Steven Smith <i className="mdi mdi-gender-male"></i><i className="mdi mdi-gender-female"></i></h6>
                        <small className="text-muted">caygheysamvuong <br></br>#9921</small>
                    </div>
                </div>

                <p className="mb-2 text-muted">
                    <span className="font-italic"><b>"</b>Disrupt pork belly poutine, asymmetrical tousled succulents selfies.
                                    You probably haven't heard of them tattooed master cleanse live-edge keffiyeh.</span>
                </p>
                <button type="button" className="btn btn-block btn-primary"><i className="uil uil-comments-alt"></i> Chat ngay</button>
            </div>
        </div>
    );
}

export default CardPost;