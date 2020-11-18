
import queryString from 'query-string';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import io from 'socket.io-client';
import InfoBar from './InfoBar';
import Input from './Input';
import Messages from './Messages';

const ENDPOINT = process.env.REACT_APP_SOCKET;
let socket;

export default function Chat({username, avatar}) {
    
    const { roomId } = useParams();


    const [name, setName] = useState(username);
    const [room, setRoom] = useState(roomId);
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket = io(ENDPOINT);
        socket.emit('join', { name, room }, (error) => {
            if (error) {
                window.$.NotificationApp.send("Opps", error, "top-right", "rgba(0,0,0,0.2)", "error");
            }
        });
    }, []);

    useEffect(() => {
        socket.on('message', message => {
            setMessages(messages => [...messages, message]);
        });

        socket.on("roomData", ({ users }) => {
            setUsers(users);
        });
    }, []);

    const sendMessage = (event) => {
        event.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
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
                            <Messages messages={messages} name={name} avatar={avatar}></Messages>
                            <Input message={message} setMessage={setMessage} sendMessage={sendMessage}></Input>
                        </div> {/*  end card-body  */}
                    </div> {/*  end card  */}
                </div>
                {/*  end chat area */}

                <InfoBar></InfoBar>

            </div>


        </>
    )
}
