import { requestFactory } from './api';
import { baseUrl } from "../utils/constants"

export function dataFactory(token, userId) {
    const api = requestFactory(token, userId);

    async function getRooms() {
        return api.get(`${baseUrl}/data/rooms`);
    }

    async function getRoom(roomId) {
        return api.get(`${baseUrl}/data/rooms/${roomId}`);
    }

    async function createRoom(roomInfo) {
        return api.post(`${baseUrl}/data/rooms`, roomInfo);
    }

    async function editRoom(roomInfo, roomId) {
        return api.update(`${baseUrl}/data/rooms/${roomId}`, roomInfo);
    }

    async function deleteRoom(roomId) {
        return api.del(`${baseUrl}/data/rooms/${roomId}`);
    }

    async function createMessage(commentInfo) {
        return api.post(`${baseUrl}/data/comments/`, commentInfo);
    }

    async function getAllMessages() {
        return api.get(`${baseUrl}/data/comments`);
    }

    async function getMessagesPerRoom(roomId) {
        const match = encodeURIComponent(`roomId="${roomId}"`);
        const relations = encodeURIComponent(`author=_ownerId:users`)
        return api.get(`${baseUrl}/data/comments?where=${match}&load=${relations}`);
    }

    async function login(loginData) {
        return api.post(`${baseUrl}/users/login`, loginData);
    }

    async function register(registerData) {
        return api.post(`${baseUrl}/users/register`, registerData);
    }

    async function logout() {
        return api.get(`${baseUrl}/users/logout`);
    }

    return {
        getRooms,
        getRoom,
        createRoom,
        editRoom,
        deleteRoom,
        createMessage,
        getAllMessages,
        getMessagesPerRoom,
        login,
        register,
        logout
    }
}

