//const mongoose = require("mongoose");

//const schema = mongoose.schema;

//const contactSchema = new schema({
//name: {
//type: String,
//required: true,
//},
//email: {
//type: String,
//require: true,
//unique: true,
//},
//phone: Number,
//});

//module.exports = contact = mongoose.model("contact", contactSchema);

// require mongoose
/**const mongoose = require("mongoose");

// create contact schema
// const (schema) = mongoose
const schema = mongoose.Schema;

const contactSchema = new schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: Number,
});
module.exports = Contact = mongoose.model("Contact", contactSchema);
*/
// require mongoose
const mongoose = require("mongoose");

// create contact schema
// const (schema) = mongoose
const schema = mongoose.Schema;

const contactSchema = new schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: Number,
});
