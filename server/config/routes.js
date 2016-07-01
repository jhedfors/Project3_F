var user = require('../controllers/users.js')
var appointment = require('../controllers/appointments.js')

module.exports = function(){
  app.get('/users',user.index)
  app.get('/user/:name',user.show)
  app.get('/user_id/:id',user.show_id)
  app.post('/user', function(req, res){
    console.log('ROUTEs', req);
    user.create(req,res)
  })
  app.get('/appointments',appointment.index)
  app.get('/appointments_on_date/:date',appointment.show)
  app.post('/appointment',appointment.create)
  app.delete('/appointment/:id',appointment.destroy)
}
