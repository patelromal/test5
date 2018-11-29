import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  isocode: String,
  name: String,
  description: String
});

// const StudentSchema = new mongoose.Schema({
//   lname: String,
//   fname: String,
// });

const CountrySchema = new mongoose.Schema({
  isocode: String,
  name: String,
  description: String
});

const CitySchema = new mongoose.Schema({
  name: String,
  description: String,
  country: {type: mongoose.Schema.Types.ObjectId, ref: 'Country'},
});


const LanguageSchema = new mongoose.Schema({
  isocode: String,
  name: String
});

const User  = mongoose.model('User', UserSchema);
const Country  = mongoose.model('Country', CountrySchema);
const City     = mongoose.model('City', CitySchema);
const Language = mongoose.model('Language', LanguageSchema);
// const Student = mongoose.model('Student', StudentSchema);

export {User, Country, City, Language}
