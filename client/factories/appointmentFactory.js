myApp.factory('appointmentFactory', function($http,$location){
  var factory = {}

  factory.create = function(appointment_info, callback){
      console.log('appointment_info', appointment_info);

      $http.post('/appointment', appointment_info).success(function(response_from_server){
        console.log('response_from_server',response_from_server);
        callback()
      })
  }
  factory.destroy = function(id, callback){
      console.log('id', id);
      $http.delete('/appointment/'+ id).success(function(response_from_server){
        console.log('response_from_server',response_from_server);
        callback()
      })
  }
  factory.index = function(callback){
    $http.get('/appointments').success(function(appointments_from_db){
      callback(appointments_from_db)
    })
  }

  factory.appointments_on_date = function(info, callback){
    $http.get('/appointments_on_date/'+ info).success(function(appointments_from_db){
      callback(appointments_from_db)
    })
  }
  // factory.reset = function(callback){
  //     console.log('in reset');
  //     $http.post('/reset').success(function(response_from_server){
  //       console.log('response_from_server',response_from_server);
  //       callback()
  //     })
  // }
  return factory
})
