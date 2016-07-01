myApp.controller('dashboardController',function(appointmentFactory,userFactory,$location,$filter){
  var self = this
  self.activeUser;
  self.appointments = []
  var getActiveUser = function(){
    userFactory.getActiveUser(function(data){
      if (!data) {
        $location.url('/login')
      }
      self.activeUser = data
    })
    console.log(self.activeUser.name);
  };
  getActiveUser()
  var index = function(){
    appointmentFactory.index(function(appointments_from_factory){
    self.appointments = appointments_from_factory
    console.log(self.appointments);
    })
  }
  index()
  self.destroy = function(appointment){
    console.log(appointment._id);
    appointmentFactory.destroy(appointment._id, function(){
        index()
    })
  }
})
