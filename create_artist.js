const db = require('./models/index');
let prompt = require('prompt-promise');
let res = [];

prompt('Artist name? ')
.then(function(val) {
    res.push(val);
    db.artist.create({artist_name: val})
    .then(function(result) {
        console.log(`Created artist with ID ${result.dataValues.id}.`);
        prompt.done();
    });
})
.catch(function(err) {
    console.log('error:', err.stack);
    prompt.finish();
});

