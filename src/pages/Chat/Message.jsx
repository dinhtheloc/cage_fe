import React from 'react';
import moment from 'moment';

export default function Message({ message, name, avatar, userId }) {
    let isSentByCurrentUser = false;

    if (message.userId === userId) {
        isSentByCurrentUser = true;
    }

    const time = moment(message.time).format('HH:mm');
    return (
        !isSentByCurrentUser
            ? (

                <li className="clearfix">
                    <div className="chat-avatar">
                        <img src={`${process.env.REACT_APP_UPLOAD_URL}/${message.avatar}`} className="rounded" alt="avatar" />
                        <i>{time}</i>
                    </div>
                    <div className="conversation-text">
                        <div className="ctext-wrap">
                            <i>{message.name}</i>
                            <p>{message.message}</p>
                        </div>
                    </div>
                </li>
            )
            : (

                <li className="clearfix odd">
                    <div className="chat-avatar">
                        <img src={`${process.env.REACT_APP_UPLOAD_URL}/${avatar}`} className="rounded" alt="avatar" />
                        <i>{time}</i>
                    </div>
                    <div className="conversation-text">
                        <div className="ctext-wrap">
                            <i>{name}</i>
                            <p>
                                {message.message}
                            </p>
                        </div>
                    </div>
                </li>
            )
    );



}
