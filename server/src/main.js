import http from 'http';
import application from './app';
import dotenv from 'dotenv';
import path from 'path'

dotenv.config({ path: path.join(__dirname , '../.env') })

process
    .on('unhandledRejection', (error, p) => {
        console.error(error, p);
    })
    .on('uncaughtException', (error) => {
        console.error(error);
        process.exit(1);
    });

const app = application();
const port = normalizePort(process.env.APP_PORT || '8080');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
    const parsedPort = parseInt(val, 10);
    if (isNaN(parsedPort)) {
        return val;
    }

    if (parsedPort >= 0) {
        return parsedPort;
    }

    return false;
}

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

    switch (error.code) {
        case 'EACCES':
            console.log(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.log(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    const addr = server.address();
    const bind =
        typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
    console.log(`Listening on ${bind}`);
}