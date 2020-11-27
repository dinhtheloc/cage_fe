
import queryString from 'query-string';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import io from 'socket.io-client';
import InfoBar from './InfoBar';
import Input from './Input';
import Messages from './Messages';

const ENDPOINT = process.env.REACT_APP_SOCKET;
let socket;

export default function Chat({ userProfile }) {
    const { facebookId } = useParams();
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [receiver, setReceiver] = useState({});

    useEffect(() => {
        socket = io(ENDPOINT);

        const arrayUserIds = [userProfile.facebook_id, facebookId];

        socket.emit('join', { arrayUserIds, facebook_id: facebookId }, (error) => {
            if (error) {
                window.$.NotificationApp.send("Opps", error, "top-right", "rgba(0,0,0,0.2)", "error");
            }
        });
    }, []);

    useEffect(() => {
        socket.on('getData', ({ messages, roomId, user }) => {
            setRoom(roomId);
            setMessages(messages);
            setReceiver(user);
            console.log('user', user);
        });

        socket.on('message', message => {
            setMessages(messages => [...messages, message]);
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
            socket.emit('sendMessage', data);
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
