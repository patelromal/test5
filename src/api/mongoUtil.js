import { MongoClient } from 'mongodb';
var _db;

export function connectToServer(callback) {
    MongoClient.connect("mongodb://user1:welcome01@ds127342.mlab.com:27342/sspou", function (err, db) {
        _db = db;
        return callback(err);
    });
}
export function getDb() {
    return _db;
}