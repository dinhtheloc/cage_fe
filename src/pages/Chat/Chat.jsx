
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import InfoBar from './InfoBar';
import Input from './Input';
import Messages from './Messages';
import Breadcrumb from '../../components/Breadcrumb';

export default function Chat({ userProfile, socketio }) {
    
    const { facebookId } = useParams();
    const [socket, setSocketio] = useState(socketio);
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [receiver, setReceiver] = useState({});
    const history = useHistory();

    useEffect(() => {
        console.log('socketio', socketio);
        const arrayUserIds = [userProfile.facebook_id, facebookId];
        if (userProfile.facebook_id === facebookId) {
            history.push("/");
            return;
        }
        socket.joinRoom(arrayUserIds);

        socket.getDataRoom(({ messages, roomId, user }) => {
            setRoom(roomId);
            setMessages(messages);
            setReceiver(user);
        });

        socket.receiveMessages((messageRoom) => {
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
            socket.sendMessageRoom(data);
            setMessage('');
        }
    }

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <Breadcrumb
                        title={'Hội thoại'}
                    ></Breadcrumb>
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
