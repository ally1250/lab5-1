var data = require("../data.json");

exports.addFriend = function(request, response) {
	// form variables:
	const {
		name,
		description,
	} = request.query;

	const newFriend = {
		name,
		description,
		imageURL: "http://lorempixel.com/400/400/people",
	};

	data.friends.push(newFriend);

	// console.log({newFriend});
	response.render('index', data);
	// Your code goes here
}