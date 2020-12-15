import React from 'react';
import moment from 'moment';
import {
    Link
} from "react-router-dom";
export default function ItemListNotification({ data, facebookId }) {
    console.log(data);
    let id = '';
    if (facebookId === data.arrayUserIds[0]) {
        id = data.arrayUserIds[1];
    } else {
        id = data.arrayUserIds[0];
    }

    const { lastMessages } = data;

    const time = moment(lastMessages.time).format('HH:mm');
    return (
        <Link to={`/chat/${id}`}
            className="text-body">
            <div className="media mt-1 p-2 lift">
                <img src={`${process.env.REACT_APP_UPLOAD_URL}/${lastMessages.avatar}`}
                    className="mr-2 rounded-circle" height="48" alt="Brandon Smith" />
                <div className="media-body">
                    <h5 className="mt-0 mb-0 font-14">
                        <span className="float-right text-muted font-12">{time}</span>
                        {lastMessages.name}
                    </h5>
                    <p className="mt-1 mb-0 text-muted font-14">
                        {!lastMessages.hasRead && lastMessages.userId !== facebookId ?
                            (
                                <>
                                    <span className="w-25 float-right text-right"><span className="badge badge-success-lighten">new</span></span>
                                    <span className="w-75"><strong>{lastMessages.message}</strong></span>
                                </>
                            )
                            :
                            (
                                <>
                                    <span className="w-25 float-right text-right"></span>
                                    <span className="w-75">{lastMessages.message}</span>
                                </>
                            )
                        }
                    </p>
                </div>
            </div>
        </Link>
    )
}
