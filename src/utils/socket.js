import { io } from "socket.io-client";

const SOCKET_URL = "https://gp-backend-ddgp.onrender.com";

export const socket = io(SOCKET_URL, {
  transports: ["websocket"],
});
