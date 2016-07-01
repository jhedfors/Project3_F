myApp.controller('new_appointmentController',function(appointmentFactory,userFactory,$location,$filter){
  var self = this
  self.activeUser;
  self.appointments = []
  self.today = new Date()
  var index = function(){
    appointmentFactory.index(function(appointments_from_factory){
    self.appointments = appointments_from_factory
    console.log(self.appointments);
    })
  }
  index()

  var getActiveUser = function(){
    userFactory.getActiveUser(function(data){
      if (!data) {
        $location.url('/index')
      }
      self.activeUser = data
    })
  };
  getActiveUser()
  self.create = function(info){
    console.log('info',info.date);
    if (info.date < self.today) {
      alert('Appointment must be in the future');
    }

    else{
      var count = 0
      for (var i = 0; i < self.appointments.length; i++) {
        console.log(self.appointments[i].date);
        console.log(info.date.toISOString());
        if (self.appointments[i].date == info.date.toISOString()) {
          console.log('matching');
          count ++
        }
      }
      if (count > 2) {
        alert('no appointments available')
      }
      else if (info.complain <11) {
        alert('must be at least 10 characters')
        $location.url('/new_appointment')

      }

      else{
        var appointment_info = {_patient: self.activeUser, date:info.date, time:info.time, complain: info.complain}
        appointmentFactory.create(appointment_info, function(){
          $location.url('/')
        })

      }
      console.log('just right');
    }
  }
})
