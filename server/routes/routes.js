const C = require('../controllers/controllers');
module.exports = function(app){
    app.post('/api/List', C.createList);
    app.get('/api/Lists',C.getAllLists);
    app.get('/api/List/:id',C.getList);
    app.delete('/api/List/:id',C.deleteList);
    app.put('/api/List/:id',C.updateList);
}