myApp.controller('usersController',function(userFactory,$location){
  var self = this
  self.newUser = {}
  self.errors = {}
  self.login = function(){
    var self = this
    if (!this.name) {
      self.errors = {missing:true}
    }
    else {
      userFactory.login(self.name, function(response_from_factory){
        console.log('response_from_factory', response_from_factory);
        self.error = {}
        $location.url('/bids')
      })
    }
  }
  self.logout = function(){
    userFactory.logout(function(){
      $location.url('/login')
    })
  }
})
