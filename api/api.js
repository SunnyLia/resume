const http = require("http");
const data = require("./data");

http.createServer(function(req, res) {
	//解决跨域问题
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers',
		'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
	res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});
	if (req.url == "/getHomeList") {
		res.write(JSON.stringify(data));
	} else if (req.url == "/getOrderList") {
		res.write(JSON.stringify(data.orderList));
	}
	res.end();
}).listen(8081, function() {
	console.log('listening at =====> http://127.0.0.1:8081...');
});
