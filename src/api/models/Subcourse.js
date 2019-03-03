const mongoose  = require('mongoose'), Schema = mongoose.Schema;

var ItemSchema = new Schema({
    label: String,
    description: String
});

const SubcourseSchema = new mongoose.Schema({
	name: String,
	items: [ItemSchema],
	details: String,
	course : { type: Schema.Types.ObjectId, ref: 'Course' }
});

const Subcourse = mongoose.model('Subcourse', SubcourseSchema);

export {Subcourse}