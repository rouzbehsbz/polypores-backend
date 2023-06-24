import "reflect-metadata";
import HttpServer from "./presenter/http/http-server";
import WebsocketServer from "./presenter/websocket/websocket-server";

const httpServer = HttpServer.new();

WebsocketServer.new({
    httpServer: httpServer.server
})