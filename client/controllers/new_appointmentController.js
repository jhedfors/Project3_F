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
    console.log(info);
    var timeNumber = Number(info.time.toTimeString().substring(0, 2)+info.time.toTimeString().substring(3, 5));
    if (info.date.toISOString().substring(0, 10) < self.today.toISOString().substring(0, 10)) {
      alert('Appointment must be in the future');
    }
    else if (timeNumber < 0800 || timeNumber > 1700){
      alert('Appointment must be between 8:00:00 AM and 5:00:00 PM')
    }
    else if (info.complain == null){
      alert('Purpose for Visit must contain a minimum of 10 characters')
    }
    else{
      var count = 0
      for (var i = 0; i < self.appointments.length; i++) {
        if (self.appointments[i].date.substring(0, 10) == info.date.toISOString().substring(0, 10)) {
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
        var appointment_info = {_patient: self.activeUser, date:info.date.toISOString().substring(0, 10), time:info.time, complain: info.complain}
        appointmentFactory.create(appointment_info, function(){
          $location.url('/')
        })
      }
      console.log('just right');
    }
  }
})
