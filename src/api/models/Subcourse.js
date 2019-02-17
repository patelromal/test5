const mongoose  = require('mongoose'), Schema = mongoose.Schema;

const SubcourseSchema = new mongoose.Schema({
	name: String,
	prerequisites: String,
	regular: String,
	fees: String,
	feesremark: String,
	online: String,
	home: String,
	centrebased: String,
	structure: String,
	course : { type: Schema.Types.ObjectId, ref: 'Course' }
});

const Subcourse = mongoose.model('Subcourse', SubcourseSchema);

export {Subcourse}