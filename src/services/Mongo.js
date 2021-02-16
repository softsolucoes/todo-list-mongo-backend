const moogoose = require('mongoose');

function Mongo() {
    moogoose.connect(process.env.MONGO, { useUnifiedTopology: true, useNewUrlParser: true });
    let db = moogoose.connection;

    db.on('error', () => { console.log('houve um erro') });
    db.once('open', () => { console.log('banco carregado') });
}

module.exports = Mongo;