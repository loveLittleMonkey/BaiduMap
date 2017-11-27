var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/baiduMap';    
 
var selectData = function(db, callback) {  
  var res = []
  //连接到表  
  var collection = db.collection('points');
     //查询一条数据
//   var whereStr = {"name":'长隆旅游度假区'};
//   collection.find(whereStr).toArray(function(err, result) {

    // 查询所有数据
    collection.find().toArray(function(err, result) {
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }  
        res = result;  
        callback(result);
    });
  return res;
}
 
MongoClient.connect(DB_CONN_STR, function(err, db) {
  console.log("连接成功！");
  selectData(db, function(result) {
    console.log(result);
    db.close();
  });
});

module.exports = {
  selectData: selectData
}