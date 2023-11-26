import { requestFactory } from './dataApi';
import { BASE_URL } from "../utils/constants";

export function dataFactory(token, userId) {
    const api = requestFactory(token, userId);

    async function getRooms() {
        return api.get(`${BASE_URL}/data/rooms`);
    }

    async function getRoom(roomId) {
        return api.get(`${BASE_URL}/data/rooms/${roomId}`);
    }

    async function createRoom(roomInfo) {
        return api.post(`${BASE_URL}/data/rooms`, roomInfo);
    }

    async function editRoom(roomInfo, roomId) {
        return api.update(`${BASE_URL}/data/rooms/${roomId}`, roomInfo);
    }

    async function deleteRoom(roomId) {
        return api.del(`${BASE_URL}/data/rooms/${roomId}`);
    }

    async function createMessage(messageInfo) {
        return api.post(`${BASE_URL}/data/messages`, messageInfo);
    }

    async function getAllMessages() {
        return api.get(`${BASE_URL}/data/messages`);
    }

    async function getMessagesPerRoom(roomId) {
        const match = encodeURIComponent(`roomId="${roomId}"`);
        const relations = encodeURIComponent(`author=_ownerId:users`)
        return api.get(`${BASE_URL}/data/messages?where=${match}&load=${relations}`);
    }

    async function getRoomWithBookerDetails(roomId) {
        const relations = encodeURIComponent(`booker=bookedBy:users`);
        return api.get(`${BASE_URL}/data/rooms/${roomId}&load=${relations}`);
    }

    async function getRoomWithOwnerDetails(roomId) {
        const relations = encodeURIComponent(`author=_ownerId:users`);
        return api.get(`${BASE_URL}/data/rooms/${roomId}&load=${relations}`);
    }

    async function login(loginData) {
        return api.post(`${BASE_URL}/users/login`, loginData);
    }

    async function register(registerData) {
        return api.post(`${BASE_URL}/users/register`, registerData);
    }

    async function logout() {
        return api.get(`${BASE_URL}/users/logout`);
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
        getRoomWithBookerDetails,
        getRoomWithOwnerDetails,
        login,
        register,
        logout
    }
}

