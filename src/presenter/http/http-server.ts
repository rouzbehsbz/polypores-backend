import {Server} from 'http';
import HttpConfig from '../../configuration/http-config';

class HttpServer {
    private readonly host = HttpConfig.HOST;
    private readonly port = HttpConfig.PORT;

    public server: Server;

    private constructor() {
        this.server = new Server();
    }

    static new() {
        const httpServer = new HttpServer();

        httpServer.run();

        return httpServer;
    }

    public run() {
        this.server.listen(this.port);

        console.log('HTTP server is running.');
    }
}

export default HttpServer;