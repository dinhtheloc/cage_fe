import openSocket from 'socket.io-client';
const ENDPOINT = process.env.REACT_APP_SOCKET;

class Socket {
    constructor(_id) {
        this.socket = openSocket(ENDPOINT, { query: `_id=${_id}` });
    }
    
    stats(fn) {
        this.socket.on('stats', (data) => {
            fn(data);
        });
    }

    joinRoom(arrayUserIds) {
        this.socket.emit('join', { arrayUserIds }, (error) => {
            if (error) {
                window.$.NotificationApp.send("Opps", error.status, "top-right", "rgba(0,0,0,0.2)", "error");
            }

        });
    }

    getDataRoom(fn) {
        this.socket.on('getData', ({ messages, roomId, user }) => {
            fn({ roomId, messages, user });
        });
    }

    receiveMessages(fn) {
        this.socket.on('message', message => {

            const messageRoom = message;
            fn(messageRoom);
        });
    }

    sendMessageRoom(data) {
        this.socket.emit('sendMessage', data);
    }

    joinNotification(facebookId) {
        this.socket.emit('joinNotification', { facebook_id: facebookId }, (error) => {
            if (error) {
                window.$.NotificationApp.send("Opps", error, "top-right", "rgba(0,0,0,0.2)", "error");
            }
        });
    }


    getNotifications(fn) {
        this.socket.on('getNotifications', ({ notifications, count }) => {
            fn({ notifications, count });
        });
    }


    receiveNotifications(fn) {
        this.socket.on('notifications', ({ notifications, count }) => {
            fn({ notifications, count });
        });
    }

}

export default Socket;
