
/*
 * GET users listing.
 */
var mongo = require('mongodb');
exports.list = function(req, res){
	var mongoUri = 'mongodb://saumyaDB:saumyaDBPW@ds049598.mongolab.com:49598/saumya-ray';
	mongo.Db.connect(mongoUri, function (err, db) {
		//res.send('Connected to DB : mongodb : driver');
		if(err){
			res.send(err);
		}else{
			var collection = db.collection('test');//get the DB selected
			var stream = collection.find().toArray(function(err, items) {
							if(err){
								res.send(err);
							}else{
								res.send(items);
							}
						});

		}
	});
};