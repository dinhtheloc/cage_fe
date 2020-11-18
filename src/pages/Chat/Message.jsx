import React from 'react'

export default function Message({ message: { text, user }, name, avatar }) {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if (user === trimmedName) {
        isSentByCurrentUser = true;
    }


    console.log('avatar', avatar);

    return (
        !isSentByCurrentUser
            ? (

                <li className="clearfix">
                    <div className="chat-avatar">
                        <img src="https://coderthemes.com/hyper/saas/assets/images/users/avatar-5.jpg" className="rounded" alt="Shreyu N" />
                        <i>10:00</i>
                    </div>
                    <div className="conversation-text">
                        <div className="ctext-wrap">
                            <i>Shreyu N</i>
                            <p>{text}</p>
                        </div>
                    </div>
                </li>
            )
            : (

                <li className="clearfix odd">
                    <div className="chat-avatar">
                        <img src={`${process.env.REACT_APP_UPLOAD_URL}/${avatar}`} className="rounded" alt="dominic" />
                        <i>10:01</i>
                    </div>
                    <div className="conversation-text">
                        <div className="ctext-wrap">
                            <i>{name}</i>
                            <p>
                                {text}
                            </p>
                        </div>
                    </div>
                </li>
            )
    );



}
