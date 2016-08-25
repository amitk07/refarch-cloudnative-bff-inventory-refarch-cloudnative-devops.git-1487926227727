module.exports = function(app, request) {

// Global variable for response object
var resJson = [];
var microserviceBaseUrl = "http://localhost:3000";

// get list of sample documents
app.get('/api/items/mock',function(req, res){

	var mockData = [
			{
				"description": "Punched-card tabulating machines and time clocks were not the only products offered by the young IBM. Seen here in 1930, manufacturing employees of IBM's Dayton Scale Company are assembling Dayton Safety Electric Meat Choppers. These devices, which won the Gold Medal at the 1926 Sesquicentennial International Exposition in Philadelphia, were produced in both counter base and pedestal styles (5000 and 6000 series, respectively). They included one-quarter horsepower models, one-third horsepower machines (Styles 5113, 6113F and 6213F), one-half horsepower types (Styles 5117, 6117F and 6217F) and one horsepower choppers (Styles 5128, 6128F and 6228F). Prices in 1926 varied from $180 to $375. Three years after this photograph was taken, the Dayton Scale Company became an IBM division, and was sold to the Hobart Manufacturing Company in 1934.",
				"id": 13401,
				"img": "api/containers/items/download/meat-chopper.jpg",
				"img_alt": "Dayton Meat Chopper",
				"name": "Dayton Meat Chopper",
				"price": 4599.99,
				"rating": 0
			}
		];
	  	return res.send(mockData);

});

// get list of sample documents
app.get('/api/items',function(req, res){

	var endPoint = microserviceBaseUrl + '/api/items';
	request(endPoint, function (error, response, body) {

		var bodyJson = JSON.parse(body);

		if (!error && response.statusCode == 200) {
    	//console.log(body);
			return res.json(bodyJson);
  	}else {
  		return res.send({"error":error});
  	}

	});
});

// insert sample document
app.post('/api/tasks', function (req, res){

});


// update a document
app.get('/api/items/:id',function(req, res){

	var endPoint = microserviceBaseUrl + '/api/items/' + req.params.id;
	request(endPoint, function (error, response, body) {

		var bodyJson = JSON.parse(body);

		if (!error && response.statusCode == 200) {
    	//console.log(body);
			return res.json(bodyJson);
  	}else {
  		return res.send({"error":error});
  	}

	});

});


// delete a document
app.delete('/api/task/list/:id',function(req, res){

  //return res.send(req.body);
});

};
