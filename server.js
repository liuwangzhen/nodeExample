var http = require('http')
var querystring = require('querystring');
var util = require('util');
http.createServer(function (req, res) {

    // 定义了一个post变量，用于暂存请求体的信息
    var post = '';     
 res.writeHead(200, 'we win', { "Content-Type": 'application/json;charset=utf-8', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS' });
    // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
    req.on('data', function(chunk){    
        post += chunk;
console.log(post)
    });
 
    // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
    req.on('end', function(){    
        

        res.end(post);
    });
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');