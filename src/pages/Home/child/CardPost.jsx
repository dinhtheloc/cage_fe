import React from 'react';

import timeSince from './timeSince';

function CardPost({ data }) {
    console.log(data);
    // createDate: "2020-11-19T10:48:40.799Z"
    // description: "241qfw"
    // rank: "silver"
    // slot: 1
    // title: 
    // user:
    //     avatar: "b5159437-e798-4584-8c1d-7aeb458cc9d3.png"
    //     facebook_id: "3463097300452371"
    //     gender: "male"
    //     name: "Đinh Thế Lộc"
    //     rank: "diamond"
    //     valorant_id: "1234"
    //     valorant_name: "caygheysamvuong"
    //     __v: 0
    //     _id: 



    const { user } = data;
    return (
        <div className="card mb-0 mt-2 ribbon-box">
            <div className="card-body">
                <div className="ribbon-two color-rank-diamond"><span>{data.rank}</span></div>
                <div className="media mb-3 mt-1">
                    <img className="d-flex mr-2 rounded-circle" src={`${process.env.REACT_APP_UPLOAD_URL}/${data.user.avatar}`} alt="placeholder image" height="32" />
                    <div className="media-body">
                        <small className="float-right text-right">
                            <span class="badge badge-success">Online</span>
                            <br></br>
                            {timeSince(data.createDate)}
                        </small>
                        <h6 className="m-0 font-14">{data.user.name} <i className="mdi mdi-gender-male"></i><i className="mdi mdi-gender-female"></i></h6>
                        <small className="text-muted">{data.user.valorant_name} <br></br>#{data.user.valorant_id}</small>
                    </div>
                </div>

                <p className="mb-2 text-muted">
                    <span className="font-italic"><b>"</b>{data.description}</span>
                </p>
                <button type="button" className="btn btn-block btn-primary"><i className="uil uil-comments-alt"></i> Chat ngay</button>
            </div>
        </div>
    );
}

export default CardPost;