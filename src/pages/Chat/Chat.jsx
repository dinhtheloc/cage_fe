
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import InfoBar from './InfoBar';
import Input from './Input';
import Messages from './Messages';

import { joinRoom, getDataRoom, messageRoom, sendMessageRoom } from '../../api/socket';

export default function Chat({ userProfile }) {
    const { facebookId } = useParams();
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [receiver, setReceiver] = useState({});
    const history = useHistory();

    useEffect(() => {
        const arrayUserIds = [userProfile.facebook_id, facebookId];
        if (userProfile.facebook_id === facebookId) {
            history.push("/");
            return;
        }
        joinRoom(arrayUserIds, facebookId);
    }, []);

    useEffect(() => {
        getDataRoom(({ messages, roomId, user }) => {
            setRoom(roomId);
            setMessages(messages);
            setReceiver(user);
        });

        messageRoom((messageRoom) => {
            setMessages(messages => [...messages, messageRoom]);
        });
    }, []);

    const sendMessage = (event) => {
        event.preventDefault();

        if (message) {
            const data = {
                message,
                roomId: room,
                user: { ...userProfile }
            }
            sendMessageRoom(data);
            setMessage('');
        }
    }

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box">
                        <div className="page-title-right">
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><a href="#">Tìm kiếm đồng đội</a></li>
                                <li className="breadcrumb-item active">Hội thoại</li>
                            </ol>
                        </div>
                        <h4 className="page-title">Hội thoại</h4>
                    </div>
                </div>
            </div>

            <div className="row">
                {/*  chat area  */}
                <div className="col-9">
                    <div className="card">
                        <div className="card-body">
                            <Messages messages={messages} userId={userProfile.facebook_id} name={userProfile.name} avatar={userProfile.avatar}></Messages>
                            <Input message={message} setMessage={setMessage} sendMessage={sendMessage}></Input>
                        </div> {/*  end card-body  */}
                    </div> {/*  end card  */}
                </div>
                {/*  end chat area */}
                <InfoBar
                    avatar={receiver.avatar}
                    name={receiver.name}
                    riotId={receiver.valorant_id}
                    riotName={receiver.valorant_name}
                    gender={receiver.gender}
                    rank={receiver.rank}
                ></InfoBar>

            </div>


        </>
    )
}
