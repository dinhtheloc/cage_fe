import openSocket from 'socket.io-client';
const ENDPOINT = process.env.REACT_APP_SOCKET;
const socket = openSocket(ENDPOINT);

function joinRoom(arrayUserIds) {
    socket.emit('join', { arrayUserIds }, (error) => {
        if (error) {
            window.$.NotificationApp.send("Opps", error.status, "top-right", "rgba(0,0,0,0.2)", "error");
        }

    });
}

function getDataRoom(fn) {
    socket.on('getData', ({ messages, roomId, user }) => {
        fn({ roomId, messages, user });
    });
}

function receiveMessages(fn) {
    socket.on('message', message => {

        const messageRoom = message;
        fn(messageRoom);
    });
}

function sendMessageRoom(data) {
    socket.emit('sendMessage', data);
}

function joinNotification(facebookId) {
    socket.emit('joinNotification', { facebook_id: facebookId }, (error) => {
        if (error) {
            window.$.NotificationApp.send("Opps", error, "top-right", "rgba(0,0,0,0.2)", "error");
        }
    });
}


function getNotifications(fn) {
    socket.on('getNotifications', ({ notifications, count }) => {
        fn({ notifications, count });
    });
}


function receiveNotifications(fn) {
    socket.on('notifications', ({ notifications, count }) => {
        fn({ notifications, count });
    });
}


export {
    joinRoom,
    getDataRoom,
    receiveMessages,
    sendMessageRoom,
    joinNotification,
    getNotifications,
    receiveNotifications
};
