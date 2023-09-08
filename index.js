const express = require('express');
const mongoose = require('mongoose');

const server = express();

const port = 3000;

const routes = require('./routes')

server.use(express.json());
server.use('/api/v1', routes);

const URI_MONGO = 'mongodb+srv://root:Id7i7ut950703.@cluster.fospwsr.mongodb.net/myTasks?retryWrites=true&w=majority';

const mongoConnect =  async () => {
    try {
        await mongoose.connect(URI_MONGO);      
        console.log('Conectamos a la base de datos');
    } catch (error) {
        console.log(error);
    }
};

mongoConnect();


server.listen(port, () => {
    console.log(`Escuchando en puerto ${port}`)
});