import React from 'react';

export default function InfoBar({ avatar, name, riotId, riotName, gender, rank }) {
    return (
        <div className="col-3">
            <div className="card">
                <div className="card-body">
                    <div className="dropdown float-right">
                        <i className="uil uil-exchange-alt"></i>
                    </div>

                    <div className="mt-3 text-center">
                        <img src={`${process.env.REACT_APP_UPLOAD_URL}/${avatar}`}
                            alt={name} className="img-thumbnail avatar-lg rounded-circle" />
                        <h4>{name}</h4>
                    </div>

                    <div className="mt-3">
                        <hr />

                        <p className="mt-4 mb-1"><strong> Tên trong game:</strong></p>
                        <p>{riotName}</p>

                        <p className="mt-4 mb-1"><strong> Riot Id:</strong></p>
                        <p>#{riotId}</p>

                        <p className="mt-4 mb-1"><strong> Giới tính:</strong></p>
                        <p>{gender}</p>

                        <p className="mt-4 mb-1"><strong> Rank:</strong></p>
                        <p>{rank}</p>

                    </div>
                </div> {/*  end card-body  */}
            </div> {/*  end card */}
        </div>
    )
}
