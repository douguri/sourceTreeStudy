/* 1. expressモジュールをロードし、インスタンス化してappに代入。*/
var express = require("express");
var app = express();

/* 2. listen()メソッドを実行して3000番ポートで待ち受け。*/
var server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

/* 3. 以後、アプリケーション固有の処理 */

// 写真のサンプルデータ
var photoList = [
    {
        id: "001",
        name: "photo001.jpg",
        type: "jpg",
        dataUrl: "http://localhost:3000/data/photo001.jpg"
    },{
        id: "002",
        name: "photo002.jpg",
        type: "jpg",
        dataUrl: "http://localhost:3000/data/photo002.jpg"
    }
]

// 写真リストを取得するAPI
app.get("/api/photo/list", function(req, res, next){
    res.json(photoList);
});

var twitter = require('twitter');
// View EngineにEJSを指定。
app.set('view engine', 'ejs');

// "/"へのGETリクエストでindex.ejsを表示する。拡張子（.ejs）は省略されていることに注意。
app.get("/", function(req, res, next){
    res.render("index", {});
});




// var bot = new twitter({
// 	consumer_key		:'bCGBXS9x3bna0KI8dZ4t0YgIG',
// 	consumer_secret		:'6kW3WfSM6TrkJTF8WYqWfJ3XD3vXTiXuYXuW13K8XSGrjTfI5B',
// 	access_token_key	:'855700274-8W2CuvSdWAw8a4AgePJPGULFdkrvr8IAsdAJ9XAF',
// 	access_token_secret	:'6XbnA3WgowRnUo9gtex3QzkRBkzW6Zhl5FRrrpSzvyG9v'
// });

// bot.updateStatus('bot用のテストです', function(data){
// 	console.log(data);
// })
