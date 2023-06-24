import {Server as HttpServer} from 'http';
import { InversifySocketServer } from 'inversify-socket-utils';
import {Server} from 'socket.io';
import container from '../../inversify.config';

class WebsocketServer {
    private server: InversifySocketServer;

    private constructor(httpServer: HttpServer) {
        const io = new Server(httpServer, {
            cors: {
                origin: '*'
            }
        })

        this.server = new InversifySocketServer(container, io);
    }

    static new(payload: {
        httpServer: HttpServer
    }) {
        const websocketServer = new WebsocketServer(payload.httpServer);

        websocketServer.run();

        return websocketServer;
    }

    public run() {
        this.server.build();

        console.log('Websocket server is running.');
    }
}

export default WebsocketServer;