import { Server } from 'socket.io';
import http from 'http';
import express from 'express';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		origin: ["http://localhost:3000"],
		methods: ["GET", "POST"],
	}
});

export const getReceiverSocketId = (receiverId) => {
	return userSocketMap[receiverId];
};

const userSocketMap = {};

io.on('connection', (socket) => {
	console.log('Un utilisateur est connecté', socket.id);

	const userId = socket.handshake.query.userId;

	if (userId) {
		userSocketMap[userId] = socket.id;
	}

	io.emit('onlineUsers', Object.keys(userSocketMap));

	socket.on('disconnect', () => {
		console.log('Utilisateur déconnecté', socket.id);
		delete userSocketMap[userId];
		io.emit('onlineUsers', Object.keys(userSocketMap));
	});
});

export { app, server, io };

