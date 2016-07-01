
var userSchema = mongoose.Schema({
  name:{type:String, required:true, minlength:2},
},{timestamps:true})
var user = mongoose.model('User', userSchema)

var appointmentSchema = mongoose.Schema({
  complain:{type:String, required:true, minlength:10},
  _patient:{type:mongoose.Schema.Types.ObjectId, ref: 'User'},
  date:{type:Date, required:true},
  time:{type:Date, required:true},
},{timestamps:true})
var appointment = mongoose.model('Appointment', appointmentSchema)
