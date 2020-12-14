import openSocket from 'socket.io-client';
const ENDPOINT = process.env.REACT_APP_SOCKET;
const socket = openSocket(ENDPOINT);

function joinRoom(arrayUserIds, facebookId) {
    socket.emit('join', { arrayUserIds, facebook_id: facebookId }, (error) => {
        if (error) {
            window.$.NotificationApp.send("Opps", error, "top-right", "rgba(0,0,0,0.2)", "error");
        }

    });
}

function getDataRoom(fn) {
    socket.on('getData', ({ messages, roomId, user }) => {
        fn({ roomId, messages, user });
    });
}

function messageRoom(fn) {
    socket.on('message', message => {

        const messageRoom = message;
        fn(messageRoom);
        // setMessages(messages => [...messages, message]);
    });
}

function sendMessageRoom(data) {
    socket.emit('sendMessage', data);
}



export { joinRoom, getDataRoom, messageRoom, sendMessageRoom };
