// src/index.ts

import * as http from "http";
import * as socketIO from "socket.io";

import { Message } from "./domain/message";

function run(port: number = 3000): void {
  let server: http.Server = http.createServer();
  let io: any = socketIO(server);

  server.listen(port, () => {
    console.log("Listening port %s", port);
  });

  io.on("connection", (socket: any) => {
    socket.on("message", (message: Message) => {
      io.emit("message", JSON.stringify(message));
    });
  });
}

run(3000);
