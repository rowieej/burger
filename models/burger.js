var orm = require('../config/orm.js');

var burger = {
  selectAll: function (cb) {
    orm.all('burgers', function (res) {
      cb(res);
    });
  },
  // cols and vals are arrays
  insertOne: function (cols, vals, cb) {
    orm.create('burgers', cols, vals, function (res) {
      cb(res);
    });
  },
  updateOne: function (objColVals, condition, cb) {
    orm.update('burgers', objColVals, condition, function (res) {
      cb(res);
    });
  },
  
  delete: function(, ,cb){}

};

module.exports = burger;