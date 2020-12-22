import React from 'react';
import {
    Link
} from "react-router-dom";

import timeSince from './timeSince';


function CardPost({ data, facebookId }) {
    return (
        <div className="card mb-0 mt-2 ribbon-box">
            <div className="card-body">
                <div className={`ribbon-two color-rank-${data.rank}`}><span className="text-capitalize">{data.rank}</span></div>
                <div className="media mb-3 mt-1">
                    <img className="d-flex mr-2 rounded-circle" src={`${process.env.REACT_APP_UPLOAD_URL}/${data.user.avatar}`} alt="placeholder image" height="32" />
                    <div className="media-body">
                        <small className="float-right text-right">
                            <span className="badge badge-success">Online</span>
                            <br></br>
                            {timeSince(data.createDate)}
                        </small>
                        <h6 className="m-0 font-14 text-truncate">{data.user.name} <i className={`mdi mdi-gender-${data.user.gender}`}></i></h6>
                        {/* <p className="m-0 text-muted text-truncate">{data.user.name} <i className={`mdi mdi-gender-${data.user.gender}`}></i></p> */}
                        {/* <p className="m-0 text-muted text-truncate">{data.user.name} <i className={`mdi mdi-gender-${data.user.gender}`}></i></p> */}
                        {/* <small className="text-muted m-0 text-truncate">{data.user.valorant_name} <br></br>#{data.user.valorant_id}</small> */}
                        <p className="text-muted m-0 text-truncate">{data.user.valorant_name}</p>
                        <p className="text-muted m-0 text-truncate">#{data.user.valorant_id}</p>
                    </div>
                </div>

                <p className="mb-2 text-muted">
                    <span className="font-italic"><b>"</b>{data.description}</span>
                </p>
                {
                    facebookId !== data.user.facebook_id ?
                        <Link to={`/chat/${data.user.facebook_id}`}
                            className="btn btn-block btn-primary"><i className="uil uil-comments-alt"></i> Chat ngay
                        </Link>
                    : ''
                }

            </div>
        </div>
    );
}

export default CardPost;