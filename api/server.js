const http = require('http');
const app = require('./app');

//port testé
function normalizePort(valeur){
    let port = parseInt(valeur, 10);
    if(port > 0){
        return port;
    } else if(isNaN(port)){
        return valeur;
    }
    return false;
}
const port = normalizePort(process.env.PORT || 3030);
app.set('port', port);

//fonction pour l'erreur
function handleError(error){
    if (error.syscall !== 'listen'){
        throw error;
    }
    const adresse = server.address();
    const bind = typeof adresse === 'string' ? 'pipe ' + bind : 'port ' + port;
    switch (error.code){
        case 'EADDRINUSE':
            console.log(bind + ' is already in use');
            process.exit(1);
            break;
        case 'EACCESS':
            console.log(bind + ' require an elevated privileges');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

//function pour ecoute
function handleListen(){
    const adresse = server.address();
    const bind = typeof adresse === 'string' ? 'pipe ' + bind : 'port ' + port;
    console.log('Server listen at port ' + bind);
}

const server = http.createServer(app);
//gestion event
server.on('listening', handleListen);
server.on('error', handleError);

server.listen(process.env.PORT || 3030);