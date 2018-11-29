import mongoose from 'mongoose';

export default function(callback) {
	mongoose.connect('mongodb://user1:welcome01@ds127342.mlab.com:27342/sspou');
	callback();
}
