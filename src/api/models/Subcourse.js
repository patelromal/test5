const mongoose  = require('mongoose'), Schema = mongoose.Schema;

const SubcourseSchema = new mongoose.Schema({
  name: String,
  fees: String,
  details: String,
  course : { type: Schema.Types.ObjectId, ref: 'Course' }
});

const Subcourse = mongoose.model('Subcourse', SubcourseSchema);

export {Subcourse}